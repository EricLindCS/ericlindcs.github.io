function goBack() {
    window.history.back();
}

function hoverButton() {
    document.querySelector('.back-button').style.backgroundColor = '#aaa'; /* Adjusted background color on hover */
}

function unhoverButton() {
    document.querySelector('.back-button').style.backgroundColor = ''; /* Reset background color on hover out */
}
