import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import AuditLead from "@/models/AuditLead";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const lead = await AuditLead.create({
      fullName: body.fullName,
      phone: body.phone,
      email: body.email,
      brandName: body.brandName,
      message: body.message,
    });

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      lead,
    });
  } catch (error) {
    console.log("AUDIT FORM ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}