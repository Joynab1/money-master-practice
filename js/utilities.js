
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = inputFieldValue;
    return inputFieldValue
}
function getTextElementById(textElementId) {
    const textElementField = document.getElementById(textElementId);
    const textElementFieldValueString = textElementField.innerText;
    const textElementFieldValue = parseFloat(textElementFieldValueString);
    textElementField.innerText = textElementFieldValue;
    return textElementFieldValue;
}
function setTextElementValueById(elementId, value) {
    const totalExpensesFieldValue = document.getElementById(elementId);
    totalExpensesFieldValue.innerText = parseFloat(value);
    return value;
}