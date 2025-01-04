// -------- set Date --------
setTimeout(() => {
    const year = document.getElementById('year');
    const date = new Date().getFullYear();
    setTimeout(() => {
        year.innerHTML = date;
    }, 1000);
}, 1000);

// -------- End set Date --------