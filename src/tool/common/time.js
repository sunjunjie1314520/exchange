import dayjs from 'dayjs'

// 获取今天
export function getDay() {
  return dayjs().format('YYYY-MM-DD HH:mm:ss')
}

// 获取今天 YYYY-MM-DD
export function getToday() {
  return dayjs().format('YYYY-MM-DD')
}

// 获取明天 YYYY-MM-DD
export function getTomorrow() {
  return dayjs().add(1, 'day').format('YYYY-MM-DD')
}

// date 对象抓换成 string
export function changeTimeType(date) {
  return dayjs(date).format('YYYY-MM-DD')
}

// string 转成 date
export function stringToDate(value) {
  return dayjs(value).toDate()
}

export function dataToString(value) {
  return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
}

// // 上一周
// export function lastWeek() {
//   const wekArr = [6, 5, 4, 3, 2, 1, 0]
//   let currday = 0;
//   wekArr.map((item, index) => {
//     if (dayjs().day() === item) {
//       currday = index + 1;
//     }
//   });
//   return {
//     fristWday: dayjs().subtract(currday - 1, 'day').format('YYYY-MM-DD'),
//     lastWday: dayjs().subtract(7 - currday, 'day').format('YYYY-MM-DD')
//   }
// }
// 上一天
export function lastDay() {
  return dayjs().subtract(1, 'day').format('YYYY-MM-DD')
}

// 本月
export function thisMonth() {
  return {
    thisMonthStart: dayjs().startOf('month').format('YYYY-MM-DD'),
    thisMonthEnd: dayjs().endOf('month').format('YYYY-MM-DD')
  }
}
// 时间戳转yyyy-MM-dd HH:mm:ss
export function formatDateTime() {
  return dayjs().format('YYYY-MM-DD HH:mm:ss')
}

// 时间戳 转 06月01号00:01
export function formatTime(value) {
  let month = dayjs(value).month() + 1
  if (month < 10) {
    month = "0" + month
  }
  let day = dayjs(value).date()
  if (day < 10) {
    day = "0" + day
  }
  let hour = dayjs(value).hour()
  if (hour < 10) {
    hour = "0" + hour
  }
  let minute = dayjs(value).minute()
  if (minute < 10) {
    minute = "0" + minute
  }
  return `${month}月${day}号${hour}:${minute}`
}

// 时间差 转 HH:mm:ss
export function getDiffTime(timer) {

  let hour = Math.floor(timer / 1000 / 3600);
  if (hour < 10) {
    hour = "0" + hour
  }

  let leavel = timer % (3600 * 1000); // 计算小时后剩余的时间

  let min = Math.floor(leavel / (60 * 1000)); // 计算剩余的分钟数

  let leavel2 = leavel % (60 * 1000); // 计算剩余分钟后剩余的毫秒数

  let second = Math.floor(leavel2 / 1000); // 计算剩余的秒数

  if (min < 10) {
    min = "0" + min
  }
  if (second < 10) {
    second = "0" + second
  }
  return `${hour}:${min}:${second}`
}

export default new Date()