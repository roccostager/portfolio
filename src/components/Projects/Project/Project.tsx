import styles from './Project.module.css';


type Props = { title: string, description: string, image: string };
function Project({ title, description, image }: Props) {
    return <div className={styles.project}>
        <div className={styles.imageContainer}>
            <img src={image} alt="" className={styles.image} />
        </div>
        <div className={styles.textWrapper}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
}


export default Project;