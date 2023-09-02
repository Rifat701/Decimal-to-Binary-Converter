let result = document.querySelector("#result");
let btn = document.querySelector("#btn");
let inputNum = document.querySelector("#input_num");
let inputValid = document.querySelector("#input_valid_num");

function Bfun(event) {
  let input = document.querySelector("#input").value;

  if (input === "") {
    inputNum.style.visibility = "visible";
    inputValid.style.visibility = "hidden";
  } else if (input < 0) {
    inputValid.style.visibility = "visible";
    inputNum.style.visibility = "hidden";
    result.style.visibility = "hidden";
  } else {
    result.style.visibility = "visible";
    result.style.color = "#fff";
    inputNum.style.visibility = "hidden";
    inputValid.style.visibility = "hidden";
  }

  binaryNum = parseInt(input).toString(2);
  result.textContent = binaryNum;
}

btn.addEventListener("click", Bfun);
