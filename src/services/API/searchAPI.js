// import axios from 'axios';

export const loginWithGoogle = () => {
  fetch('/auth/google')
    .then(res=> res.json())
    .then((data) => console.log(data))
}
