import { buildUrl } from "./scripts/path-utils";

const LINKEDIN_URL = "https://www.linkedin.com/in/olgabis";
const TG_URL = "https://t.me/shuniyata";
const CV_URL = buildUrl("/downloads/Bis_Olga_UX_UI_designer_cv.pdf");

const DEFAULT_OG_IMAGE_PATH = "/images/social/olga-bis-share-v2.jpg";
const PERSON_IMAGE_PATH = DEFAULT_OG_IMAGE_PATH;

export {
  CV_URL,
  DEFAULT_OG_IMAGE_PATH,
  LINKEDIN_URL,
  PERSON_IMAGE_PATH,
  TG_URL,
};
