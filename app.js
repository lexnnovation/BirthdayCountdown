const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const birthday = "11 Nov 2020";

const countdown = () => {
  const birthdayDate = new Date(birthday);
  const currentDate = new Date();

  const totalSeconds = (birthdayDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = addZero(minutes);
  secondsEl.innerHTML = addZero(seconds);
};

const addZero = (time) => {
  return time < 10 ? `0${time}` : time;
};

countdown();

setInterval(countdown, 1000);
