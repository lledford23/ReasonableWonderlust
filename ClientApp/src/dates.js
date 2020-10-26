import format from 'date-fns/format'

const dateFormat = `EEEE, MMMM do, yyyy`

export function formatDate(dateToFormat) {
  if (!dateFormat || dateToFormat === '') return ''
  console.log(dateToFormat)
  const formattedDate = format(Date.parse(dateToFormat), dateFormat)

  return formattedDate
}
