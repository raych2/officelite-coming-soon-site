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

// Custom Select
const selectWrapper = document.querySelector(
  ".form__select-wrapper"
) as HTMLDivElement;
const selectCustom = document.querySelector(
  ".form__js-select"
) as HTMLDivElement;
const selectCustomValue = selectCustom.children[0];
const selectCustomOptions = selectCustom.children[1];
const selectedValue = document.querySelector(
  ".form__select-trigger-text"
) as HTMLDivElement;
const defaultLabel = selectCustomValue.getAttribute("data-value");
const arrow = document.querySelector(".form__select-arrow") as HTMLImageElement;

Array.from(selectCustomOptions.children).forEach(function (option) {
  option.addEventListener("click", (event) => {
    const prevSelected = document.querySelector(
      ".form__option.form__option--selected"
    ) as HTMLDivElement;
    const target = event.target as HTMLDivElement;
    prevSelected.classList.remove("form__option--selected");
    target.classList.add("form__option--selected");
    const targetType = target.childNodes[0].textContent;
    const targetPrice = target.childNodes[1].textContent;
    selectedValue.childNodes[1].textContent = targetType;
    selectedValue.childNodes[3].textContent = targetPrice;
    selectCustom.classList.remove("form__select--active");
    arrow.classList.remove("form__select-arrow--active");
  });
});

selectCustomValue.addEventListener("click", (event) => {
  selectCustom.classList.toggle("form__select--active");
  arrow.classList.toggle("form__select-arrow--active");
});

document.addEventListener("click", (event) => {
  const target = event.target as HTMLDivElement;
  const clickedOutside = !selectCustom.contains(target);
  if (clickedOutside) {
    selectCustom.classList.remove("form__select--active");
    arrow.classList.remove("form__select-arrow--active");
  }
});
