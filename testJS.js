let count = 0;

    function myFunction() {
        
        //document.getElementById('texte').style.color="slateblue";
        //count = count+1;
        //document.getElementById('texte').innerText = count;

        const element= document.getElementById('texte');

    if(element.innerText == "A") {
        element.innerText = "B"
    }
    else{
        element.innerText = "A"
    }

    }

    document.getElementById('testing again').addEventListener('click', myFunction)
    

    function add(a, b){
        return a+b;
    }