import styles from './textNewUser.module.scss';

export const TextNewUser = () => {
    return (
        <>
            <div className={styles.textUserStyles}>
                <div>
                    <p>
                        <h1>Novo usuário</h1>
                        <p>Informe os campos a seguir para criar novo usuário</p>
                    </p>
                </div>
            </div>
        </>
    )
}