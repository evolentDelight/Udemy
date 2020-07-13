function remove(array, element) {
  const index = array.indexOf(element);
  array.splice(index, 1);
}

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log("array", array)

remove(array, "Banana");

console.log("Removed Banana", array);

array.sort();

console.log("Sorted array", array);

array.push("Kiwi");

console.log("Added Kiwi", array)

remove(array, "Apples")

console.log("removed Apples", array)

array.reverse()
console.log("reversed array", array)

//Get Oranges
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
array2[1][1]
console.log("Get Oranges:", "array2[1][1]", array2[1][1])
