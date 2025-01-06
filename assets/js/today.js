// -------- set Date --------
function setYear() {
    const fullYear = document.getElementById('year');
    const date = new Date().getFullYear();
    fullYear.innerHTML = date;
}
document.addEventListener('DOMContentLoaded', function () {
    console.log('The page has loaded!');
    setYear();
});
// -------- End set Date --------