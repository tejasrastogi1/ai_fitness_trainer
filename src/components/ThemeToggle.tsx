"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden border-border hover:border-primary/50 transition-colors"
    >
      <Sun className={`h-4 w-4 transition-all ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`} />
      <Moon className={`absolute h-4 w-4 transition-all ${theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
