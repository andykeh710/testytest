console.log("This is working ")
let loadBtn = document.getElementById("btnLoadTowns")
loadBtn.addEventListener("click", function attachElements() {
    console.log("FROGM")
    let townInput = document.getElementById("towns").value;
    let townOutputDiv= document.getElementById("root").innerHTML;

    console.log(townInput)
    console.log(townOutputDiv)
    let townsArr = townInput.split(", ");
    console.log(townsArr);
    let tempArr =[];
    for (town of townsArr){
        let tempOjb = {town: }
    }

})
