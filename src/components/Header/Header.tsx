import styles from './Header.module.css';
import { Link } from 'react-router';

function Header() {
    return <div className={styles.header}>
        <div className={styles.container}>
            <div className={`${styles.left} ${styles.pointerLinks}`}>
                <Link to="/#projects">Projects</Link>
            </div>
            <div className={styles.mid}>
                <p className={styles.name}>Rocco Stager</p>
            </div>
            <div className={`${styles.right} ${styles.social}`}>
                <a href="https://github.com/roccostager" target="_blank">
                    <img src="/socials/github.png" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/roccostager/" target="_blank">
                    <img src="/socials/linkedin-bw.png" alt="" />
                </a>
            </div>
        </div>
    </div>
}


export default Header;