import React, { FC } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { Link } from '../Link/Link';
import { useRouter } from 'next/router';

interface HeaderProps {
    classNames?: string;
}

export const Header: FC<HeaderProps> = () => {
    const { asPath } = useRouter();

    return (
        <div className={cn(styles['header'])}>
            <div className={cn(styles['left-side'])}>
                <Image src='../images/icon.svg' alt='Icon' className={cn(styles['logo'])} />
                <div className={cn(styles['links'])}>
                    <Link
                        href='/'
                        className={cn(styles['link'], asPath === '/' && styles['link_selected'])}
                    >
                        Home
                    </Link>
                    <Link
                        href='/tags'
                        className={cn(
                            styles['link'],
                            asPath.includes('/tags') && styles['link_selected']
                        )}
                    >
                        Tags
                    </Link>
                    <Link
                        href='/about'
                        className={cn(
                            styles['link'],
                            asPath.includes('/about') && styles['link_selected']
                        )}
                    >
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
