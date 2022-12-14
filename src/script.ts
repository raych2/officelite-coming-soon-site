const today = new Date();
const launchDate = new Date(new Date().setDate(today.getDate() + 30));
const launchDay = launchDate.getDate();
const launchMonth = launchDate.toLocaleString("en-US", { month: "short" });
const launchYear = launchDate.getFullYear();
const footerLaunch = <HTMLSpanElement>document.querySelector(".footer--launch");
footerLaunch.innerText = ` ${launchDay} ${launchMonth} ${launchYear}`;

const countdown = setInterval(() => {
  const now = Date.now();
  const launchDateSec = Math.floor(launchDate.getTime() / 1000);
  const todaySec = Math.floor(now / 1000);
  const time = launchDateSec - todaySec;

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = String(Math.floor(time / day));
  const hours = String(Math.floor((time % day) / hour));
  const minutes = String(Math.floor((time % hour) / minute));
  const seconds = String(time % minute);

  const footerDay = <HTMLParagraphElement>(
    document.querySelector(".footer--day")
  );
  const footerHour = <HTMLParagraphElement>(
    document.querySelector(".footer--hour")
  );
  const footerMin = <HTMLParagraphElement>(
    document.querySelector(".footer--min")
  );
  const footerSec = <HTMLParagraphElement>(
    document.querySelector(".footer--sec")
  );
  footerDay.innerText = days;
  footerHour.innerText = hours;
  footerMin.innerText = minutes;
  footerSec.innerText = seconds;
  if (time <= 0) {
    clearInterval(countdown);
  }
}, 1000);
