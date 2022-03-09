import styles from './buttonApp.module.scss';



interface ButtonAppProps {
    text: string;
    backgroundColor: boolean;
    type?: 'submit';
}

export const ButtonApp = (props: ButtonAppProps) => {
    return (
        <>
            <button
                type={props.type}
                className={props.backgroundColor ? styles.buttonBackGroundColor : styles.buttonNotBackgroundColor}>
                {props.text}
            </button>
        </>
    )
}