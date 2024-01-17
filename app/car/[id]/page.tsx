import { CarPadge } from '@/components/organisms/CarPadge/CarPadge';

type Props = {
    params: {
        id: string;
    }
}

export default function CarInfo({ params: { id } }: Props): JSX.Element {

    return (
        <CarPadge params={id} />
    );
};