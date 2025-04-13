import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "", // blank by default in XAMPP
  database: "Energrain",
};

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const connection = await mysql.createConnection(dbConfig);

    await connection.execute(
      "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    await connection.end();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ DATABASE ERROR:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
