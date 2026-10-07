import styles from './Hero.module.css';


function Hero() {
    return <div className={styles.hero}>
        <div className={styles.textWrapper}>
            <h1 className={styles.title}>i'm Rocco Stager.</h1>
            <p className={styles.description}>I code stuff lol.</p>
            <div className={styles.links}>
                <a href="#projects">Projects</a>
            </div>
        </div>
    </div>
}


export default Hero;