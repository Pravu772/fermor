import { NextResponse } from "next/server";

interface WaitlistPayload {
  email: string;
  interest?: string;
  userType?: string;
}

// In-memory stub for waitlist storage in development/demo
const waitlistSubmissions: Array<WaitlistPayload & { createdAt: string }> = [];

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WaitlistPayload;

    if (!body || !body.email || typeof body.email !== "string") {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const email = body.email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email format (e.g. name@domain.com)." },
        { status: 422 }
      );
    }

    // Save to in-memory stub
    const entry = {
      email,
      interest: body.interest || "All Tools & App",
      userType: body.userType || "General",
      createdAt: new Date().toISOString(),
    };

    waitlistSubmissions.push(entry);

    return NextResponse.json({
      success: true,
      message: "You have been added to the early access waitlist. We will notify you when new modules launch.",
      position: waitlistSubmissions.length + 420, // polite illustrative queue offset
    });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "ok",
    registeredCount: waitlistSubmissions.length + 420,
  });
}
