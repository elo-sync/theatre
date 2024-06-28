function menuthe() {
    const menu=document.getElementById("menu");
        if (menu.className === "close") {
            menu.className="open"
        }
        else if(menu.className ==="open"){
            menu.className="close"
        }
        else {
            menu.className="open"
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

function showsaison() {
    const saison=document.getElementById("saison");
        if (saison.className === "closeSaison") {
            saison.className="openSaison"
        }
        else if(saison.className ==="openSaison"){
            saison.className="closeSaison"
        }
        else {
            saison.className="openSaison"
        }
}
document.getElementById('prog').addEventListener('click', showsaison)