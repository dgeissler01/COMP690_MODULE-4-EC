// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
while (isNaN(investment) === true || rate <= 0 ) {           //VERIFY INVESTMENT IS NUMBER AND NOT 0
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
}

rate = parseFloat(prompt('Enter interest rate as x.xx'));
while (isNaN(rate) === true || rate <= 0 || rate > 6) {      //VERIFY INVESTMENT IS NUMBER AND NOT 0 AND IS <= 6
    rate = parseFloat(prompt('Enter interest rate as x.xx'));
}

years = parseInt(prompt('Enter the number of years you want to invest for'));
while (isNaN(years) === true || years <= 0 || years > 30) {  //VERIFY YEARS IS NUMBER AND NOT 0 AND IS <= 30
    years = parseInt(prompt('Enter the number of years you want to invest for'));
}

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100); //TESTING GIT "STAGE CHANGES" 2
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);