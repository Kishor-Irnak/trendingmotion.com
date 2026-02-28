import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validate minimal required fields
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }

    // Save directly using Firebase Admin (Server Side - Bypasses Ad Blockers)
    const docRef = await adminDb.collection("leads").add({
      ...data,
      formType: "contact",
      status: "leads",
      createdAt: new Date().toISOString(),
      timestamp: new Date(),
    });

    return NextResponse.json(
      { message: "Success", id: docRef.id },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error saving lead via API route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
