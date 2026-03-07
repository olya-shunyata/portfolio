export default function getTimezoneLabel() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Belgrade",
    timeZoneName: "shortOffset",
    year: "numeric",
  }).formatToParts(new Date());

  const tz = parts.find((p) => p.type === "timeZoneName")?.value || "GMT+1";
  const normalized = tz.replace("GMT", "GMT ");

  return normalized.includes("+2")
    ? "GMT +2:00"
    : "GMT +1:00";
}