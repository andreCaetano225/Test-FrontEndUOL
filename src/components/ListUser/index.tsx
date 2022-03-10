import { ButtonApp } from '../ButtonApp';
import Link from 'next/link';
import styles from './listUser.module.scss';
import { useEffect, useState } from 'react';
import { customersDB } from '../../data/customers';
import { StatusUser } from '../StatusUser';
import { Customers } from '../../models/customers.model';

interface ListUserProps {
    data: Customers[];
}


export const ListUser = (props: ListUserProps) => {
    const [items, setItems] = useState<Customers[]>([]);

    useEffect(() => {
        const storageItem = localStorage.getItem("customersDB")
        const jsonItem = JSON.parse(storageItem as any)
        if (jsonItem == null) {
            setItems(props.data);

        } else {
            setItems(jsonItem);
        }
    }, [])

    return (
        <>
            <div>
                <div className={styles.divList}>
                    {items.map((x) => (
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
                    <p style={{ marginTop: '10px' }}>Exibindo {items.length} clientes</p>
                </div>
            </div>
        </>
    )
}