import styles from './Hero.module.css';
import { IconArrowNarrowDownDashed } from '@tabler/icons-react';


function Hero() {
    return <div className={styles.hero}>
        <div className={styles.header}></div>
        <div className={styles.textWrapper}>
            <h1 className={styles.title}>i'm <span>Rocco Stager.</span></h1>
            <h1 className={styles.description}>Game Developer and Coder.</h1>
            <div className={styles.links}>
                <a href="#projects">Projects<IconArrowNarrowDownDashed size="1em" /></a>
            </div>
        </div>
        <div className={styles.separator}>
            <div className={styles.banner}>
                <div className={styles.bannerContent} aria-hidden={true}>
                    <p>Coding.</p>
                    <p>Design.</p>
                    <p>Planning.</p>
                    <p>Coding.</p>
                    <p>Design.</p>
                    <p>Planning.</p>
                    <p>Coding.</p>
                    <p>Design.</p>
                    <p>Planning.</p>
                    <p>Coding.</p>
                    <p>Design.</p>
                    <p>Planning.</p>
                    <p>Coding.</p>
                    <p>Design.</p>
                    <p>Planning.</p>
                    <p>Coding.</p>
                    <p>Design.</p>
                    <p>Planning.</p>
                </div>
                <div className={styles.bannerContent} aria-hidden={true}>
                    <p>Coding.</p>
                    <p>Design.</p>
                    <p>Planning.</p>
                    <p>Coding.</p>
                    <p>Design.</p>
                    <p>Planning.</p>
                    <p>Coding.</p>
                    <p>Design.</p>
                    <p>Planning.</p>
                    <p>Coding.</p>
                    <p>Design.</p>
                    <p>Planning.</p>
                    <p>Coding.</p>
                    <p>Design.</p>
                    <p>Planning.</p>
                    <p>Coding.</p>
                    <p>Design.</p>
                    <p>Planning.</p>
                </div>
            </div>
        </div>
    </div>
}


export default Hero;