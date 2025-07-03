const messages = [
    "Você é como o google, tudo que eu procuro encontro em vc",
    "Nem preciso mais do sol, quem ilumina meu dia é vc",
    "Nem as obras de Van Gogh chegam perto da perfeita arte que vc é"
];

let showMessages = 0;

document.getElementById("showMessageBtn").addEventListener("click", () => {
    const messageBox = document.getElementById("messageBox");
    const messageText = document.getElementById("messageText");
    const finalQuestion = document.getElementById("finalQuestion");

    if (showMessages < messages.length) {
        messageText.textContent = messages[showMessages];
        messageBox.classList.remove("hidden");
        showMessages++;
        if (showMessages === messages.length) {
            setTimeout(() => {
                finalQuestion.classList.remove("hidden");
            }, 1500);
        }
    }
});

function showResponse(text) {
    const responseBox = document.getElementById("responseBox");
    const responseText = document.getElementById("responseText");

    responseText.textContent = text;
    responseBox.classList.remove("hidden");
}

function handleFinalResponse() {
    showResponse('Agora sim 😊😊😊😊😊😊');

    setTimeout(() => {
        window.location.href = "final.html";
    }, 1500);
}