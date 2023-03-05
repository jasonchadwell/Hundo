
//Get the values from the UI
//Starts or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
    //We need to evaluate our input
    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
         //we call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }
   
   
}


//Generate numbers from startValue to the endValue
//logic functions
function generateNumbers(startValue, endValue){
    let numbers = [];

    //we want to get all numbers from start to end
    for (let index = startValue; index <= endValue; index++) {
        //this will exexute in a loop until index equals endValue
        numbers.push(index);
    }
    return numbers;
}


//Display the numbers and mark the even ones bold
//display or view functions
function displayNumbers(numbers){
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let className = "even";

        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        }
        else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}