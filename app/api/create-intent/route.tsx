import Stripe from "stripe";
import {PaymentIntents } from "../../../node_modules/stripe/esm/resources/PaymentIntents";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2023-10-16",
});
export async function POST(request: any) {
  const data: any = await request.json();
  const amount = data.amount;
  try {
    const PaymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "USD",
    });

    return NextResponse.json(PaymentIntent.client_secret, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}
