import { getUser } from '../../shared/services/local-storage-service';

export class Header {
  constructor(callback1, callback2) {
    this.callback1 = callback1;
    this.callback2 = callback2;
  }

  getHeaderTemplate() {
    const header = document.createElement('div');
    const headerLogo = document.createElement('div');
    const headerTitle = document.createElement('p');
    const headerUser = document.createElement('div');
    const headerUserInfo = document.createElement('div');
    const headerUserName = document.createElement('p');
    const headerEmail = document.createElement('p');
    const headerUserPhoto = document.createElement('div');
    const findUserBtn = document.createElement('button');
    const logoutBtn = document.createElement('button');
    const { firstName, lastName, email } = getUser();

    header.classList.add('header');
    headerLogo.classList.add('header__logo');
    headerTitle.innerText = 'TODO LIST';
    headerUser.classList.add('header__user');
    headerUserInfo.classList.add('header__user__info');
    headerUserName.innerText = `${firstName} ${lastName}`;
    headerEmail.innerText = email;
    headerUserPhoto.classList.add('header__user__photo');
    findUserBtn.innerText = 'FIND USERS';
    logoutBtn.innerText = 'LOGOUT';

    headerLogo.append(headerTitle);
    headerUserInfo.append(headerUserName, headerEmail);
    headerUser.append(
      headerUserInfo,
      headerUserPhoto,
      findUserBtn,
      logoutBtn
    );
    header.append(headerLogo, headerUser);

    findUserBtn.onclick = () => this.callback1();

    logoutBtn.onclick = () => this.callback2();

    return header;
  }
}
