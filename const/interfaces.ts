import type { StaticImageData } from "next/image";

export interface CardAutoType {
    id: string;
    img: StaticImageData;
    name: string;
    year: string;
    weight: string;
    height: string;
    money: string;
    type: string;
    fuel?: string;
    consumption?: string;
    seats?: string;
    cargospace?: string;
}
