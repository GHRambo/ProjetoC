function doDemo(button){
    const square = document.getElementById("square") ;
    square.style.backgroundColor="#fa4" ;
    button.setAttribute("disabled", "true") ;
    setTimeout(clearDemo, 2000, button) ;
}

function clearDemo (button){
    const square = document.getElementById("square") ;
    square.style.background = "transparent" ;
    button.removeAttribute("disabled") ;
}