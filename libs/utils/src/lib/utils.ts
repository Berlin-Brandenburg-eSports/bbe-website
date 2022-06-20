import { Role } from '@bbe/types';
import axios from 'axios';

export function hasPermission(userRole: Role, requiredRole: Role): boolean {
  const keys = Object.values(Role);

  return keys.indexOf(userRole) >= keys.indexOf(requiredRole);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getErrorMessage(error: any): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || error.message;
  }

  return error.message;
}
