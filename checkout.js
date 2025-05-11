const stripe = Stripe("pk_test_51RNY7xHBOAE9Lzc4VBNQEjSMMyaBba78o6hnxHD6fczQJNrxLw7sTZtXSlH521VLNIdVYbOrNh93icmQGZdj22yV00o2d3ikfP");

document.querySelector("button").addEventListener("click", async () => {
    const response = await fetch("https://api.yourserver.com/create-checkout-session", { method: "POST" });
    const session = await response.json();
    stripe.redirectToCheckout({ sessionId: session.id });
});
