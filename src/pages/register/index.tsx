import React, { FC, useState } from 'react';
import styles from './index.module.css';
import cn from 'classnames';
import { useFormik } from 'formik';
import { Header } from '@/components/Header/Header';
import { Button } from '@/components/Button/Button';
import { useGetRegisterMutation } from '@/api/registrationMutation';

import { redirect } from 'next/navigation';

interface RegistrationProps {
    className?: string;
}

const RegistrationPage: FC<RegistrationProps> = () => {
    const [updateRegister, result] = useGetRegisterMutation();

    const [queryResult, setQueryResult] = useState<string | null>(null);

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            name: '',
            surname: '',
            email: '',
            avatar: '',
        },
        onSubmit: async (values) => {
            if (!values.login.length || !values.email.length || !values.password.length) return;

            const meow = await updateRegister(values);

            if ('error' in meow) {
                setQueryResult('something went wrong');
            } else redirect('/login');
        },
    });

    return (
        <div className={cn(styles['registration-page'])}>
            <Header />
            <div className={cn(styles.container)}>
                <div className={cn(styles.title)}>
                    <p className={cn(styles.header)}>Welcome back!</p>
                    <p className={cn(styles.description)}>Sign in to get the most out of nuntium</p>
                </div>
                <form className={cn(styles['login-container'])} onSubmit={formik.handleSubmit}>
                    <p>login</p>
                    <input
                        id='login'
                        name='login'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.login}
                        placeholder='Login'
                    />

                    <p>password</p>
                    <input
                        id='password'
                        name='password'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder='Password'
                    />

                    <p>name</p>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder='name'
                    />

                    <p>surname</p>
                    <input
                        id='surname'
                        name='surname'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.surname}
                        placeholder='surname'
                    />

                    <p>email</p>
                    <input
                        id='email'
                        name='email'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder='email'
                    />

                    <p>avatar</p>
                    <input
                        id='avatar'
                        name='avatar'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.avatar}
                        placeholder='avatar'
                    />
                    {queryResult && <p>Something went wrong, try again</p>}
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
