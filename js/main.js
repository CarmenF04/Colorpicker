const colors = document.getElementsByClassName("colors__color");
let secondColor = false;


for(let i = 0; i < colors.length; i++ ){
    // Set Color

    if(secondColor === false){
        colors[i].children[0].style.background = "#BAD7E9";
        secondColor = true;
    }
    else{
        colors[i].children[0].style.background = "#4E31AA";
        secondColor = false;
    }


    // Onclick
    colors[i].onclick = function(){
        colors[i].children[0].classList.add("colors__circle--selected");
        navigator.clipboard.writeText(colors[i].children[0].style.background);
        document.title = colors[i].children[0].style.background;
    }
}