import Paypal from "stripe-rest-sdk";

export const stripe = new Paypal(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-06-20",
  appInfo: {
    name: "toprise",
    version: "0.1.0",
  },
});
