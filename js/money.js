
document.getElementById('btn-calculate').addEventListener('click', function () {
    const foodFieldValue = getInputFieldValueById('food-field');
    const rentFieldValue = getInputFieldValueById('rent-field');
    const clothFieldValue = getInputFieldValueById('cloth-field');
    const totalIncomeFieldValue = getInputFieldValueById('total-income');
    if (isNaN(foodFieldValue) || isNaN(rentFieldValue) || isNaN(clothFieldValue) || isNaN(totalIncomeFieldValue)) {
        alert('Please provide number.');
    }
    else if (foodFieldValue == '' || rentFieldValue == '' || clothFieldValue == '' || totalIncomeFieldValue == '') {
        alert('Value of some input field is missing')
    }
    else if(foodFieldValue >=0 || rentFieldValue>= 0 || clothFieldValue >= 0|| totalIncomeFieldValue>= 0){
        alert('Negative Value is not applicable');
    }
    else {
        if (totalIncomeFieldValue < (foodFieldValue + rentFieldValue + clothFieldValue)) {
            alert('Your income does not support you.')
        }
        const totalExpenses = foodFieldValue + rentFieldValue + clothFieldValue;
        const newBalance = totalIncomeFieldValue - totalExpenses;
        // setValue
        const Balance = setTextElementValueById('balance', newBalance);
        const expenses = setTextElementValueById('total-expense', totalExpenses);
    }
})
document.getElementById('btn-save').addEventListener('click', function () {
    const saveFieldValue = getInputFieldValueById('save-field');
    const newBalance = getTextElementById('balance');
    if (saveFieldValue == '' || saveFieldValue<=0 || isNaN(saveFieldValue)){
        alert('Please input valid number')
    }
    else{
        const savings = newBalance * (saveFieldValue / 100);
        const savingAmount = setTextElementValueById('saving-amount', savings);
        const remaining = getTextElementById('remaining-balance');
        const newRemainig = newBalance - savingAmount;
        const remaingBalance = setTextElementValueById('remaining-balance', newRemainig);
    }   
})

// if(cloth < 0 || isNan(cloth) || retnt........){
//     alert("Provide valid input);
//     return;
//     }