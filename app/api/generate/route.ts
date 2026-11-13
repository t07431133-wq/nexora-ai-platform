import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { tool, input, tone } = await request.json();

    if (!input?.trim()) {
      return NextResponse.json(
        { error: "لطفاً توضیحاتت رو وارد کن." },
        { status: 400 }
      );
    }

    const names: Record<string, string> = {
      caption: "کپشن اینستاگرام",
      product: "معرفی محصول",
      ad: "متن تبلیغاتی",
      ideas: "ایده‌های تولید محتوا",
    };

    const text = `درخواست شما: ${names[tool] || "تولید محتوا"}

موضوع: ${input}

لحن انتخابی: ${tone || "حرفه‌ای"}

این نسخه آزمایشی Nexora AI است.
برای تولید متن واقعی با هوش مصنوعی، باید سرویس هوش مصنوعی به سایت متصل شود.`;

    return NextResponse.json({ text });
  } catch {
    return NextResponse.json(
      { error: "در پردازش درخواست مشکلی پیش آمد." },
      { status: 500 }
    );
  }
}
