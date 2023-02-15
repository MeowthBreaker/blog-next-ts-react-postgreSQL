import react, { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

import cn from 'classnames';

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    size?: 's' | 'm' | 'l' | 'xl';
    maxSized?: boolean;
    rounded?: boolean;
    borderless?: boolean;
}

export const Button: FC<ButtonProps> = ({
    className = '',
    size = 'm',
    maxSized = false,
    rounded = false,
    borderless = false,
    ...props
}) => {
    return (
        <div
            {...props}
            className={cn(
                styles['button'],
                className,
                styles[`button_size_${size}`],
                maxSized && styles['button_max-sized'],
                rounded && styles['button_rounded'],
                borderless && styles['button_borderless']
            )}
        />
    );
};
