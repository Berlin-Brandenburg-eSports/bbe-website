import { Role } from '@bbe/types';

export function hasPermission(userRole: Role, requiredRole: Role): boolean {
  const keys = Object.values(Role);

  return keys.indexOf(userRole) >= keys.indexOf(requiredRole);
}
