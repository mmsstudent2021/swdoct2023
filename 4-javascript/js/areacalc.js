// selectors
const result = document.getElementById("result");
const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");
const calcBtn = document.getElementById("calcBtn");
const records = document.getElementById("records");

// logic function
const area = (w, h) => w * h;

// event listen
const handleBtn = () => {
    // console.log(widthInput.value);
  const areaResult = area(widthInput.valueAsNumber, heightInput.valueAsNumber);
  result.innerHTML = ` ${widthInput.valueAsNumber} ft * ${heightInput.valueAsNumber} ft = ${areaResult} ft<sup>2</sup>`;
  widthInput.value = null;
  heightInput.value = null;
};

const clearResult = () => {
    result.innerHTML = ""
}

const storeResult = () => {
     records.innerHTML += `<li>${result.innerHTML}</li>`
     clearResult()
}
