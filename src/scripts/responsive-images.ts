import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";

const PROFILE_WIDTHS = {
  showcase: [960, 1440, 1920],
  screenshot: [640, 960, 1280],
  detail: [],
} as const;

const PROFILE_DEFAULTS = {
  showcase: {
    format: "webp",
    quality: 90,
    dprCap: 2,
  },
  screenshot: {
    format: "png",
    dprCap: 2,
  },
  detail: {
    format: "png",
    dprCap: 2,
  },
} as const;

export type ResponsiveImageProfile = keyof typeof PROFILE_WIDTHS;
export type ResponsiveImageFormat = "webp" | "png";

export type ResponsiveImageData = {
  src: string;
  srcset?: string;
  mobileSrc?: string;
  mobileSrcset?: string;
};

type ResponsiveImageOptions = {
  asset: ImageMetadata;
  profile: ResponsiveImageProfile;
  maxDisplayWidth: number;
  mobileAsset?: ImageMetadata;
  mobileProfile?: ResponsiveImageProfile;
  mobileMaxDisplayWidth?: number;
  dprCap?: 2 | 2.5;
  format?: ResponsiveImageFormat;
  quality?: number;
};

type VariantOptions = {
  asset: ImageMetadata;
  profile: ResponsiveImageProfile;
  maxDisplayWidth: number;
  dprCap?: 2 | 2.5;
  format?: ResponsiveImageFormat;
  quality?: number;
};

const normalizeWidths = (widths: number[]) =>
  Array.from(new Set(widths.filter((width) => width > 0).map((width) => Math.ceil(width)))).sort((a, b) => a - b);

const buildCandidateWidths = ({
  asset,
  profile,
  maxDisplayWidth,
  dprCap,
}: Pick<VariantOptions, "asset" | "profile" | "maxDisplayWidth" | "dprCap">) => {
  const effectiveDprCap = dprCap ?? PROFILE_DEFAULTS[profile].dprCap;
  const maxUsefulWidth = Math.min(asset.width, Math.ceil(maxDisplayWidth * effectiveDprCap));

  const widths = profile === "detail"
    ? [maxDisplayWidth, Math.min(maxUsefulWidth, Math.ceil(maxDisplayWidth * 2))]
    : [
        maxDisplayWidth,
        ...PROFILE_WIDTHS[profile].filter((width) => width <= maxUsefulWidth),
        maxUsefulWidth,
      ];

  const candidates = normalizeWidths(widths).filter((width) => width <= asset.width);

  if (candidates.length === 0) {
    return [asset.width];
  }

  return candidates;
};

const buildVariant = async ({
  asset,
  profile,
  maxDisplayWidth,
  dprCap,
  format,
  quality,
}: VariantOptions) => {
  const defaults = PROFILE_DEFAULTS[profile];

  const optimized = await getImage({
    src: asset,
    widths: buildCandidateWidths({
      asset,
      profile,
      maxDisplayWidth,
      dprCap,
    }),
    format: format ?? defaults.format,
    quality: quality ?? defaults.quality,
  });

  return {
    src: optimized.src,
    srcset: optimized.srcSet.values.length > 0 ? optimized.srcSet.attribute : undefined,
  };
};

export const buildResponsiveImage = async ({
  asset,
  profile,
  maxDisplayWidth,
  mobileAsset,
  mobileProfile,
  mobileMaxDisplayWidth,
  dprCap,
  format,
  quality,
}: ResponsiveImageOptions): Promise<ResponsiveImageData> => {
  const [desktopVariant, mobileVariant] = await Promise.all([
    buildVariant({
      asset,
      profile,
      maxDisplayWidth,
      dprCap,
      format,
      quality,
    }),
    mobileAsset
      ? buildVariant({
          asset: mobileAsset,
          profile: mobileProfile ?? profile,
          maxDisplayWidth: mobileMaxDisplayWidth ?? maxDisplayWidth,
          dprCap,
          format,
          quality,
        })
      : Promise.resolve(undefined),
  ]);

  return {
    src: desktopVariant.src,
    srcset: desktopVariant.srcset,
    mobileSrc: mobileVariant?.src,
    mobileSrcset: mobileVariant?.srcset,
  };
};
