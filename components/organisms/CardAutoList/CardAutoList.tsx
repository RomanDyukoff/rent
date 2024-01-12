import { CardAuto } from "@/components/molecules/CardAuto/CardAuto";
import type { CardAutoType } from "@/const/interfaces";


export const CardAutoList = ({ listCards = [] }: { listCards: CardAutoType[] }) => {
    return (
        <>
            {listCards.map(car => <CardAuto {...car} />)}
        </>
    );
};