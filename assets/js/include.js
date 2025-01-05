function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}
includeHTML();
// include external js files
document.writeln("<script type='text/javascript' src='assets/js/lib/jquery-3.0.0.min.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/lib/jquery-migrate-3.0.0.min.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/main.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/lib/bootstrap.bundle.min.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/lib/wow.min.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/lib/jquery.fancybox.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/lib/lity.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/lib/swiper.min.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/lib/jquery.waypoints.min.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/lib/jquery.counterup.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/lib/pace.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/lib/scrollIt.min.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/main.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/mainpageUsers.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/ourTeam.js' defer></script>");
document.writeln("<script type='text/javascript' src='assets/js/today.js' defer></script>");