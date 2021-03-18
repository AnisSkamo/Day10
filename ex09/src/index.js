function myFunction(myObj, checkProp) {
    // Only change code below this line
  var myObj = {
    title: "Titanic",
    song: "My Heart Will Go On",
    genre: "drama",
  };
 
  myObj.hasOwnProperty("title");
  myObj.hasOwnProperty("song");
  myObj.hasOwnProperty("genre");
  myObj.hasOwnProperty("actor");

    return "Change Me!";

    // Only change code above this line
}

module.exports = myFunction;