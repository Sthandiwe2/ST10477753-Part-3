function login() {

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    if (username === "admin" &&
        password === "Lionel123") {

        document.getElementById("loginMessage").innerHTML =
            "✅ Login Successful!";

        document.getElementById("loginMessage").style.color =
            "green";

    } else {

        document.getElementById("loginMessage").innerHTML =
            "❌ Invalid Username or Password";

        document.getElementById("loginMessage").style.color =
            "red";
    }
}

document.getElementById("ticketForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const ticket = {
        name: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        date: new Date().toLocaleString()
    };

    let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    tickets.push(ticket);

    localStorage.setItem("tickets", JSON.stringify(tickets));

    document.getElementById("message").innerText = "Ticket submitted successfully!";

    document.getElementById("ticketForm").reset();
});

function searchKnowledgeBase() {

    let input = document.getElementById("searchInput");
    let filter = input.value.toLowerCase();

    let cards = document.querySelectorAll(".article-card");

    cards.forEach(card => {

        let text = card.textContent.toLowerCase();

        if (text.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
