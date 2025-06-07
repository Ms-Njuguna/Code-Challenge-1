//involves creating a simple calculator to determine the basic ingredients needed to make a specific number of cups of Kenyan chai

//Prompts the user to enter the number of chai cups they want to make
//add a do...while loop to make sure the input is always a number

let input;
let numberOfCups;

do {
  input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
  numberOfCups = Number(input);
} while (isNaN(numberOfCups) || numberOfCups <= 0);


//a function that takes the numberOfCups (as a number) as an argument

function calculateChaiIngredients(numberOfCups) {
  //empty ingredients array to hold the ingredients and amount based on user input
  let ingredients = [];

  //Calculates the required amount for each ingredient based on the numberOfCups
  let water = numberOfCups * 200;
  let milk = numberOfCups * 50;
  let teaLeaves = numberOfCups * 1;
  let sugar = numberOfCups * 2;
  
  //Adds the ingredients based on the user input to the empty ingredients array
  ingredients.push(
    `Water: ${water}ml`, 
    `Milk: ${milk}ml`, 
    `Tea Leaves (Majani): ${teaLeaves} tablespoons`, 
    `Sugar (Sukari): ${sugar} teaspoons`
  );

  //Prints the results to the console i.e. the array based on input
  console.log(`To make ${numberOfCups} cups of Chai Bora you will need:`);
  for(let item of ingredients) {
    console.log(item);
  };
  console.log("\nEnjoy your Chai Bora!");
}

calculateChaiIngredients(numberOfCups);
