/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const upload = uploadPhoto();
  const create = createUser();
  Promise.all([upload, create]).then((result) => {
    console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
