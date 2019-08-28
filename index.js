function wakeDog(dogName, dogBreed) {
  String=`Wake ${dogName} the ${dogBreed}`;
  console.log (String);
  return(String);

}
function leashDog(dogName, dogBreed) {
  String = `Leash ${dogName} the ${dogBreed}`;
  console.log (String);
  return(String);
}
function walkToPark(dogName, dogBreed) {
  String = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log (String);
  return(String);
}

function throwFrisbee(dogName, dogBreed) {
  String = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log (String);
  return(String);
}

function walkHome(dogName, dogBreed) {
  String = `Walk home with ${dogName} the ${dogBreed}`;
  console.log (String);
  return(String);
}
function unleashDog(dogName, dogBreed) {
  String = `Unleash ${dogName} the ${dogBreed}`;
  console.log (String);
  return(String);
}

function exerciseDog(dogName, dogBreed) {
  var i;
  var returnArray=[];
  for (let i=0; i<routine.length; i++) {
    returnArray[i] = routine[i] (dogName, dogBreed);
  }
  return returnArray;
}
const routine = [wakeDog,leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
