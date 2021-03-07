//the initial number
let num = 0;

//the number and the buttons
const number = document.querySelector("#number");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const clickedBtn = e.currentTarget.classList;
        if(clickedBtn.contains("decrease")){
            num--;
        }
        else if(clickedBtn.contains("increase")){
            num++;
        }
        else{
            num = num * 0;
        }
        number.textContent = num;
        if(num > 0){
            number.style.color = "green";
        }
        else if(num < 0){
            number.style.color = "maroon";
        }
        else{
            number.style.color = "black";
        }
    });
});