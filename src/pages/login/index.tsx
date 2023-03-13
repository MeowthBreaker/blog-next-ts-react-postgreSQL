import React, { FC, useState } from 'react';
import styles from './index.module.css';
import cn from 'classnames';
import { useFormik } from 'formik';
import { Header } from '@/components/Header/Header';
import { Button } from '@/components/Button/Button';
import { redirect } from 'next/navigation';

import { useGetLoginMutation } from '@/api/loginMutation';
import Link from 'next/link';

interface LoginPageProps {
    className?: string;
}

const LoginPage: FC<LoginPageProps> = ({ className }) => {
    const [updateLogin, result] = useGetLoginMutation();

    const [queryResult, setQueryResult] = useState<string | null>(null);

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            remember: false,
        },
        onSubmit: async (values) => {
            if (!values.login.length || !values.password.length) return;

            const meow = await updateLogin(values);

            if ('error' in meow) {
                setQueryResult('something went wrong');
            } else redirect('/');
        },
    });
    return (
        <div className={cn(styles['login-page'])}>
            <Header />
            <div className={cn(styles.container)}>
                <div className={cn(styles.title)}>
                    <p className={cn(styles.header)}>Welcome back!</p>
                    <p className={cn(styles.description)}>Sign in to get the most out of nuntium</p>
                </div>
                <form className={cn(styles['login-container'])} onSubmit={formik.handleSubmit}>
                    <input
                        id='login'
                        name='login'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.login}
                        placeholder='Login'
                    />

                    <input
                        id='password'
                        name='password'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder='Password'
                    />

                    <input type='checkbox' />

                    <button type='submit'>Login</button>
                    <Link href='/register' style={{ color: 'blue' }}>
                        Not signed yet? what douche
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
