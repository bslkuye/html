const calendar = ($container) => {
  //title dom
  const title = document.createElement("div");
  title.innerText = "Date Picker";
  title.className = "title";
  $container.appendChild(title);

  //select date box dom
  const datePicker = document.createElement("button");
  datePicker.innerText = "Select Date";
  datePicker.className = "datePicker";
  datePicker.tabIndex = "0";
  $container.appendChild(datePicker);

  datePicker.addEventListener("focus", () => {
    if (calendar.className == "calender hidden") {
      calendar.classList.remove("hidden");
    }
  });

  //calender dom
  const calendar = document.createElement("div");
  calendar.className = "calender";
  calendar.classList.add("hidden");
  $container.appendChild(calendar);

  //calender nav dom
  const calendarNav = document.createElement("div");
  calendarNav.className = "calender-nav";
  calendar.appendChild(calendarNav);

  const monthDownBtn = document.createElement("button");
  monthDownBtn.className = "month-btn";
  monthDownBtn.id = "month-down";
  monthDownBtn.innerText = "◀︎";

  const monthUpBtn = document.createElement("button");
  monthUpBtn.className = "month-btn";
  monthUpBtn.id = "month-up";
  monthUpBtn.innerText = "▶︎";

  const yearMonthContainer = document.createElement("div");
  yearMonthContainer.className = "year-month-container";

  calendarNav.appendChild(monthDownBtn);
  calendarNav.appendChild(yearMonthContainer);
  calendarNav.appendChild(monthUpBtn);

  //day
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date(); // 달력이 보여주는 달
  let today = new Date(); // 오늘
  let selectDay = null; // 선택한 날
  let year = date.getFullYear(); // 달력이 보여주는 연도
  let month = date.getMonth(); // 달력이 보여주는 월
  let day = new Date(year, month, 1).getDay(); //이번달 시작 요일

  const monthDom = document.createElement("div");
  monthDom.className = "month";

  const yearDom = document.createElement("div");
  yearDom.className = "year";

  monthDom.innerText = monthArr[date.getMonth()];
  yearDom.innerText = date.getFullYear();

  yearMonthContainer.appendChild(monthDom);
  yearMonthContainer.appendChild(yearDom);

  const calendarGrid = document.createElement("div");
  calendarGrid.className = "calender-grid";
  calendar.appendChild(calendarGrid);

  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  for (let i = 0; i < 7; i++) {
    const weekName = document.createElement("span");
    weekName.className = "week";
    weekName.innerText = week[i];
    calendarGrid.appendChild(weekName);
  }

  for (let i = 0; i < 42; i++) {
    const dayBlock = document.createElement("button");
    dayBlock.id = "day" + i;
    dayBlock.className = "daybtn";
    dayBlock.innerText = i;
    calendarGrid.appendChild(dayBlock);
  }

  function daybtnSet() {
    date = new Date(year, month);
    day = new Date(year, month, 1).getDay();
    monthDom.innerText = monthArr[date.getMonth()];
    yearDom.innerText = date.getFullYear();

    const dayBtns = $container.querySelectorAll(".daybtn");

    for (let i = 0; i < 42; i++) {
      const daybtn = dayBtns[i];
      daybtn.className = "daybtn";
      daybtn.classList.remove("last_month");
      daybtn.classList.remove("next_month");
      daybtn.classList.remove("today");
      daybtn.classList.remove("select");
    }

    //last month
    for (let i = 0; i < day; i++) {
      let id = "day" + i;
      const daybtn = dayBtns[i];
      let lastMonth = new Date(year, month, 0);
      dayBtns[i].innerText = lastMonth.getDate() - day + i + 1;
      dayBtns[i].classList.add("last_month");
      if (month == 0) {
        if (
          selectDay != null &&
          date.getFullYear() - 1 == selectDay.getFullYear() &&
          11 == selectDay.getMonth() &&
          lastMonth.getDate() - day + i + 1 == selectDay.getDate()
        ) {
          dayBtns[i].classList.add("select");
        }
      } else {
        if (
          selectDay != null &&
          year == selectDay.getFullYear() &&
          month - 1 == selectDay.getMonth() &&
          lastMonth.getDate() - day + i + 1 == selectDay.getDate()
        ) {
          dayBtns[i].classList.add("select");
        }
      }
    }

    //this month
    let lastDay = new Date(year, month + 1, 0);
    for (let i = 0; i < lastDay.getDate(); i++) {
      let num = i + day;
      const daybtn = dayBtns[num];
      num = i + 1;
      daybtn.innerText = num;
      if (
        year == today.getFullYear() &&
        month == today.getMonth() &&
        num == today.getDate()
      ) {
        daybtn.classList.add("today");
      }
      if (
        selectDay != null &&
        year == selectDay.getFullYear() &&
        month == selectDay.getMonth() &&
        num == selectDay.getDate()
      ) {
        daybtn.classList.add("select");
      }
    }

    //next month
    for (let i = day + lastDay.getDate(); i < 42; i++) {
      const daybtn = dayBtns[i];
      let num = i - day - lastDay.getDate() + 1;
      daybtn.innerText = num;
      daybtn.classList.add("next_month");
      if (month == 11) {
        if (
          selectDay != null &&
          date.getFullYear() + 1 == selectDay.getFullYear() &&
          0 == selectDay.getMonth() &&
          num == selectDay.getDate()
        ) {
          dayBtns[i].classList.add("select");
        }
      } else {
        if (
          selectDay != null &&
          year == selectDay.getFullYear() &&
          month + 1 == selectDay.getMonth() &&
          num == selectDay.getDate()
        ) {
          dayBtns[i].classList.add("select");
        }
      }
    }

    //sunday color red
    for (let i = 0; i <= 5; i++) {
      let num = i * 7;
      const daybtn = dayBtns[num];
      daybtn.classList.add("sun");
    }
  }

  daybtnSet();

  $container.onclick = function (event) {
    let target = event.target;

    if (target.className == "datePicker") {
      if (calendar.className == "calender hidden") {
        calendar.classList.remove("hidden");
      }
    }

    if (target.id == "month-down") {
      if (month == 0) {
        month = 11;
        year--;
      } else {
        month--;
      }
      daybtnSet();
    }

    if (target.id == "month-up") {
      if (month == 11) {
        month = 0;
        year++;
      } else {
        month++;
      }
      daybtnSet();
    }

    if (target.className.substr(0, 3) == "day") {
      // daybtn click
      selectDay = new Date(year, month, target.innerText);
      if (target.className.split(" ")[1] == "last_month") {
        if (selectDay.getMonth == 0) {
          selectDay = new Date(year - 1, 11, target.innerText);
        } else {
          selectDay = new Date(year, month - 1, target.innerText);
        }
      }

      if (target.className.split(" ")[1] == "next_month") {
        if (selectDay.getMonth == 11) {
          selectDay = new Date(year + 1, 0, target.innerText);
        } else {
          selectDay = new Date(year, month + 1, target.innerText);
        }
      }

      $container.childNodes[1].innerText =
        selectDay.getFullYear() +
        "-" +
        (selectDay.getMonth() + 1 < 10
          ? "0" + (selectDay.getMonth() + 1)
          : selectDay.getMonth() + 1) +
        "-" +
        (selectDay.getDate() < 10
          ? "0" + selectDay.getDate()
          : selectDay.getDate());
      $container.childNodes[2].classList.add("hidden");
      daybtnSet();
    }
  };

  const body = document.querySelector("body");
  body.addEventListener("click", clickBodyEvent);

  function clickBodyEvent(event) {
    if (
      event.target.parentNode == $container ||
      event.target.parentNode.parentNode == $container ||
      event.target.parentNode.parentNode.parentNode == $container
    ) {
    } else {
      $container.childNodes[2].classList.add("hidden");
    }
  }
};

export default calendar;
