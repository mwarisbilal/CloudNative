//Getting Elements from Dom
const currOnePicker = document.getElementById('currency-one');
const currTwoPicker = document.getElementById('currency-two');
const currOneAmount = document.getElementById('amount-one');
const currTwoAmount = document.getElementById('amount-two');
const flipButton = document.getElementById('flip');
const rate =document.getElementById('rate');

//Fetch exchange rate from 3rd party API and update DOM
//https://fixer.io/

function calculate() {
    const currencyOneCode = currOnePicker.value;
    const currencyTwoCode = currTwoPicker.value;
    
    fetch(`http://data.fixer.io/api/latest?access_key=aa9501d58a8b22906cf8423e472d9426/latest/${currencyOneCode}`)
        .then(res => res.json())
        .then(  data => {
            //exchange rate 
            const exchangerate = data.conversion_rates[currencyTwoCode];
            console.log(exchangeRate);

            rate.innerText = `1 ${currencyOneCode} = ${exchangeRate} ${currencyTwoCode}`;

            //Apply Conversion Rate 
            currOneAmount.value = (currOneAmount.value * exchangeRate).toFixed(2);

        });
    }

function flip() {
    const temp = currOnePicker.value;
    currOnePicker.value = currTwoPicker.value;
    currTwoPicker.value = temp;
    calculate();
    

};


//flip function for the flip button 



//Event Listeners

currOnePicker.addEventListener('change',calculate);
currTwoPicker.addEventListener('change',calculate);
currOneAmount.addEventListener('input',calculate);
currTwoAmount.addEventListener('input',calculate);
flipButton.addEventListener('click',flip);

calculate();