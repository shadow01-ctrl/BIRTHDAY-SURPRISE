
// ==================================
// 1. SCROLL REVEAL ANIMATION
// ==================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(function(element) {
    observer.observe(element);
});


// ==================================
// 2. FLOATING HEARTS
// ==================================

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("heart");

    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (7 + Math.random() * 7) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 15000);
}

setInterval(createHeart, 1200);

// ==================================
// 4. CONFETTI CELEBRATION
// ==================================

const wishBtn = document.getElementById("wishBtn");

const finalMessage =
    document.getElementById("finalMessage");

function createConfetti() {

    const colors = [
        "#f49ac2",
        "#b99aff",
        "#f9e7dc",
        "#ffda79",
        "#ffffff"
    ];

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.width = "8px";
        piece.style.height = "12px";

        piece.style.borderRadius = "2px";

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(piece);

        setTimeout(function() {
            piece.remove();
        }, 5500);
    }
}

// INTERACTIVE CAKE + GRAND FINALE

const cakeSection = document.getElementById("birthdayCake");
const wishInstruction = document.getElementById("wishInstruction");
const finaleBtn = document.getElementById("finaleBtn");
const grandFinale = document.getElementById("grandFinale");

wishBtn.addEventListener("click", function () {

    if (cakeSection.classList.contains("blown")) return;

    // Blow out candles
    cakeSection.classList.add("blown");

    wishInstruction.textContent =
        "Your wish is on its way to the universe ✨";

    wishBtn.textContent = "Wish Made! ❤️";
    wishBtn.disabled = true;

    finalMessage.classList.add("show");

    finalMessage.textContent =
        "May all your beautiful dreams come true, Nancy. You deserve endless happiness! ❤️";

    // Your existing confetti function
    createConfetti();

    // Show finale button
    setTimeout(function () {
        finaleBtn.classList.add("show");
    }, 1800);

});


// OPEN GRAND FINALE

finaleBtn.addEventListener("click", function () {

    grandFinale.classList.add("active");

});

// CLOSE GRAND FINALE

const closeFinale = document.getElementById("closeFinale");

closeFinale.addEventListener("click", function () {
    grandFinale.classList.remove("active");
});


// =================================
// PHOTO GALLERY LIGHTBOX
// =================================

const photos = document.querySelectorAll(".photo-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const photoCaption = document.getElementById("photoCaption");

const closeLightbox = document.getElementById("closeLightbox");

const prevPhoto = document.getElementById("prevPhoto");

const nextPhoto = document.getElementById("nextPhoto");

let currentPhoto = 0;


// Open photo

function showPhoto(index) {

    currentPhoto = (index + photos.length) % photos.length;

    lightboxImage.src = photos[currentPhoto].src;

    photoCaption.textContent =
        photos[currentPhoto].nextElementSibling.textContent;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


// Click gallery images

photos.forEach(function(photo, index) {

    photo.style.cursor = "pointer";

    photo.addEventListener("click", function() {
        showPhoto(index);
    });

});


// Next photo

nextPhoto.addEventListener("click", function() {
    showPhoto(currentPhoto + 1);
});


// Previous photo

prevPhoto.addEventListener("click", function() {
    showPhoto(currentPhoto - 1);
});


// Close photo

function closePhoto() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}

closeLightbox.addEventListener("click", closePhoto);


// Close by clicking outside image

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        closePhoto();
    }

});


// Keyboard controls

document.addEventListener("keydown", function(event) {

    if (!lightbox.classList.contains("active")) return;

    if (event.key === "Escape") {
        closePhoto();
    }

    if (event.key === "ArrowRight") {
        showPhoto(currentPhoto + 1);
    }

    if (event.key === "ArrowLeft") {
        showPhoto(currentPhoto - 1);
    }

});





// ======================================
// 5. ANIMATED ENVELOPE + TYPING LETTER
// ======================================

const envelope = document.getElementById("envelope");

const letterBtn = document.getElementById("letterBtn");

const typedMessage = document.getElementById("typedMessage");

const letterSignature = document.getElementById("letterSignature");

const letterHint = document.getElementById("letterHint");


// Your personal birthday message

const personalLetter = `Happy Birthday! ❤️

I just want you to know how special you are for me.

hey nancy mai is letter me jo bhi likh raha hu shayad hi kabhi mai bol paau 
aaj tumhara birthday hai aur mai yahi chaunga ki bhagwaan ji tumhe woh sab khushi de jo tum deserve krti ho 

tum sach me bahut achhi ho aur tumhari smile aur bhi pyaari hai 
kabhi us smile ko mt khona.

tum sach me mere liye bahut hi special ho mai tumhe khona to kbhi nhi chahunga.

Ek baat bolna chahunga ki..

mai tumhe pasand krta hu bahut samay se kbse ye to tumhe bata hi chuka hu 
mai janta hu tumhe ye sab pasand nhi 
maine soch rakha tha tumhe kbhi na kbhi bataunga to bata diya tha 
aur isme tumhe jada kuchh sochane ki jarurat nhi hai 
aur na hi mai koi jawab lene ke liye bataya hu 
maine socha tha jab hamari baat snap pr start hui thi ki jab tum college jaogi uske baad hi bataunga 
but aisa hua nhi.
jo bhi hai jaisa bhi hai sab theek hai 
aur in sab se bahut upar ek baat ye hai ki ham bahut bahut bahut hi jada axey dost hai.😊

mai tumhare liye woh shakhs banna chahunga 
jisey tum har woh baat bata sako jo tum duniya se nhi bata sakti.

mai koi shayar to nhi hu pr ek shayari jarur kahna chaunga--

"Meri zindagi ke raaz mein ek raaz tum bhi ho
meri khamosi ki aas mein ek aas tum bhi ho,
tum ho mere liye yeh sawal hi rahne do 
Bas meri har kaash me ek kaash tum bhi ho "

sach me yrr tum bahut pyaari ho.
tumhara pyaara nature hi tumhari sabse badi khubsurti hai
aur issey kbhi khona mt 

Likhne ko to bahut kuch hai tumhare liye mere pyaare 🌻
bas jaate jaate itna kahunga ki hamesha muskurati raho,masti karti raho
bhagwaan tumhe koi takleef na de 
aur kbhi koi dikkat aye to tum sab sambhaal logi tum brave ho hi 
hai na mere sher??


I hope this year you brings endless happiness, beautiful memories and everything your heart wishes for.

Never stop smiling Nancy.
Keep being the wonderful person you are.

You deserve all the happiness in the world.
nancuuuuu

Always stay happy, my Yellow Person. ♡`;


// Typing animation

function typeLetter(text) {

    return new Promise(function(resolve) {

        let index = 0;

        typedMessage.textContent = "";

        function typeNextCharacter() {

            if (index < text.length) {

                typedMessage.textContent += text.charAt(index);

                index++;

                setTimeout(typeNextCharacter, 32);

            } else {

                resolve();

            }

        }

        typeNextCharacter();

    });

}


// Open envelope

letterBtn.addEventListener("click", async function() {

    if (envelope.classList.contains("open")) {
        return;
    }

    letterBtn.disabled = true;

    letterBtn.textContent = "Opening your letter... 💗";

    letterHint.textContent = "A little message from my heart...";

    // Open envelope animation

    envelope.classList.add("open");

    // Wait for paper to come out

    await new Promise(function(resolve) {
        setTimeout(resolve, 1300);
    });

    // Start typing

    await typeLetter(personalLetter);

    // Show signature

    letterSignature.classList.add("visible");

    letterBtn.textContent = "A Letter Written With Love ❤️";

    letterHint.textContent = "Keep this little letter close to your heart.";

});
console.log("Letter button:", letterBtn);
// Close animated letter

const closeLetter = document.getElementById("closeLetter");

closeLetter.addEventListener("click", function () {

    envelope.classList.remove("open");

    letterSignature.classList.remove("visible");

    typedMessage.textContent = "";

    letterBtn.disabled = false;
    letterBtn.textContent = "Open My Letter 💌";

    letterHint.textContent =
        "A little surprise, written just for you.";

});