export function getDate () {
  var now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const second = now.getSeconds()
  var date = ''
  date = year + '-'
  if (month < 10) {
    date = date + '0' + month + '-'
  } else {
    date = date + month + '-'
  }
  if (day < 10) {
    date = date + '0' + day + ' '
  } else {
    date = date + day + ' '
  }
  if (hours < 10) {
    date = date + '0' + hours + ':'
  } else {
    date = date + hours + ':'
  }
  if (minutes < 10) {
    date = date + '0' + minutes + ':'
  } else {
    date = date + minutes + ':'
  }
  if (second < 10) {
    date = date + '0' + second
  } else {
    date = date + second
  }
  return date
}
