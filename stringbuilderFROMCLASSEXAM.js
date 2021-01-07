// class StringBuilder {
//     constructor(str){
//         if (typeof(string) === "string" && string != undefined){
//         } else {
//         }
//         this.stringArray = str.split("")
//     }

//     append(appendString) {
//         let tempArr = appendString.split("");
//         // console.log("this array is ", this.stringArray)
//         // console.log("tempArr", tempArr)
//         // console.log("Linda's code ", [...this.stringArray , ...tempArr]) /// puts two arrays together can use brackets as well  
//         return this.stringArray = this.stringArray.concat(tempArr);  /// concat is an array method 
//         //return "append string mthd works " + appendString; // FUNCTION NEEDS TO RETURN A VALUE 
//     }

//     prepend(prependString) {
//         let tempArr = prependString.split("");
//         let reverseArr = [];
//         return this.stringArray =  tempArr.concat(this.stringArray) /// UPDATE THE VALUE OF THE ARRAY 
//         //return tempArr.concat(this.stringArray) /// NOTICE THIS OUTPUT VS APPEND THIS.STRING ARRAY IS INSIDE 
//         //return prependString + "prepend String working ";
//    // return prependString + "prepend works "
//     }

//     insertAt(insertString, insertIndex){
//         let tempArr = insertString.split("");
//         this.stringArray.splice(insertIndex, 0,...tempArr); // NOTE TEMP ARR INSTEAD OF INSERET STRING 
//         return this.stringArray
//     }
//     remove(insertIndex, length){
//         this.stringArray.splice(insertIndex, length);
//         return this.stringArray
//     }
//     allToUpper() {
//         // console.log(this.stringArray.toUpperCase());
//         // return this.stringArray.toUpperCase();
//         return this.stringArray.join("").toUpperCase().split("");
//     }

//     allToLower(){
//         return this.stringArray.join("").toLowerCase().split("");
//     }

//     toUpper(index){
//        return this.stringArray[index] = this.stringArray[index].toUpperCase(); //// CHANGING SPECIFIC INDEX LOCATION 

//     }

//     toLower(index){
//         return this.stringArray[index] = this.stringArray[index].toLowerCase();
//     }

//     toString() {
//         return this.stringArray = this.stringArray.join("");
//     }
//     static checkString(param) {
//         if (typeof param !== 'string') throw new TypeError('Argument must be a string');
//         }

// }

// let str = new StringBuilder('hello'); str.append(', there'); str.prepend('User, '); str.insertAt('woop',5 ); console.log(str.toString()); str.remove(6, 3); str.allToUpper(); console.log(str.toString());


// // let makeObjectNewString = new StringBuilder("hello");
// // makeObjectNewString.append(", there") /// the whole class is printed here 
// // console.log(makeObjectNewString.prepend("froggs, "))
// // console.log(makeObjectNewString.insertAt("GGG", 2))
// // console.log(makeObjectNewString.allToUpper());
// // console.log(makeObjectNewString.toUpper(0));

// // class StringBuilder {
// //     constructor(string) { // "hello"
// //     if (typeof(string) === "string" && string != undefined) {
// //       this.stringArray = string.split("")
// //     } else {
// //       this.stringArray = []
// //     }
// //     }
// //     append(appendString) { // "User, "
// //       let tempArr = appendString.split("");
// //      return this.stringArray = this.stringArray.concat(tempArr);
  
// //     }
// //     prepend(prependString) {
// //       let tempArr = prependString.split(""); // whatever string value you get, split it into an array ["U", "s", "e", "r"...]
// //       let reversedArr = []
// //      // console.log("tempArr", tempArr)
// //       //console.log("the tempArr ", tempArr.concat(this.stringArray))
// //      return this.stringArray = tempArr.concat(this.stringArray)
// //     }
// //     insertAt(insertAtString,index){
// //       let tempArr = insertAtString.split("");
// //       this.stringArray.splice(index,0,...tempArr);
// //       return this.stringArray;
// //   }
// //     remove(startIndex, length) {
// //       return this.stringArray.splice(startIndex, length)
// //     }
// //     allToUpper() {
// //       return this.stringArray.join("").toUpperCase().split("")
// //     }
// //     allToLower() {
// //       return this.stringArray.join("").toLowerCase().split("")
// //     }
// //     toUpper(index) {
// //       return this.stringArray[index] = this.stringArray[index].toUpperCase();
// //     }
// //     toLower(index) {
// //      return this.stringArray[index] = this.stringArray[index].toLowerCase();
// //     }
// //     toString() {
// //       return this.stringArray.join("");
// //     }
// //     static isString(string) {
// //       try {
// //           if (typeof string == "string") {
// //               return true;
// //           } else {
// //               throw "TypeError:'Argument must be string'";
// //           }
// //       } catch (error) {
// //           console.log(error);
// //       }
// //   }
// //   }

  
class StringBuilder {
    constructor(string) { // "hello"
    if (typeof(string) === "string" && string != undefined) {
      this.stringArray = string.split("")
    } else {
        throw (`TypeError:'Argument must be string'`);
      this.stringArray = []
    }
    }
    append(appendString) {
        if (typeof(appendString) == "string" && appendString != undefined) {
            let tempArr = appendString.split("");
            // [...this.stringArray] , [...tempArr];
            return this.stringArray = this.stringArray.concat(tempArr);
        } else {
            throw (`TypeError:'Argument must be string'`);
        }
    }
    prepend(prependString) {
        if (typeof(prependString) == "string") {
            let tempArr = prependString.split("");
            return this.stringArray = tempArr.concat(this.stringArray);
        } else {
            throw (`TypeError:'Argument must be string'`);
        }
    }
    insertAt(insertAtString,index){
      let tempArr = insertAtString.split("");
      this.stringArray.splice(index,0,...tempArr);
      return this.stringArray;
  }
    remove(startIndex, length) {
      return this.stringArray.splice(startIndex, length)
    }
    allToUpper() {
      return this.stringArray = this.stringArray.join("").toUpperCase().split("");
    }
    allToLower() {
      return this.stringArray = this.stringArray.join("").toLowerCase().split("")
    }
    toUpper(index) {
      return this.stringArray[index] = this.stringArray[index].toUpperCase();
    }
    toLower(index) {
     return this.stringArray[index] = this.stringArray[index].toLowerCase();
    }
    toString() {
      return this.stringArray.join("");
    }
    static isString(string) {
        try {
            if (typeof string == "string") {
                return true;
            } else {
                throw "TypeError:'Argument must be string'";
            }
        } catch (error) {
            console.log(error);
        }
    }
    }





    try { let str = new StringBuilder(1); } catch(e) {     console.log(e) }

//   try { let str = new StringBuilder('hello'); 
//   str.append(', there'); 
//   str.prepend(28); 
//   console.log(str.toString()); } 
//   catch(e) {     console.log(e) }
 // TypeError:'Argument must be string'

  // let str = new StringBuilder('hello'); 
// str.append(', there'); 
// str.prepend('User, '); 
// str.insertAt('woop',5 ); 
// console.log(str.toString()); 
// str.remove(6, 3); 
// str.allToUpper(); 
// console.log(str.toString());
// //console.log(str.allToUpper())