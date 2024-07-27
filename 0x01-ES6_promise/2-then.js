export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ ststus: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => console.log('Got a respknse from the API'));
}
