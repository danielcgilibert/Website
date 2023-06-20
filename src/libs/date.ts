export const formatDate = (date: Date) => {
  const newDate = new Date(date)
  const formatDate = `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()}`
  return formatDate
}
