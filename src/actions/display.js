function changeCount(count) {
  return {
    type: "DISPLAY_CHANGE_COUNT",
    count: count
  };
}

function changeSort(sort) {
  return {
    type: "DISPLAY_CHANGE_SORT",
    sort: sort
  };
}

export { changeCount, changeSort };
