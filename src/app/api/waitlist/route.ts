import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, use_case, description } = body;

    // Validate required fields
    if (!name || !email || !use_case || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    // If Supabase not configured, return success for demo
    if (!supabase) {
      return NextResponse.json({
        success: true,
        message: "Thank you! We'll be in touch soon.",
        data: [{ id: "demo", name, email, use_case, description }],
      });
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("waitlist")
      .insert([{ name, email, use_case, description }])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch soon.",
      data,
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}