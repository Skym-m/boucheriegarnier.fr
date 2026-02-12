const LOCALE = "fr-FR";

function parseDate(value?: string | null): Date | null {
  if (!value) {
    return null;
  }

  const parsedDate = new Date(value);
  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
}

export function formatFrenchDate(value?: string | null): string {
  const parsedDate = parseDate(value);
  return parsedDate ? parsedDate.toLocaleDateString(LOCALE) : "Date inconnue";
}

export function formatFrenchDateTime(value?: string | null): string {
  const parsedDate = parseDate(value);

  if (!parsedDate) {
    return "Date inconnue";
  }

  return parsedDate.toLocaleString(LOCALE, {
    dateStyle: "long",
    timeStyle: "short",
  });
}
