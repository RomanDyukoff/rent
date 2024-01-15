import { StaticImageData } from 'next/image'

export interface RentalContitionType {
	img: StaticImageData;
	text: string;
}

export interface RentalContitionsType {
	items: RentalContitionType[]
	classNames?: string;
}