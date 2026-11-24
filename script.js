
document.addEventListener("DOMContentLoaded", function () {

    const dobInput = document.getElementById("dob");
    const continueBtn = document.getElementById("continueBtn");
    const message = document.getElementById("message");

    const correctDOB = "2008-11-30";

    continueBtn.addEventListener("click", function () {

        if (dobInput.value === "") {
            message.textContent = "Please select your birthday first!";
            return;
        }

        if (dobInput.value === correctDOB) {

            message.textContent = "Correct! Opening your surprise!";

            continueBtn.disabled = true;
            continueBtn.textContent = "Opening...";

            setTimeout(function () {
                window.location.href = "./welcome.html";
            }, 1000);

        } else {
            message.textContent = "Wrong birthday! Try again.";
        }

    });

});

