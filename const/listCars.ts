import type { CardAutoType } from "@/const/interfaces";
import CarOne from "@/public/assets/img/ford-focus-universal.jpg"
import CarTwo from "@/public/assets/img/hyundai-h1-2019.jpg"

export const listCars: CardAutoType[] = [
    {
        id: "1",
        name: "GAZ-2705",
        year: "2013",
        weight: "до 1.5т",
        height: "1.5м",
        money: "80",
        img: CarOne,
        type: "грузоперевозка"
    },
    {
        id: "2",
        name: "GAZ-2705",
        year: "2013",
        weight: "до 1.5т",
        height: "1.5м",
        money: "80",
        img: CarTwo,
        type: "пассажироперевозка"
    }
]