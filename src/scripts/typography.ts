const NBSP = "\u00A0";

const SHORT_WORDS = [
  "a",
  "an",
  "and",
  "as",
  "at",
  "by",
  "for",
  "if",
  "in",
  "nor",
  "of",
  "on",
  "or",
  "the",
  "to",
  "up",
  "via",
  "I",
] as const;

const DENYLIST_EXACT = new Set<string>([
  "PROJECTS",
  "CONTACTS",
  "ABOUT ME",
  "CV",
  "Menu",
]);

const ALLOWLIST_REPLACEMENTS: Array<[RegExp, string]> = [
  [/\bA\/B testing\b/g, `A/B${NBSP}testing`],
  [/\bUX\/UI Designer\b/g, `UX/UI${NBSP}Designer`],
  [/\bHealth tech\b/g, `Health${NBSP}tech`],
];

const EMAIL_OR_URL_PATTERN =
  /\b(?:https?:\/\/\S+|www\.\S+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})\b/gi;

const PLACEHOLDER_PREFIX = "__TYPO_PLACEHOLDER__";
const shortWordsPattern = new RegExp(
  `\\b(?:${SHORT_WORDS.map(escapeForRegex).join("|")})\\s+(?=\\p{L}|\\p{N})`,
  "giu",
);

const NBSP_PLACEHOLDER = `${PLACEHOLDER_PREFIX}NBSP`;

function escapeForRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function protectByPattern(input: string, pattern: RegExp): [string, string[]] {
  const placeholders: string[] = [];
  const protectedValue = input.replace(pattern, (match) => {
    const token = `${PLACEHOLDER_PREFIX}${placeholders.length}__`;
    placeholders.push(match);
    return token;
  });

  return [protectedValue, placeholders];
}

function restorePlaceholders(input: string, placeholders: string[]): string {
  return input.replace(
    new RegExp(`${escapeForRegex(PLACEHOLDER_PREFIX)}(\\d+)__`, "g"),
    (_, index: string) => placeholders[Number(index)] ?? "",
  );
}

function hasOwnProperty(value: object, key: PropertyKey): boolean {
  return Object.prototype.hasOwnProperty.call(value, key);
}

export function applyNbspToText(text: string): string {
  if (!text || DENYLIST_EXACT.has(text)) {
    return text;
  }

  const normalizedNbsp = text.replace(/\u00A0/g, NBSP_PLACEHOLDER);
  const [protectedText, placeholders] = protectByPattern(
    normalizedNbsp,
    EMAIL_OR_URL_PATTERN,
  );

  const withAllowlist = ALLOWLIST_REPLACEMENTS.reduce(
    (acc, [pattern, replacement]) => acc.replace(pattern, replacement),
    protectedText,
  );

  const withShortWords = withAllowlist.replace(shortWordsPattern, (match) =>
    match.replace(/\s+$/u, NBSP),
  );

  const restored = restorePlaceholders(withShortWords, placeholders);

  return restored.replace(new RegExp(NBSP_PLACEHOLDER, "g"), NBSP);
}

export function deepApplyTypography<T>(value: T): T {
  if (typeof value === "string") {
    return applyNbspToText(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepApplyTypography(item)) as T;
  }

  if (value && typeof value === "object") {
    const result: Record<string, unknown> = {};

    for (const key in value) {
      if (hasOwnProperty(value, key)) {
        const typedKey = key as keyof T;
        result[key] = deepApplyTypography(value[typedKey]);
      }
    }

    return result as T;
  }

  return value;
}
