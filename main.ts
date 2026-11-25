// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Auto-reply: I have permanently logged out to steam milk full-time. Your ticket hit my rate limit and was escalated to a human with a portafilter. My inbox is now a tip jar. ETA: never.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars`);
