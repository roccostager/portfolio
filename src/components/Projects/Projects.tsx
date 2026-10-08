import styles from './Projects.module.css';
import Project from './Project/Project'


function Projects() {

    return <section id="projects" className={styles.projects}>
        <div className="contentWrapper">
            <h2>My Work.</h2>
            <br />
            <div className={styles.projectContainer}>
                <Project
                    title={"Calc"}
                    description={"I'm only including this one because it looks nice and has sound effects."}
                    image={"/calc.png"}
                >
                </Project>
                <Project
                    title={"Local To-do"}
                    description={"A task app which uses the LocalStorage Browser API."}
                    image={"/local-todo.png"}
                >
                </Project>
                <Project
                    title={"Roblox Game"}
                    description={"You get magic and stuff"}
                    image={"/dood.jpg"}
                >
                </Project>
            </div>
        </div>
    </section>
}


export default Projects