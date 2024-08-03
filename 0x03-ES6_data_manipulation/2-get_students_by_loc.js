export default function getStudentsByLocation(arrayObj, city) {
  return arrayObj.filter(arr => arr.location == city)
}
