// // // function solve() {
// // //     let resultHTML = document.getElementById("result");
// // //     let input = document.getElementById("text").value.toLowerCase();
// // //     let currentCase = document.getElementById("naming-convention").value;
// // //     //console.log(input, currentCase);
// // //     let wordsArray = input.split(" ");
// // //     //console.log(wordsArray);
// // //     if (currentCase === "Camel Case") {
// // //       //console.log(currentCase);
// // //       // CODE FOR CAMEL CASE GOES HERE
// // //       camelCase(wordsArray);
// // //     } else if (currentCase === "Pascal Case") {
// // //       //console.log(currentCase);
// // //       // CODE FOR PASCAL CASE GOES HERE
// // //       pascalCase(wordsArray);
// // //     } else {
// // //       resultHTML.innerText = "Error!";
// // //     }
// // //     function camelCase(someArr) {
// // //       //console.log("function camel case", someArr);
// // //       let newArr = [];
// // //       newArr.push(someArr[0]);
// // //       for (i = 1; i < someArr.length; i++) {
// // //         let tempArr = someArr[i].split("");
// // //         tempArr[0] = tempArr[0].toUpperCase(); // i == I
// // //         newArr.push(tempArr.join(""));
// // //       }
// // //       console.log("new array [28]", newArr.join(""));
// // //       resultHTML.innerText = newArr.join("");
// // //     }
// // //     function pascalCase(someArr) {
// // //       console.log("function pascal case", someArr);
// // //       let newArr = [];
// // //       for (i = 0; i < someArr.length; i++) {
// // //         let tempArr = someArr[i].split("");
// // //         tempArr[0] = tempArr[0].toUpperCase(); // i == I
// // //         newArr.push(tempArr.join(""));
// // //       }
// // //       console.log("new array [28]", newArr.join(""));
// // //       resultHTML.innerText = newArr.join("");
// // //     }
// // //   }



// // function solve() {
// //     let resultHTML = document.getElementById("result");
// //     let input = document.getElementById("text").value; // 75 105 John Adams 110 103 115 Roger 108 97 110 100
// //     let numbersToLettersArray = [];
// //     let lettersArray = [];
// //     let inputArray = input.split(" ");
// //     for (i = 0; i < inputArray.length; i++) {
// //       let tempItem = inputArray[i];
// //       console.log("temp item is ", tempItem);
// //       if (!Number(tempItem)) {
// //         lettersArray.push(inputArray[i]);
// //       } else {
// //         numbersToLettersArray.push(String.fromCharCode(inputArray[i]));
// //       }
// //     }
// //     for (word of lettersArray) {
// //       // lettersArray = ['John', 'Adams', 'Roger']
// //       let tempArr = [];
// //       for (letter of word) {
// //         tempArr.push(letter.charCodeAt(letter));
// //       }
// //       // After the 2nd inside loop over each letter
// //       //console.log(tempArr.join(" ")); // join array of nums
// //       let newP = document.createElement("P"); // create new P tag element
// //       newP.innerText = tempArr.join(" "); // add text to element
// //       resultHTML.appendChild(newP); // append new element to span with id="result"
// //     }
// //     console.log("make me text", numbersToLettersArray);
// //     let numNewP = document.createElement("P");
// //     numNewP.innerText = numbersToLettersArray.join("");
// //     resultHTML.appendChild(numNewP);
// //   }





// function solve() {
//     let resultHTML = document.getElementById("result");
//     let inputText = document.getElementById("text").value; // input text to split
//     let inputNumber = document.getElementById("number").value; // num to split by
//     let willItSplit = inputText.length % inputNumber;
//     if (willItSplit == 0) {
//       console.log("It splits evenly");
//       let splitEx = new RegExp(`.{1,${inputNumber}}`, "g");
//       console.log("custom regex based on input num is ", splitEx);
//       let splitArray = inputText.match(splitEx);
//       console.log("split array now has one empty item ", splitArray);
//       resultHTML.innerText = splitArray.join(" ");
//       // Grab last element of array, check to see if its length is long enough, if not,
//       // start adding chars from the index[0]++ until it is === num.length
//     } else if (inputText.length < inputNumber) {
//       console.log("Not even and short");
//       let resultText = inputText;
//       let i = 0;
//       while (resultText.length < inputNumber) {
//         resultText += resultText[i];
//         i++;
//       }
//       console.log(resultText);
//       resultHTML.innerText = resultText;
//     } else {
//       console.log("Its long enough, but not even", inputText.length, inputNumber);
//       let splitRegex = new RegExp(`.{1,${inputNumber}}`, "g");
//       let splitArray = inputText.match(splitRegex);
//       console.log("split arr", splitArray);
//       let resultText = splitArray[splitArray.length - 1];
//       console.log("last element of arr is ", resultText);
//       let i = 0;
//       while (resultText.length < inputNumber) {
//         resultText += inputText[i];
//         i++;
//       }
//       splitArray[splitArray.length - 1] = resultText;
//       console.log("new res text", resultText);
//       console.log(splitArray);
//       resultHTML.innerText = splitArray.join(" ");
//     }
//   }