import { CarPadge } from '@/components/organisms/CarPadge/CarPadge';

export default function CarInfo({params}:{params:{id:string}}): JSX.Element {

    return (
        <section>
            <CarPadge params={params.id} />
        </section>
    );
};