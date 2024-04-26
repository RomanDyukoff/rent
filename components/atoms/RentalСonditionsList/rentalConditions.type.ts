import { StaticImageData } from "next/image";

export interface RentalContitionType {
    img: StaticImageData;
    text: string;
}

export interface RentalContitionsType {
    items: RentalContitionType[];
    classNames?: string;
}

export interface ItemDescriptionType {
    img: StaticImageData;
    text: string;
}

export interface ListDescriptionType {
    items: ItemDescriptionType[];
    classNames?: string;
}
