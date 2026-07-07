const keys = document.querySelectorAll(".key");
const backspace = document.getElementById("backspace");
const passwordInput = document.getElementById("password");
const dots = document.querySelectorAll(".dot");
const message = document.getElementById("message");

const correctPin = "5555";

let pin = "";


// -------------------------
// Update PIN dots
// -------------------------
function updateDots() {

    dots.forEach((dot, index) => {

        if (index < pin.length) {
            dot.style.background = "#ff5ca8";
        } else {
            dot.style.background = "white";
        }

    });

}



// -------------------------
// Check PIN
// -------------------------
function checkPin() {


    if (pin === correctPin) {


        // Hide PIN screen
        document.querySelector(".container").classList.add("hidden");



        // Show Heart Scene
        const heartScene = document.getElementById("heartScene");


        heartScene.classList.remove("hidden");
        heartScene.style.display = "flex";



        setTimeout(() => {


            // Hide heart
            heartScene.classList.add("hidden");
            heartScene.style.display = "none";



            // Show Cat/Tulips Scene
            const catScene = document.getElementById("catScene");


            catScene.classList.remove("hidden");
            catScene.style.display = "flex";



            setTimeout(() => {


                // Hide cat scene
                catScene.classList.add("hidden");
                catScene.style.display = "none";



                // Show Question Scene
                const questionScene =
                document.getElementById("questionScene");



                questionScene.classList.remove("hidden");
                questionScene.style.display = "flex";



            },5000);



        },7000);



    }

    else {


        message.textContent = "Wrong PIN!";
        message.style.color = "#ff4d6d";



        setTimeout(() => {


            pin = "";

            passwordInput.value = "";

            updateDots();

            message.textContent = "";


        },1000);



    }


}



// -------------------------
// Number Buttons
// -------------------------
keys.forEach(key => {


    key.addEventListener("click", () => {


        if(pin.length < 4) {


            pin += key.textContent;

            passwordInput.value = pin;


            updateDots();



            if(pin.length === 4) {

                checkPin();

            }


        }


    });


});




// -------------------------
// Backspace
// -------------------------
backspace.addEventListener("click", () => {


    pin = pin.slice(0,-1);

    passwordInput.value = pin;

    updateDots();


});
// -------------------------
// YES Button
// -------------------------
const yesBtn = document.getElementById("yesBtn");


yesBtn.addEventListener("click", () => {


    console.log("YES clicked");


    const questionScene =
    document.getElementById("questionScene");


    // Hide question
    questionScene.classList.add("hidden");
    questionScene.style.display = "none";



    // Show envelope
    const envelopeScene =
    document.getElementById("envelopeScene");


    envelopeScene.classList.remove("hidden");
    envelopeScene.style.display = "flex";


});
// -------------------------
// NO Button
// -------------------------
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("click", () => {

    console.log("NO clicked");


    const questionScene = document.getElementById("questionScene");


    // Hide question
    questionScene.classList.add("hidden");
    questionScene.style.display = "none";



    const noScreen = document.createElement("div");

    noScreen.className = "scene";
    noScreen.id = "noScreen";


    noScreen.innerHTML = `

        <h1 class="no-message">
            How dare you 😤
        </h1>

        <img 
        src="sticker.jpg"
        class="no-image">

    `;


    document.body.appendChild(noScreen);


    noScreen.style.display = "flex";



    // After 5 seconds show question again
    setTimeout(() => {


        noScreen.remove();


        questionScene.classList.remove("hidden");
        questionScene.style.display = "flex";


    }, 5000);


});

// -------------------------
// Envelope Click
// -------------------------

const envelope = document.getElementById("envelope");


const letter = document.getElementById("letter");



envelope.addEventListener("click", () => {


    console.log("Envelope opened");


    envelope.style.display = "none";


    document.querySelector(".envelope-text").style.display = "none";


    letter.classList.remove("hidden");

    letter.style.display = "block";


});