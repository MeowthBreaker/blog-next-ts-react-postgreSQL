import react, { FC } from 'react';
import cn from 'classnames';
import styles from './TextBox.module.css';

interface TextBoxProps {
    className?: string;
    title: string;
    children: string;
    color: 'white' | 'black';
    size?: 's' | 'm' | 'l';
}

export const TextBox: FC<TextBoxProps> = ({ title, children, color, size = 'm', className }) => {
    return (
        <div
            className={cn(
                styles['text-box'],
                styles[`text_${color}`],
                styles[`size_${size}`],
                className
            )}
        >
            <div className={cn(styles.title)}>{title}</div>
            <div className={cn(styles.description)}>{children}</div>
        </div>
    );
};
