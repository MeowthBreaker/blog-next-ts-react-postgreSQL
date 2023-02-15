import React, { FC } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { Link } from '../Link/Link';

interface HeaderProps {
    classNames?: string;
}

export const Header: FC<HeaderProps> = () => {
    return (
        <div className={cn(styles['header'])}>
            <div className={cn(styles['left-side'])}>
                <Image src='../images/icon.svg' alt='Icon' className={cn(styles['logo'])} />
                <div className={cn(styles['links'])}>
                    <Link href='/' className={cn(styles['link'])}>
                        Home
                    </Link>
                    <Link href='/tags' className={cn(styles['link'])}>
                        Tags
                    </Link>
                    <Link href='/about' className={cn(styles['link'])}>
                        About
                    </Link>
                </div>
            </div>
            <div className={cn(styles['right-side'])}>
                <Image src='../images/search.svg' alt='Search' className={cn(styles['search'])} />
                <Button size='l'>
                    <Link href='/login'>Login</Link>
                </Button>
            </div>
        </div>
    );
};
