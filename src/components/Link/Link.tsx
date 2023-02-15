import react, { FC, ReactNode } from 'react';
import NextLink from 'next/link';

import styles from './Link.module.css';
import cn from 'classnames';

interface LinkProps {
    href: string;
    children: string | ReactNode;
    className?: string;
}

export const Link: FC<LinkProps> = ({ href, children, className }) => (
    <NextLink href={href} className={cn(styles.link, className)}>
        {children}
    </NextLink>
);
