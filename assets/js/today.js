// -------- set Date --------
const fullYear = document.getElementById('year');
const date = new Date().getFullYear();
console.log(date);

fullYear = () => {
    return date;
}
setYear = () => {
    setTimeout(() => {
        fullYear.innerHTML = fullYear();
    }, 2000);
}
setYear();
// -------- End set Date --------