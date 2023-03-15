import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Header } from '@/components/Header/Header';
import { GetServerSidePropsContext } from 'next';
import { userFromRequest } from '@/web/tokens';

export interface User {
    user_name: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
    avatar_url: string;
    user_id: number;
    media: string[];
}

interface Props {
    user?: User;
}

export default function Home({ user }: Props) {
    return (
        <>
            <Head>
                <title>Main Blog Page</title>
                <meta name='description' content='Pet-project for next-ssr and ts-react' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <Header user={user} />
            </main>
        </>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const user = await userFromRequest(context.req);

    if (!user) return { props: {} };

    return {
        props: user,
    };
}
