"use server";

import { redirect } from "next/navigation";

export async function analyseYoutubeVideo(formData: FormData) {
  const url = formData.get("url")?.toString();
  if (!url) return;

  const videoId = "abc123"; // Replace with actual video ID
  if (!videoId) return;

  redirect(`/video/${videoId}/analyse`);
}
