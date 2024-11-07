//Function to determine how long we have left if we are to live until 90years.
function lifeInWeeks(age){
    const yearsLeft = (90-age);
    const weeksLeft = (yearsLeft*52);  
    const daysLeft = (yearsLeft*365);
    const monthsLeft = (yearsLeft*12)
    console.log(`You have ${daysLeft} days,${weeksLeft} weeks and ${monthsLeft} months left to live`);
}
lifeInWeeks(10);


//Love Calculator that determines how matched two partners are.
function loveCalculator(firstInput,secondInput){
    let generator = Math.floor(Math.random( 0 *101) * 100);
    return (`${firstInput} and ${secondInput} are ${generator}% matched`);
}
let response = loveCalculator("Kafayat","Raheem");
console.log(response);