import check from "@/public/assets/img/check.jpg";
import done from "@/public/assets/img/done.jpg";
import find from "@/public/assets/img/find.jpg";
import call from "@/public/assets/img/call.jpg";

import { RentalContitionType } from "@/components/atoms/RentalСonditionsList/rentalConditions.type";

export const rentalItem: RentalContitionType[] = [
    {
        img: call,
        text: "свяжитесь с нами",
    },
    {
        img: find,
        text: "Выберите автомобиль",
    },
    {
        img: check,
        text: "соответствуйте уловиям",
    },
    {
        img: done,
        text: "начните движение",
    },
];
