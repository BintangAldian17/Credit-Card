const cardNumber = document.getElementById("number")
const displayNum = document.getElementById("card_number")
const cardName = document.getElementById("name")
const displayName = document.getElementById("card_name")
const cardMonth = document.getElementById("month")
const displayMonth = document.getElementById("card_month")
const cardYear = document.getElementById("year")
const displayYear = document.getElementById("card_year")
const cardCvc = document.getElementById("cvc")
const displayCvc = document.getElementById("card_cvc")
const submitButton = document.getElementById("submit_btn")
const formPage = document.getElementById("form")
const donePage = document.getElementById("page_done")



const setCardNumber = (e) => {
    cardNumber.innerText = format(e.target.value)
}

const setCardName = (e) => {
    cardName.innerText = format(e.target.value)
}
const setCardMonth = (e) => {
    cardMonth.innerText = format(e.target.value)
}
const setCardYear = (e) => {
    cardYear.innerText = format(e.target.value)
}
const setCardCvc = (e) => {
    cardCvc.innerText = format(e.target.value)
}

const format = (s) => {
    return s.toString().toUpperCase().replace(/\d{4}(?=.)/g, "$& ");
}

const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
        displayName.value &&
        displayNum.value &&
        displayMonth.value &&
        displayYear.value.length &&
        displayCvc.value
    ) {
        donePage.classList.remove("hidden")
        formPage.classList.add("hidden")
    }
}

displayNum.addEventListener("keyup", setCardNumber)
displayName.addEventListener("keyup", setCardName)
displayMonth.addEventListener("keyup", setCardMonth)
displayYear.addEventListener("keyup", setCardYear)
displayCvc.addEventListener("keyup", setCardCvc)
submitButton.addEventListener("click", handleSubmitForm)


