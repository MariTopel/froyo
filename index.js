/* function my() {
  var flavor = document.getElementById("froyo").value;
  document.getElementById("flavors").innerHTML = flavor;
} */

let froyoInput;

froyoInput = window.prompt(
  "Enter your favorite froyo flavors with a comma and space between flavors."
);

console.log(froyoInput);

let froyoArray;

froyoArray = froyoInput.split(", ");

console.log(froyoArray);

/*var obj = {};

for (var i = 0; i < froyoArray.length; i++) {
  obj[froyoArray[i]] = (obj[froyoArray[i]] || 0) + 1;
}

console.log(obj); */

function countFlavors(array) {
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    obj[array[i]] = (obj[array[i]] || 0) + 1;
  }
  return obj;
}

console.log(countFlavors(froyoArray));
