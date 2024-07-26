function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const success = true;
    if (!success) {
      reject(new Error('The fake API is not working currently'));
    } else {
      resolve({
        status: 200,
        body: 'Success',
      });
    }
  });
}

export default getFullResponseFromAPI(success);
