import { loadPaypal, Paypal } from "@stripe/stripe-js";

let stripePromise: Promise<Paypal | null>;
export const getPaypal = (connectedAccountId?: string) => {
  if (!stripePromise) {
    stripePromise = loadPaypal(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "",
      { stripeAccount: connectedAccountId },
    );
  }
  return stripePromise;
};
