let randomNum = Math.floor((Math.random() * 10) + 1);

let lblChances = document.getElementById("lblChances");
let lblResult = document.getElementById("lblResult");

let count = 3;
lblChances.innerHTML = `Chances left: ${count}`;

function guess() {
    if (count > 0) {
        let txtInput = Number(document.getElementById("txtInput").value);
        if (txtInput === randomNum) {
            lblResult.innerHTML = `Game over.! The Correct number was ${count}`;
            lblChances.innerHTML = "";
        } else {
            if(randomNum>txtInput){
                lblResult.innerHTML = "Number is low. Try guessing a higher number.!";
            }else{
                lblResult.innerHTML = "Number is high. Try guessing a lower number.!";
            }
            count--;
            lblChances.innerHTML = `Chances left: ${count}`;
        }
    } else {
        lblResult.innerHTML = "Game Over.! No more chances";
    }
}
