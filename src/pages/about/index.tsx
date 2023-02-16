import react, { FC } from 'react';
import cn from 'classnames';
import styles from './index.module.css';
import { Header } from '@/components/Header/Header';
import { About } from '@/components/About/About';

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
    return (
        <div className={cn(styles['about-page'])}>
            <Header />
            <About />
        </div>
    );
};

export default AboutPage;
