let input = document.getElementById("Box");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((event) =>{
    event.addEventListener("click", (b) => {
        if(b.target.innerText == "="){
            string = String(eval(string));
            Box.value = string;
        } 
        else if (b.target.innerText == "ans") {
            string = "";
            Box.value = string;
          } 
          else if (b.target.innerText == 'del'){
              string = string.substring(0,string.length -1);
              Box.value = string;
          }
          else if(b.target.id =='plusMinus'){
              string = String(-eval(string));
              Box.value = string;
          }
          else {
            string += b.target.innerText;
            Box.value = string;
          }
    })
})
