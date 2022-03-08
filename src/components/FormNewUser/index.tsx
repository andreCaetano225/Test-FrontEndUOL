import styles from './formNewUser.module.scss';
import Link from 'next/link';

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
                    <button className={styles.buttonCriar}>Criar</button>
                    <Link href={'/'}>
                        <button className={styles.buttonVoltar}>Voltar</button>
                    </Link>
                </div>
            </div>
        </>
    )
}