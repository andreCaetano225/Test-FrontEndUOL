import styles from './headerListUser.module.scss';
import Link from 'next/link';

export const HeaderListUser = () => {
    return (
        <>
            <div className={styles.headerListUser}>
                <div>
                    <p>
                        <h1>Listagens de Usuários</h1>
                        <p>Escolha um cliente para editar os detalhes</p>
                    </p>
                    <Link href={'./newuser'}>
                        <button>
                            Novo cliente
                        </button>
                    </Link>

                </div>
            </div>
        </>
    )
}