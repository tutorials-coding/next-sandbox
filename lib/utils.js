export const getByIdsRange = (items, from, to) => {
  return items.filter((item) => item.id >= from && item.id <= to)
}
