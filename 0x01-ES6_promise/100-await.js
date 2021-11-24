import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const result = {};
  try {
    const upload = await uploadPhoto();
    result.photo = upload;
  } catch (e) {
    result.photo = null;
  }

  try {
    const create = await createUser();
    result.user = create;
  } catch (e) {
    result.user = null;
  }
  return result;
}
