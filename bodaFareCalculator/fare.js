//This challenge is to create a simple program to estimate the fare for a boda boda ride

//Prompt the user to enter the distance of their trip in kilometers and convert this input to a number

const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?: ");
const distanceInKm = Number(input);

//create a function that takes the distanceInKm as an argument and returns the total fare according to the distance input by the user

function calculateBodaFare(distanceInKm) {
    const baseFare = 50 ;
    const chargePerKm = 15;
    const kilometersTraveledCharge = distanceInKm * chargePerKm;
    const totalFare = baseFare + kilometersTraveledCharge;

    //returns the results in a nice way in the console
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${kilometersTraveledCharge}`)
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki!");
}

//called the function
calculateBodaFare(distanceInKm);

