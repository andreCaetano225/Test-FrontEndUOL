import styles from './buttonApp.module.scss';



interface ButtonAppProps {
    text: string;
    backgroundColor: boolean;
}

export const ButtonApp = (props: ButtonAppProps) => {
    return (
        <>
            <button
                className={props.backgroundColor ? styles.buttonBackGroundColor : styles.buttonNotBackgroundColor}>
                {props.text}
            </button>
        </>
    )
}