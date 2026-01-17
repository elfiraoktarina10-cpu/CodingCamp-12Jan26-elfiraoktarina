
welcomemessage();

function welcomemessage() {
    let userresponse = prompt ("Welcome 🌊 Please enter your name?")

    if (userresponse === null || userresponse.trim() === "") {
        userresponse = "Guest";
    }
    document.getElementById("welcome-speech").innerText =`Aloha ${userresponse}! Welcome to Waves`;
}
