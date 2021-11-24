import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const result = {};
  try {
    const upload = await uploadPhoto();
    result.photo = upload;
    const create = await createUser();
    result.user = create;
  } catch (e) {
    result.photo = null;
    result.user = null;
  }
  return result;
}
