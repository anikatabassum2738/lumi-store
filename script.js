function showWelcome() {
    alert("Elcome to LUMI STORE! Explore our latest collection");
}

function addToCart(productName) {
alert(productName + " has been added to your cart!");
}

function sendMessage(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.")
    } else {
        document.getElementById("form-feedback").innerHTML = "Thank you, " + name + "! Your message has been received.";

        document.querySelector("form").reset;
    }
}
