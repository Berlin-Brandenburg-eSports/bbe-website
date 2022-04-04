#!/bin/bash
set -e
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

enviroment="$1";

if [ -z ${enviroment+x} ]
then
  echo 'ERROR: missing enviroment';
  exit 1;
fi

if [ "$enviroment" != "preview" ] && [ "$enviroment" != "production" ]
then
  echo 'ERROR: allowed enviroments: "preview", "production"';
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

echo "Starting deployment for '$enviroment' (branch: '$branch')";

echo "Install dependencies"
npm ci --ignore-scripts

NX_BRANCH="$branch" npx nx affected --target=lint --base="$branch"~1 --head="$branch" --parallel --max-parallel=2
NX_BRANCH="$branch" npx nx affected --target=test --base="$branch"~1 --head="$branch" --parallel --max-parallel=2
apps=$(NX_BRANCH="$branch" npx nx print-affected --target=build --base="$branch"~1 --head="$branch" --select=tasks.target.project)

if [[ "$apps" == *"backend"* ]]
then
  echo "Build Backend"
  NX_BRANCH="$branch" npx nx build backend --configuration=production
  pm2 reload "'$proc'/backend"
fi

if [[ "$apps" == *"frontend"* ]]
then
  echo "Build Frontend"
  NX_BRANCH="$branch" npx nx build frontend --configuration=production
  pm2 reload "'$proc'/frontend"
fi
