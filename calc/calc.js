const weight = document.getElementById("weight");
const height = document.getElementById("height");
const buttonCalc = document.querySelector("#calc");
const result = document.getElementById("result");
const calcBMI = () => {
  console.log(weight.value);
  if (weight.value || height.value == "") {
    result.innerText = "Укажите рост и вес";
  }
  if (weight.value && height.value != "") {
    const resultCalc = (weight.value / (height.value / 100) ** 2).toFixed(2);
    result.innerText = `Ваш ИМТ равен: ${resultCalc}`;
    weight.value = "";
    height.value = "";
  }
};

buttonCalc.addEventListener("click", calcBMI);
