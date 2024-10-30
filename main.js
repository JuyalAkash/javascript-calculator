function calculator(n) {
  let val = n.split("_");
  document.getElementById(val[0]).value += val[1];
}

function getResult() {
  let values = document.getElementById("n").value;
  let numbers = [];
  if (values.includes("+")) {
    numbers = values.split("+");
    document.getElementById("n").value =
      Number(numbers[0]) + Number(numbers[1]);
  }
  if (values.includes("-")) {
    numbers = values.split("-");
    document.getElementById("n").value =
      Number(numbers[0]) - Number(numbers[1]);
  }
  if (values.includes("*")) {
    numbers = values.split("*");
    document.getElementById("n").value =
      Number(numbers[0]) * Number(numbers[1]);
  }
  if (values.includes("/")) {
    numbers = values.split("/");
    document.getElementById("n").value =
      Number(numbers[0]) / Number(numbers[1]);
  }
  if (values.includes("%")) {
    numbers = values.split("%");
    document.getElementById("n").value =
      Number(numbers[0]) % Number(numbers[1]);
  }
}

function backspace() {
  let num = document.getElementById("n").value;
  let result = num.slice(0, -1);
  document.getElementById("n").value = result;
}

function clearAll() {
  let num = document.getElementById("n").value;
  document.getElementById("n").value = "";
}
