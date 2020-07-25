(function() {
  const weeks = ['日', '月', '火', '水', '木', '金', '土']

  let calendarHTML = '<table>'

  const calendar = document.getElementById('calendar')

  function createCalendarHeader() {
    let calendarHeader = '<tr>'
    for (let i=0, weeksLength=weeks.length; i<weeksLength; i++) {
      calendarHeader += `<td>${weeks[i]}</td>`
    }
    calendarHeader += '</tr>'
    return calendarHeader
  }

  function createCalendarBody(year, month) {
    function addDate() {
      calendarBody += `<td>${date.getDate()}</td>`
      date.setDate(date.getDate() + 1)
    }

    let calendarBody = '<tr>'
    let date = new Date(year, month -1, 1)
    const startDay = date.getDay()
    date.setDate(date.getDate() - startDay)
    for (let i=0; i<7; i++) {
      addDate()
    }
    calendarBody += '</tr>'
    for (let i=0; i<4; i++) {
      calendarBody += '<tr>'
      for (let j=0; j<7; j++) {
        addDate()
      }
    }
    calendarBody += '</tr>'

    return calendarBody
  }

  function main() {
    calendarHTML += createCalendarHeader() + createCalendarBody(2020, 7) + '</table>'
    calendar.innerHTML = calendarHTML
  }
  main()
})()
