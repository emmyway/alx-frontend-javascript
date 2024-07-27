// imorting the functions from utils.js
import { uploadPhoto, createUser } from './utils';


async function asyncUploadUser() {
  try {
    // call both functions and await their results
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    // return the obkect with the responses
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
      // if any of the function fail, return an object with null values
      return {
	photo: null;
	user: null;
      };
  }
}
