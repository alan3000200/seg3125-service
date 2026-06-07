const serviceSelect = document.getElementById("service");
const pricePreview = document.getElementById("pricePreview");
const form = document.getElementById("appointmentForm");
const confirmation = document.getElementById("confirmation");

serviceSelect.addEventListener("change", function () {
    const selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
    const price = selectedOption.getAttribute("data-price");

    if (price) {
        pricePreview.textContent = `Estimated price: ${price}`;
    } else {
        pricePreview.textContent = "Estimated price: —";
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const ownerName = document.getElementById("ownerName").value;
    const petName = document.getElementById("petName").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    confirmation.classList.remove("hidden");
    confirmation.innerHTML = `
        <h3>Appointment Confirmed!</h3>
        <p>Thank you, <strong>${ownerName}</strong>.</p>
        <p>Your appointment for <strong>${petName}</strong> has been booked.</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
    `;

    form.reset();
    pricePreview.textContent = "Estimated price: —";
});