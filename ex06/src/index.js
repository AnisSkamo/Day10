// Create lion object here
var lion = {
    "name": "Simba",
    "legs": 4,
    "tails": 1,
};
// End od lion object
function myFunction(lionName, lionValue) { // Change this line
// Only change code below this line
lion["roar"] = "roar-roar"
lion[lionName] = lionValue;
return lion;
// Only change code above this line
}
console.log(myFunction("roar", "roar-roar")); // Change this line
module.exports = myFunction;