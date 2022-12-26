const monthNameEl = document.querySelector("#month-name");
const dayNameEl = document.querySelector("#day-name");
const dayNumberEl = document.querySelector("#day-number");
const yearEl = document.querySelector("#year");

const date = new Date();
console.log(date);
const month = date.getMonth();

monthNameEl.innerText = date.toLocaleString("en", { month: "long" });

dayNameEl.innerText = date.toLocaleString("en", {
  weekday: "long",
});
