document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");

    chatForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
        const message = chatInput.value.trim();
        if (!message) return;

        appendMessage("Vous", message);
        chatInput.value = "";

        fetch("chat_api.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: message })
        })
        .then(res => res.json())
        .then(data => {
            appendMessage("Bot", data.response);
        })
        .catch(err => {
            appendMessage("Bot", "Erreur serveur !");
            console.error("Erreur API :", err);
        });
    });

    function appendMessage(sender, message) {
        const msgDiv = document.createElement("div");
        msgDiv.className = "message";
        msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
