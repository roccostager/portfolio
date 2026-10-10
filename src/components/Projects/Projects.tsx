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
                    image={"/projects/calc.png"}
                    skills={["html", "css", "js"]}
                >
                </Project>
                <Project
                    title={"Local To-do"}
                    description={"A task app which uses the LocalStorage Browser API."}
                    image={"/projects/local-todo.png"}
                    skills={["html", "css", "js"]}
                >
                </Project>
                <Project
                    title={"DynamicGUI"}
                    description={"A Roblox Development Plugin to apply UI effects quickly."}
                    image={"/projects/dynamic-gui.png"}
                    skills={["luau", "figma"]}
                >
                </Project>
                <Project
                    title={"(Bad) Auth"}
                    description={"I made a front- and back-end for auth. You will get hacked if you use it..."}
                    image={"/projects/dynamic-gui.png"}
                    skills={["react", "ts", "zod", "prisma", "express"]}
                >
                </Project>
            </div>
        </div>
    </section>
}


export default Projects