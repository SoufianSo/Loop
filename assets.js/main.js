for (let i = 1; i <= 100; i++) {
  console.log(i);
}
console.log("%c aufgabe", "color:red");
for (let i = 50; i >= 45; i--) {
  console.log(i);
}
console.log("%c aufgabe", "color:red");
for (let i = 1; i <= 6; i++) {
  console.log("*".repeat(i));
}

console.log("%c aufgabe 1-1", "color:red");
for (let num = 1; num <= 10; num++) {
  console.log("Hello World " + num);
}
console.log("%c aufgabe 1-2", "color:red");
let numArray = [];

for (let num = 0; num <= 10; num++) {
  numArray.push(num);
}

console.log(numArray);

console.log("%c aufgabe 1-4", "color:red");

let names = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log("%c aufgabe 1-5", "color:red");

let apple1 = { color: "red", size: "big" };
let apple2 = { color: "green", size: "small" };
let apple3 = { color: "yellow", size: "big" };
let apples = [apple1, apple2, apple3];

for (let i = 0; i < apples.length; i++) {
  console.log(apples[i].size);
}
console.log("%c aufgabe 1-9", "color:red");

let words = [
  "hallo",
  "Auto",
  "Waschmaschine",
  "Schrank",
  "Katze",
  "Beispiel",
  "Eltern",
  "Fenster",
  "Geburtstag",
  "Himmel",
  "schwimmen",
  "Zeitung",
];

function filterWords() {
  let inputNumber = parseInt(document.getElementById("lengthInput").value);
  let filteredWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length === inputNumber) {
      filteredWords.push(words[i]);
    }
  }

  document.getElementById("wordList").textContent = filteredWords.join(", ");
}
console.log("%c aufgabe 2-1", "color:red");

function imageArray() {
  let musterArray = [];

  for (let i = 1; i <= 100; i++) {
    let filename = "image_" + i + ".jpg";
    musterArray.push(filename);
  }

  console.log(musterArray);
}

imageArray();
console.log("%c aufgabe 2-2", "color:red");
function generateText() {
  const inputNumber = parseInt(document.getElementById("inputNumber").value);
  let outputText = "";

  for (let i = 0; i < inputNumber; i++) {
    outputText += "Loop";
  }

  document.getElementById("output").textContent = outputText;
}
console.log("%c aufgabe 2-3", "color:red");

const numArr = [5, 22, 15, 100, 55];

let outputDiv = document.getElementById("output");

numArr.forEach((number) => {
  const divisors = [];
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) {
      divisors.push(divisor);
    }
  }

  outputDiv.innerHTML += `Die Zahl ${number} ist durch die Zahlen ${divisors.join(
    ", "
  )} teilbar (außer durch 1 und sich selbst).<br>`;
});
console.log("%c aufgabe 3-3", "color:red");
function generateText() {
  const inputNumber = parseInt(document.getElementById("inputNumber").value);
  let outputText = "L";

  if (inputNumber === 0) {
    outputText = "Fehler: Ungültige Eingabe";
  } else {
    for (let i = 0; i < inputNumber; i++) {
      if (i % 2 === 0) {
        outputText += "o";
      } else {
        outputText += "0";
      }
    }
    outputText += "p";
  }

  document.getElementById("output").textContent = outputText;
}
