import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import sendGridMail from '@sendgrid/mail';

// Set your SendGrid API Key from the environment variables
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, address, cart } = body;

    // Insert order into the database
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "orders", // 🔁 Replace with your DB name
    });

    const query = `INSERT INTO orders (name, email, phone, address, cart) VALUES (?, ?, ?, ?, ?)`;
    await db.execute(query, [name, email, phone, address, JSON.stringify(cart)]);

    // Prepare the email content
    const message = {
      to: email, // Customer's email
      from: 'mannanfazlani88@gmail.com', // Replace with your verified sender email
      subject: 'Order Confirmation',
      text: `Hello ${name},\n\nThank you for your order! Here are your order details:\n\n${JSON.stringify(cart, null, 2)}`,
      html: `<strong>Hello ${name},</strong><br><br>Thank you for your order! Here are your order details:<br><pre>${JSON.stringify(cart, null, 2)}</pre>`,
    };

    // Send the email via SendGrid
    await sendGridMail.send(message);

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: "An error occurred during the checkout process" }, { status: 500 });
  }
}
