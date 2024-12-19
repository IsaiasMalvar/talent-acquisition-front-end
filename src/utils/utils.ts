import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const characterBreaker = (text: string) => {
    const characterContainer: string[] = [];

    text.trim()
        .split(" ")
        .forEach((word, index, array) => {
            word.split("").forEach((character) => {
                characterContainer.push(character);
            });
            if (index < array.length - 1) {
                characterContainer.push(" ");
            }
        });

    return characterContainer;
};

export const requestStatuses = {
    open: "OPEN",
    assigned: "ASSIGNED_TO_TA",
    approved: "APPROVED",
};

export const dateToString = (date: string | Date) => {
    if (date instanceof Date) {
        const dateToString = new Date(date).toLocaleDateString("en-US", {
            timeZone: "UTC",
        });
        return dateToString;
    } else return date;
};
