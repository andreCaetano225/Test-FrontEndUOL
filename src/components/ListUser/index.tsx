import { ButtonApp } from '../ButtonApp';
import Link from 'next/link';
import styles from './listUser.module.scss';
import { useEffect } from 'react';
import { customersDB } from '../../data/customers';
import { StatusUser } from '../StatusUser';


export const ListUser = () => {


    return (
        <>
            <div>
                {customersDB.map((x) => (
                    <>
                        <div className={styles.listUserDiv}>
                            <p>
                                <h1>{x.name}</h1>
                                <p>{x.email}</p>
                            </p>
                            <p>
                                <h1>{x.id}</h1>
                                <p>{x.phone}</p>
                            </p>
                            <StatusUser statusType={x.status} />
                            <Link href={'./newuser'}>
                                <a>
                                    <ButtonApp text='Editar' backgroundColor={false} />
                                </a>
                            </Link>
                        </div>
                    </>
                ))}
            </div>

        </>
    )
}