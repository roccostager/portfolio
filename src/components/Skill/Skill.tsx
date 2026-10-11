import styles from './Skill.module.css'

import SKILLS_CONFIG from './skillsConfig';
import type { SkillName } from './skillsConfig';



type Props = { skill: SkillName }
function Skill({ skill }: Props) {
    return (
        < li className={styles.skill} >
            <img src={SKILLS_CONFIG[skill].image} alt="" />
            <p>{SKILLS_CONFIG[skill].name}</p>
        </li>
    )

}


export default Skill;