import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi"
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './formNewUser.module.scss';
import InputMask from 'react-input-mask';
import * as yup from "yup";
import { ButtonApp } from "../ButtonApp";
import Link from "next/link";
import { useCallback, useState } from "react";
import { customersDB } from "../../data/customers";
import { Customers } from "../../models/customers.model";
import { useRouter } from "next/router";



export const FormNewUser = () => {
    const router = useRouter();

    const schema = yup.object({
        name: yup.string().required('Digite seu Nome'),
        email: yup.string().required('Digite seu E-mail'),
        id: yup.string().required('Digite um CPF valido'),
        phone: yup.string().required('Digite seu Telefone'),
        status: yup.string().required('Selecione um Status')
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm<Customers>({
        resolver: yupResolver(schema)
    });
    const onSubmit = useCallback((data: Customers) => {
        customersDB.push(data)
        localStorage.setItem("customersDB", JSON.stringify(customersDB));
        router.push("/");
        console.log(customersDB)
    }, []);

    return (
        <>
            <div className={styles.divFormNewUser}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} type='text' placeholder="Nome" />
                    <input {...register("email")} type='email' placeholder="E-mail" style={{ marginTop: '5px' }} />
                    <p style={{ color: 'red' }}>{errors.email?.message}</p>
                    <InputMask mask={"999.999.999-99"} placeholder="CPF" maskChar={null} {...register("id")} />
                    <p style={{ color: 'red' }}>{errors.id?.message}</p>
                    <InputMask mask={"(99)99999-9999"} placeholder="Telefone" maskChar={null} {...register("phone")} />
                    <p style={{ color: 'red' }}>{errors.phone?.message}</p>
                    <select  {...register("status")}>
                        <option disabled selected hidden style={{ color: '#a2a3a0' }}>Status</option>
                        <option value="active">Ativo</option>
                        <option value="inactive">Inativo</option>
                        <option value="waiting">Aguardando ativação</option>
                        <option value="disabled">Desativado</option>
                    </select>
                    <p style={{ color: 'red' }}>{errors.status?.message}</p>
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
            <div className={styles.errorMensage}>
                {errors.name &&
                    <div >
                        <span>
                            <BiErrorCircle />
                            <p >{errors.name?.message}</p>
                        </span>
                    </div>
                }
            </div>

        </>

    );
}