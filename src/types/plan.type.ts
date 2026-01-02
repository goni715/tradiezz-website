import type { TVisibility } from "./global.type";

export type TDuration = 30 | 365;
export type TValidity = "yearly" | "monthly";

export interface IPlan {
    _id: string;
    name: string;
    slug: string;
    duration: TDuration;
    validity: TValidity;
    price: number;
    features: string[];
    description: string;
    status: TVisibility
}
