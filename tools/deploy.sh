#!/bin/sh
set -e
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

enviroment="$1";

if [ -z ${enviroment+x} ]
then
  echo '\033[0;31mMissing Enviroment';
  exit 1;
fi

if [ "$enviroment" != "preview" ] && [ "$enviroment" != "production" ]
then
  echo '\033[0;31mAllowed Enviroments: "preview", "production"';
  exit 1;
fi

if [ "$enviroment" = "preview" ]
then
  branch="develop"
  proc="@dev"
else
  branch="production"
  proc="@prod"
fi

echo "\033[0;32mStarting deployment for '$enviroment' (branch: '$branch')\033[0m";

echo "\nInstall Dependencies"
npm ci --ignore-scripts

echo "\nLint Affected Apps"
NX_BRANCH="$branch" npx nx affected --target=lint --base="$branch"~1 --head="$branch" --parallel --max-parallel=2

echo "\nTest Affected Apps"
NX_BRANCH="$branch" npx nx affected --target=test --base="$branch"~1 --head="$branch" --parallel --max-parallel=2

apps=$(NX_BRANCH="$branch" npx nx print-affected --target=build --base="$branch"~1 --head="$branch" --select=tasks.target.project)

if [ "$apps" == *"backend"* ]
then
  echo "\nBuild Backend"
  NX_BRANCH="$branch" npx nx build backend --configuration=production
  pm2 reload "'$proc'/backend"
fi


if [ "$apps" == *"frontend"* ]
then
  echo "\nBuild Frontend"
  NX_BRANCH="$branch" npx nx build frontend --configuration=production
  pm2 reload "'$proc'/frontend"
fi
