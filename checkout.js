const stripe = Stripe("YOUR_PUBLIC_STRIPE_KEY");

document.querySelector("button").addEventListener("click", async () => {
    const response = await fetch("https://api.yourserver.com/create-checkout-session", { method: "POST" });
    const session = await response.json();
    stripe.redirectToCheckout({ sessionId: session.id });
});
