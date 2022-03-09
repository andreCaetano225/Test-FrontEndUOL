import { ButtonApp } from '../ButtonApp';
import Link from 'next/link';
import styles from './listUser.module.scss';


export const ListUser = () => {
    return (
        <>
            <div className={styles.listUserDiv}>
                <p>
                    <h1>John Doe</h1>
                    <p>john_doe@test.com</p>
                </p>
                <p>
                    <h1>123.456.789-09</h1>
                    <p>(11)99988-665252</p>
                </p>
                <div>
                    <div className={styles.divStatus} />
                    <p>Ativo</p>
                </div>
                <Link href={'./newuser'}>
                    <a>
                        <ButtonApp text='Editar' backgroundColor={false} />
                    </a>
                </Link>
            </div>
        </>
    )
}