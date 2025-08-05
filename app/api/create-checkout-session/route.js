import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export async function POST(req) {
  const body = await req.json();
  const { email, amount, lang } = body;

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const session = await stripe.checkout.sessions.create({
      locale: lang || "en", // 👈 This sets Arabic or English UI
      mode: "payment",
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: amount || 2000, // fallback to $20
            product_data: {
              name: "Fatima's Cookbook",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get(
        "origin"
      )}/?success=1&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/`,
    });

    return new Response(JSON.stringify({ sessionId: session.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Stripe error:", err.message);
    return new Response(JSON.stringify({ error: "Session creation failed" }), {
      status: 500,
    });
  }
}
