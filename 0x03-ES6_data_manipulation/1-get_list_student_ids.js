import "./0-get_list_students"
export default function getListStudentIds(arrObj) {
  if (!Array.isArray(arrObj)) {
    return [];
  } else {
    return arrObj.map(arr => arr.id)
  }
}
