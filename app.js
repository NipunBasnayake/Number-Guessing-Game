let randomNum = Math.floor((Math.random() * 10) + 1);
// console.log(randomNum);
let lblChances = document.getElementById("lblChances");
let lblResult = document.getElementById("lblResult");
let imgDiv = document.getElementById("imgDiv");
let count = 3;
lblChances.innerHTML = `Chances left: ${count}`;

function guess() {
    if (count > 0) {
        let txtInput = Number(document.getElementById("txtInput").value);
        if (txtInput === randomNum) {
            lblResult.innerHTML = `<p class="text-success">You win.!🥳 The Correct number was ${randomNum}</p>`;
            alert("ඔයා හරි අනේ...🥳");
            lblChances.innerHTML = "";
        } else {
            if(randomNum>txtInput){
                lblResult.innerHTML = `<p class="text-primary">Number is low.🔽 Try guessing a higher number.!</p>`;
                alert("පොඩි වැඩී...😏 ලොකු Number එකක් දාන්න...");
            }else{
                lblResult.innerHTML = `<p class="text-primary">Number is high.🔼 Try guessing a lower number.!</p>`;
                alert("ලොකු වැඩී...🤯 පොඩි Number එකක් දාන්න...");
            }
            count--;
            lblChances.innerHTML = `Chances left: ${count}`;
        }
    } else {
        lblResult.innerHTML = `<p class="text-danger">Game Over! No more chances</p>`;
        alert("චාන්ස් ඉවරයි, ආයෙ දෙන්නෑ...😒");
        // imgDiv.innerHTML = `<div id="imgDiv" class"text-center"><img src="https://media.tenor.com/DMWqIb2Rdp4AAAAi/bonk-cheems.gif" alt=""></div>`;
    }
}
