/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("mobile-button").addEventListener("click", function(){
        var x = document.getElementById("mobile-links");
        if (x.style.display === "block"){
            x.style.display = "none";
        }
        else{
            x.style.display = "block";
        }
    });
});