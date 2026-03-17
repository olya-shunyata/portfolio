export type InfoTextPart = {
    text: string;
    accent?: boolean;
}

export type InfoPoint = string | InfoTextPart[];

export type InfoItem = {
    title: string;
    description?: InfoPoint[][];
    selected?: boolean;
}

export type InfoColumnItem = InfoItem;

export type InfoRowText = string | string[];

export type InfoRowItem = {
    title?: string;
    description: InfoRowText;
    width?: string;
}

export type InfoRowSection = {
    title: string;
    description?: InfoRowText;
    items?: InfoRowItem[];
    layout?: "stack" | "split";
    contentWidth?: string;
    columnsGap?: string;
}

export type Image = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    class?: string;
}

export type NavItem = {
    image: Image,
    title: string;
    href: string;
    direction: 'previous' | 'next';
}