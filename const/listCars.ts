import type { CardAutoType } from "@/const/interfaces";
import CarOne from "@/public/assets/img/gaz1.png"
import CarTwo from "@/public/assets/img/gaz2.png"

export const listCars: CardAutoType[] = [
    {
        id: "1",
        name: "GAZ-2705",
        year: "2013",
        weight: "до 1.5т",
        height: "1.5м",
        money: "80",
        img: CarOne,
        type: "Фургон",
        seats: "3 с водителем",
        fuel: "92 бензин",
        consumption: "11-12 литров",
        cargospace: "3 метра",
    },
    {
        id: "2",
        name: "GAZ-2705",
        year: "2013",
        weight: "до 1.5т",
        height: "1.5м",
        money: "80",
        img: CarTwo,
        type: "Грузопассажирский",
        seats: "7 с водителем",
        fuel: "92 бензин",
        consumption: "11-12 литров",
        cargospace: "2 метра",
    }
]