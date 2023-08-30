const convert = document.querySelector(".convert");
const results = document.querySelector(".results");
const reset = document.querySelector(".reset");

const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const steps = document.querySelector(".steps");

function calories() {
  if (height.value == "" || weight.value == "" || steps.value == "") {
    results.innerHTML = `Missing input`;
  } else {
    answer = steps.value * 0.04;
    results.classList.add("resultsanswer");
    results.innerHTML = `Calories Burned: <span>${answer.toFixed(2)}</span>`;
  }
}

convert.addEventListener("click", () => {
  convert.innerHTML = "Converting .. ";
  setTimeout(() => {
    convert.innerHTML = "Convert";
    calories();
  }, 1000);
});

reset.addEventListener("click", () => {
  setTimeout(() => {
    document.location.reload();
  });
});
