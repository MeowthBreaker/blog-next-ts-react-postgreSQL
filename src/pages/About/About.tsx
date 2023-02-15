import react, { FC } from 'react';
import cn from 'classnames';
import styles from './About.module.css';
import Image from 'next/image';
import { TextBox } from '@/components/TextBox/TextBox';

import angel from '../../images/angel.png';
import dude from '../../images/dude.png';
import cat from '../../images/cat.png';
import childDude from '../../images/child-dude.png';
import maxPayne from '../../images/max-payne.png';

interface AboutProps {}

const About: FC<AboutProps> = () => {
    return (
        <div className={cn(styles['about'])}>
            <div className={cn(styles['intro'])}>
                <Image
                    src='../../images/icon.svg'
                    alt='Icon'
                    className={cn(styles['intro-icon'])}
                />
                <div className={cn(styles['intro-description'])}>
                    A publishing company that focuses
                    <br />
                    on the essentials.
                </div>
            </div>
            <div className={cn(styles['story-board'])}>
                <div className={cn(styles['story-1'])}>
                    <TextBox
                        title='We tell stories that drives the heart.'
                        color='white'
                        size='s'
                        className={cn(styles['story-1-text'])}
                    >
                        Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui
                        dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim
                        pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore
                        excepteur tempor dolor consectetur ut id.
                    </TextBox>
                    <Image src={angel} alt='angel.png' className={cn(styles['story-1-img'])} />
                </div>
                <div className={cn(styles['story-2'])}>
                    <Image src={dude} alt='dude.png' className={cn(styles['story-2-img'])} />
                    <TextBox
                        title='We tell the news that makes the most impact.'
                        color='white'
                        className='story-2-text'
                        size='m'
                    >
                        Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui
                        dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim
                        pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore
                        excepteur tempor dolor consectetur ut id.
                    </TextBox>
                </div>
                <div className={cn(styles['story-3'])}>
                    <TextBox
                        title='We tell the news that makes the most impact.'
                        color='white'
                        size='l'
                        className={styles['story-3-text']}
                    >
                        Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui
                        dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim
                        pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore
                        excepteur tempor dolor consectetur ut id.
                    </TextBox>
                    <div className={cn(styles.carousel)}>
                        <Image src={cat} alt='cat' />
                        <Image src={childDude} alt='child-dude' />
                        <Image src={maxPayne} alt='max-payne' />
                    </div>
                </div>
                <div className={cn(styles.line, styles['line-top'])} />
                <div className={cn(styles.line, styles['line-bottom'])} />
            </div>
            <div className={cn(styles.outro)}>
                <div className={cn(styles['outro-title'])}>
                    <p>Because we are you.</p>
                    <p>Humans.</p>
                </div>
                <div className={cn(styles['outro-description'])}>
                    <p>Laboris consectetur sunt nulla eiusmod voluptate</p>
                    <p>eiusmod dolor nisi qui dolor cillum fugiat ad.</p>
                </div>
            </div>
            <div className={cn(styles['footer'])}>
                <div className={cn(styles['footer-title'])}>want to connect?</div>
                <div className={cn(styles['footer-description'])}>
                    <p>Laboris consectetur sunt nulla eiusmod</p>
                    <p>voluptate eiusmod dolor nisi qui..</p>
                </div>
                <div className={cn(styles['footer-icons'])}>
                    <Image src='../../images/twitter.svg' alt='twitter' />
                    <Image src='../../images/instagram.svg' alt='instagram' />
                    <Image src='../../images/linkedin.svg' alt='linkedin' />
                </div>
            </div>
        </div>
    );
};

export default About;
