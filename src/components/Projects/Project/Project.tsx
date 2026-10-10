import SKILLS_CONFIG from './skillsConfig';
import type { Skill } from './skillsConfig';

import styles from './Project.module.css';
import type React from 'react';



type Props = { title: string, description: string, image: string, skills: Skill[], children: React.ReactNode };
function Project({ title, description, image, skills, children }: Props) {
    return <div className={styles.project}>
        <div className={styles.imageContainer}>
            <img src={image} alt="" className={styles.image} />
        </div>
        <div className={styles.textWrapper}>
            <h3>{title}</h3>
            <p>{description}</p>

            <div className={styles.skillsWrapper}>
                {skills.map(skill =>
                    < li className={styles.skill} >
                        <img src={SKILLS_CONFIG[skill].image} alt="" />
                        <p>{SKILLS_CONFIG[skill].name}</p>
                    </li>
                )}
            </div>

            <div className={styles.linksWrapper}>
                {children}
            </div>
        </div>
    </div >
}


export default Project;