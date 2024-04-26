import { StaticImageData } from "next/image";

export type RentType = {
    title: string;
    text: string[][];
    image: StaticImageData;
};
export type WhomType = {
    title: string;
    text: JSX.Element;
    image: StaticImageData;
};

export interface DescriptionDataType {
    rent: RentType;
    whom: WhomType;
}
