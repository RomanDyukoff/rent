import { CardAuto } from "@/components/molecules/CardAuto/CardAuto";
import type { CardAutoType } from "@/const/interfaces";


export const CardAutoList = ({ listCards }: { listCards: CardAutoType[] }): JSX.Element => {
    return (
        <>
            {listCards.map(car => <CardAuto {...car} />)}
        </>
    );
};