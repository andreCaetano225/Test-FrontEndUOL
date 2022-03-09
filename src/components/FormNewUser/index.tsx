import styles from './formNewUser.module.scss';
import Link from 'next/link';
import { ButtonApp } from '../ButtonApp';

export const FormNewUser = () => {
    return (
        <>
            <div className={styles.divFormNewUser}>
                <form>
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="CPF" />
                    <input type="text" placeholder="Telefone" />
                </form>
                <div>
                    <ButtonApp text='Criar' backgroundColor={true} />
                    <Link href={'/'}>
                        <a>
                            <ButtonApp text='Voltar' backgroundColor={false} />
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}