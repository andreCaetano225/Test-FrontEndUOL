import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './formNewUser.module.scss';
import InputMask from 'react-input-mask';
import * as yup from "yup";
import { ButtonApp } from "../ButtonApp";
import Link from "next/link";
import { useCallback } from "react";

interface IFormInputs {
    firstName: string;
    email: number;
}



export const FormNewUser = () => {
    const schema = yup.object({
        firstName: yup.string().required('Digite seu Nome'),
        email: yup.string().required('Digite seu E-mail'),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit = useCallback((data: IFormInputs) => {
        console.log(data)
    }, []);

    return (
        <>

            <div className={styles.divFormNewUser}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName")} type='text' placeholder="Nome" />
                    <p style={{ color: 'red' }}>{errors.firstName?.message}</p>

                    <input {...register("email")} type='email' placeholder="E-mail" style={{ marginTop: '5px' }} />
                    <p style={{ color: 'red' }}>{errors.email?.message}</p>
                    <InputMask mask={"999.999.999-99"} placeholder="CPF" maskChar={null} />
                    <InputMask mask={"(99)99999-9999"} placeholder="Telefone" maskChar={null} />
                    <div style={{ marginTop: '20px' }}>
                        <ButtonApp text='Criar' backgroundColor={true} type='submit' />
                        <Link href={'/'}>
                            <a>
                                <ButtonApp text='Voltar' backgroundColor={false} />
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </>

    );
}