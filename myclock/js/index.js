let visiblePoint = true // 显示时间闪动点
function displayTime() {
  // 组装日期
  let now = new Date() //现在的时间
  let month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}月` : `${now.getMonth() + 1}月` //获取月
  let date = now.getDate() < 10 ? `0${now.getDate()}日` : `${now.getDate()}日` //获取日

  // 组装时间
  let hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours() //获取小时
  let minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes() //获取分钟

  // 日期显示
  let dateInfos = document.querySelector('.dateInfos') //日期元素
  dateInfos.innerHTML = month + date // 显示日期

  // 时间显示
  let hours = document.querySelector('.hours') //小时元素
  let point = document.querySelector('.point') //点元素
  let mins = document.querySelector('.mins') //分钟元素
  hours.innerHTML = hour //显示小时
  mins.innerHTML = minute //显示分钟

  // 时间点一秒钟闪动一次
  visiblePoint? (point.style.visibility = 'hidden') : (point.style.visibility = 'visible')
  // 自动显示和隐藏
  visiblePoint = !visiblePoint
  let myTime = setTimeout("displayTime()", 1000)
}
displayTime()