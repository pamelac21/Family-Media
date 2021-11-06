const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const mDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const fDayindx = date.getDay();

  const lDayindx = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nDays = 7 - lDayindx - 1;

  const MTH = [
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

  document.querySelector(".date h1").innerHTML = MTH[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = fDayindx; x > 0; x--) {
    days += `<div class="prev-date">${prevDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    mDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

document.querySelector(".btn-add").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });

renderCalendar();