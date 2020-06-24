var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0, i < x.length; i++) {
        x[i].getElementsByClassName.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndexIndex-1].getElementsByClassName.display = "block";
    setTimeout(carousel, 3000);
}