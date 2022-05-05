import { clearUser, clearToken } from './local-storage-service';
import { ROUTS } from '../constants/routes';

export const findUser = () => window.location.href = ROUTS.find_users;

export const logout = () => {
  clearUser();
  clearToken();
  window.location.href = ROUTS.sign_in;
};
