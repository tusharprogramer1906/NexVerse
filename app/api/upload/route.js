import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(req) {
  const data = await req.formData();
  const files = data.getAll("files");

  if (files.length === 0) {
    return NextResponse.json({ message: "No images found", success: false });
  }

  try {
    for (const file of files) {
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);
      const path = `./public/uploads/${file.name}`;
      await writeFile(path, buffer);
    }

    return NextResponse.json({ message: "Images uploaded", success: true });
  } catch (error) {
    return NextResponse.json({ message: "Error uploading images", success: false });
  }
}
