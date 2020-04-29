export const toggleStatus = () => {
  return {
    type:'TOGGLE_STATUS'
  }
}

export const sort = (sort) => {
  return {
    type: "SORT",
    sort //sort: sort
  }
}