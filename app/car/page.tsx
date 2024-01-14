import { Container } from '@/components/atoms/Container/Container';
import styles from './style.module.scss'


export default function CarInfo(): JSX.Element {
    return (
        <section className={styles.car}>
            <Container>
                <h1 className={styles.car__title}>Описание авто</h1>
            </Container>
        </section>
    );
};