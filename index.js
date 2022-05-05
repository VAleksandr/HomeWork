// import { initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// import { FIREBASE_CONFIG, AUTH_URL, DB_URL } from './src/api/api-config';
//import './src/styles/style.scss';

//------------0
//const app = initializeApp(FIREBASE_CONFIG);
// const auth = getAuth();

// createUserWithEmailAndPassword(auth, 'test@mail.com', '123456')
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(error);
//     // ..
//   });

//------------0

// fetch(
//     AUTH_URL,
//     {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify ({
//             email: 'test4@mail.com',
//             password: '123456'
//         })
//     }
// ).then(response => console.log(response.json()));

//------------1

// const createTodo = () => {
//     fetch(
//         `${DB_URL}/todos.json`,
//         {
//             method: 'POST',
//             body: JSON.stringify({
//                 title: 'My todo 4',
//                 description: 'Do smth 4'
//             })
//         }
//     )
//     .then(response => response.json())
//     .then(res => console.log(res));
// }

// createTodo();

//------------2

// const getTodos = () =>{
//     fetch(
//         `${DB_URL}/todos.json`,
//         {
//             method: 'GET'
//         }
//     )
//      .then(response => response.json())
//      .then(res => {
//          const arr = Object.keys(res).map(key => ({id: key, ...res[key]}));
//          console.log(arr);
//      });
// }

// getTodos();

//------------3

// const updateTodo = () => {
//     fetch(
//         `${DB_URL}/todos/-MySljE6RzJdMAB7EfWy.json`,
//         {
//             method: 'PUT',
//             body: JSON.stringify({
//                 title: 'Updated title',
//                 description: 'Updated description'
//             })
//         }
//     );
// }

// updateTodo();

//------------4

// const deleteTodo = () =>{
//     fetch(
//         `${DB_URL}/todos/-MySljE6RzJdMAB7EfWy.json`,
//         {
//             method: 'DELETE'
//         }
//     )
// }

// deleteTodo();

import { PATHNAMES, ROUTS } from './src/shared/constants/routes';
import { signInHandler } from './src/components/sign-in/sign-in';
import { signUpHandler } from './src/components/sign-up/sign-up';
import { mainPageHandler } from './src/components/main/main';
import { findUrersPageHandler } from './src/components/find-users/find-users';
import { getToken, getUser } from './src/shared/services/local-storage-service';

import './src/styles/style.scss';

const routerMap = new Map([
    [PATHNAMES.home, () => window.location.href = ROUTS.sign_in],
    [PATHNAMES.sign_in, () => signInHandler()],
    [PATHNAMES.sign_up, () => signUpHandler()],
    [PATHNAMES.main, () => {
        !getToken() && !getUser ?  window.location.href = ROUTS.sign_in : mainPageHandler();
    }],
    [PATHNAMES.find_users, () => findUrersPageHandler()]
]);

window.onload = () => {
    const pathname = window.location.pathname;

    // было
    // switch (pathname) {
    //     case PATHNAMES.home:
    //         window.location.href = ROUTS.sign_in;
    //         break;
    //     case PATHNAMES.sign_in:
    //         signInHandler();
    //         break;
    //     case PATHNAMES.main:
    //         !getToken() ?  window.location.href = ROUTS.sign_in : null;
    //         break;
    //     case PATHNAMES.sign_up:
    //         signUpHandler();
    //         break;
    //     default:
    //         break;
    // }

    // стало c использованием Map
    routerMap.get(pathname)();
}
