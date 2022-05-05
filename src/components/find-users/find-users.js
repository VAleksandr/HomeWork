import { Header } from '../header/header';
import { findUser, logout } from '../../shared/services/header-service';

export const findUrersPageHandler = async () => {
  const findUsersHeaderOut = document.querySelector('.find-users');
  const findUsersHeader = new Header(findUser, logout);

  findUsersHeaderOut.prepend(findUsersHeader.getHeaderTemplate());

}
