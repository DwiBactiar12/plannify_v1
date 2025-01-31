import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const STATUS={
    TODO:"To Do",
    IN_PROGRESS:"In Progress",
    DONE:"Done",
    ONREVIEW:"On Review",
    UNKNOWN:"Unknown"
}


export const PRIORITY={
    LOW:"Low",
    MEDIUM:"Medium",
    HIGH:"High",
    UNKNOWN:"Unknown"
}
