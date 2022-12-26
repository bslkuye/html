const calendar = $container => {
  //title dom
  const title = document.createElement('div');
  title.innerText = 'Date Picker';
  title.className = 'title'
  $container.appendChild(title);

  //select date box dom
  const datePicker = document.createElement('button');
  datePicker.innerText = 'Select Date';
  datePicker.className = 'datePicker';
  datePicker.tabIndex = '0';
  $container.appendChild(datePicker);

  //select click event
  datePicker.addEventListener('click', (event) => {
    if (calendar.className == 'calender hidden') {
      calendar.classList.remove('hidden');
    } else {
      calendar.classList.add('hidden')
    }
  })

  //calender container
  const calendar = document.createElement('div');
  calendar.className = 'calender';
  calendar.classList.add('hidden');
  $container.appendChild(calendar);

  //calender nav
  const calendarNav = document.createElement('div');
  calendarNav.className = 'calender-nav';
  calendar.appendChild(calendarNav);

  const monthDownBtn = document.createElement('button');
  monthDownBtn.className = 'month-btn';
  monthDownBtn.id = 'month-down';
  monthDownBtn.innerText = '◀︎'

  const monthUpBtn = document.createElement('button');
  monthUpBtn.className = 'month-btn';
  monthUpBtn.id = 'month-up';
  monthUpBtn.innerText = '▶︎'

  const yearMonthContainer = document.createElement('div');
  yearMonthContainer.className = 'year-month-container';

  calendarNav.appendChild(monthDownBtn);
  calendarNav.appendChild(yearMonthContainer);
  calendarNav.appendChild(monthUpBtn);

  //day
  const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let date = new Date(); // 달력이 보여주는 달
  let today = new Date(); // 오늘
  let selectDay = null; // 선택한 날
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = new Date(year, month, 1).getDay(); //이번달 시작 요일
  const monthDom = document.createElement('div');
  monthDom.className = 'month';

  const yearDom = document.createElement('div');
  yearDom.className = 'year';

  monthDom.innerText = monthArr[date.getMonth()];
  yearDom.innerText = date.getFullYear();

  yearMonthContainer.appendChild(monthDom);
  yearMonthContainer.appendChild(yearDom);

  const calendarGrid = document.createElement('div');
  calendarGrid.className = 'calender-grid';
  calendar.appendChild(calendarGrid);

  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  for (let i = 0; i < 7; i++) {
    const weekName = document.createElement('span');
    weekName.className = 'week';
    weekName.innerText = week[i];
    calendarGrid.appendChild(weekName);
  }

  for (let i = 0; i < 42; i++) {
    const dayblock = document.createElement('button');
    dayblock.id = 'day' + i;
    dayblock.className = 'daybtn'
    dayblock.innerText = i;
    calendarGrid.appendChild(dayblock);
  }

  function daybtnSet() {
    date = new Date(year, month);
    day = new Date(year, month, 1).getDay();
    monthDom.innerText = monthArr[date.getMonth()];
    yearDom.innerText = date.getFullYear();

    for (let i = 0; i < 42; i++) {
      const daybtn = document.getElementById('day' + i);
      daybtn.className = 'daybtn';
      daybtn.classList.remove('other_month');
      daybtn.classList.remove('today');
      daybtn.classList.remove('select');
    }

    //last month
    for (let i = 0; i < day; i++) {
      const daybtn = document.getElementById('day' + i);
      let lastMonth = new Date(year, month, 0);
      daybtn.innerText = lastMonth.getDate() - day + i + 1;
      daybtn.classList.add('last_month');
      if (month == 0) {
        if (selectDay != null && (date.getFullYear() - 1) == selectDay.getFullYear() && 11 == selectDay.getMonth() && daybtn.innerText == selectDay.getDate()) {
          console.log(month, year, selectDay.getFullYear())

          daybtn.classList.add('today');
        }
      }
    }

    //this month
    let lastDay = new Date(year, month + 1, 0);
    console.log(selectDay)
    for (let i = 0; i < lastDay.getDate(); i++) {
      let num = i + day;
      const daybtn = document.getElementById('day' + num);
      num = i + 1;
      daybtn.innerText = num;
      if (year == today.getFullYear() && month == today.getMonth() && num == today.getDate()) {
        daybtn.classList.add('today');
      }
      if (selectDay != null && year == selectDay.getFullYear() && month == selectDay.getMonth() && num == selectDay.getDate()) {
        daybtn.classList.add('select');
      }

    }

    //next month
    for (let i = day + lastDay.getDate(); i < 42; i++) {
      const daybtn = document.getElementById('day' + i);
      let num = i - day - lastDay.getDate() + 1;
      daybtn.innerText = num;
      daybtn.classList.add('next_month');
    }


    //sunday color red
    for (let i = 0; i < 5; i++) {
      let num = i * 7;
      const daybtn = document.getElementById('day' + num);
      daybtn.classList.add('sun');
    }
  }

  daybtnSet();

  monthDownBtn.addEventListener('click', () => {
    if (month == 0) {
      month = 11
      year--;
    } else {
      month--;
    }
    daybtnSet();
  });

  monthUpBtn.addEventListener('click', () => {
    if (month == 11) {
      month = 0
      year++;
    } else {
      month++;
    }
    daybtnSet();
  });

  $container.onclick = function (event) {
    let target = event.target;

    if (target.className.substr(0, 3) == 'day') {
      console.log('daybtn clicked');
      if (target.classList)
        selectDay = new Date(year, month, target.innerText);
      console.log(selectDay)
      console.log($container.childNodes[1]);
      if (target.className.split(' ')[1] == 'last_month') {
        if (selectDay.getMonth == 0) {
          selectDay = new Date(year - 1, 11, target.innerText);
        } else {
          selectDay = new Date(year, month - 1, target.innerText);
        }
      }

      if (target.className.split(' ')[1] == 'next_month') {
        if (selectDay.getMonth == 11) {
          selectDay = new Date(year + 1, 0, target.innerText);
        } else {
          selectDay = new Date(year, month + 1, target.innerText);
        }
      }

      $container.childNodes[1].innerText = selectDay.getFullYear() + '-' + (selectDay.getMonth() + 1) + '-' + selectDay.getDate();
      $container.childNodes[2].classList.add('hidden');
      console.log(selectDay.getFullYear() + '-' + (selectDay.getMonth() + 1) + '-' + selectDay.getDate())
      daybtnSet();
    }
  };


  console.log($container.querySelector('button'));
}

export default calendar;