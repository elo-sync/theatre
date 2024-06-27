function menuthe() {
    const menu=document.getElementById("menu");
        if (menu.style.display=="none") {
            menu.style.display="grid"
        }
        else{
        menu.style.display="none"
        }
}
document.getElementById('menu_icon').addEventListener('click', menuthe)

function menu_icon(stroke) {
    document.getElementById('Vector').setAttribute("stroke", stroke)
}

document.getElementById('menu_icon').addEventListener("mouseover", function() {
    menu_icon("#00ecae")
} )

document.getElementById('menu_icon').addEventListener("mouseleave", function() {
    menu_icon("aliceblue")
} )

//("#00ecae")