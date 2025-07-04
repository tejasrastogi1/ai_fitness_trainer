"use client";

import { useTheme } from "@/providers/ThemeProvider";

export function TrainerImage() {
  const { theme } = useTheme();
  
  return (
    <img
      src={theme === "light" ? "/trainer-light.png" : "/new-trainer.png"}
      alt="Personal Trainer AI"
      className="size-full object-cover object-center"
    />
  );
}
