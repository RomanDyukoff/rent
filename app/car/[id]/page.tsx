import { CarPadge } from "@/components/organisms/CarPadge/CarPadge";
import { ContactsSection } from "@/components/organisms/ContactsSection/ContactsSection";

type Props = {
    params: {
        id: string;
    };
};

export default function CarInfo({ params: { id } }: Props): JSX.Element {
    return (
        <>
            <CarPadge params={id} />
            <ContactsSection />
        </>
    );
}
