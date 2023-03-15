import React, { FC, useState } from 'react';
import styles from './index.module.css';
import cn from 'classnames';
import { useFormik } from 'formik';
import { Header } from '@/components/Header/Header';

import { useGetLoginMutation } from '@/api/loginMutation';
import Link from 'next/link';

import { userFromRequest } from '@/web/tokens';

interface LoginPageProps {
    className?: string;
}

const LoginPage: FC<LoginPageProps> = ({ className }) => {
    const [updateLogin, result] = useGetLoginMutation();

    const [queryResult, setQueryResult] = useState<boolean | null>(null);

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            remember: false,
        },
        onSubmit: async (values) => {
            try {
                if (!values.login.length || !values.password.length) return;

                const meow = await updateLogin(values);

                if ('error' in meow) {
                    setQueryResult(false);
                } else setQueryResult(true);
            } catch (e) {
                console.log(e);
            }
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

                    {queryResult === null ? null : queryResult === false ? (
                        <p>Error!</p>
                    ) : (
                        <Link href={'/'} style={{ color: 'blue' }}>
                            All done! Return to main page
                        </Link>
                    )}

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
