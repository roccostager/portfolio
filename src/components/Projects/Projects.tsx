import styles from './Projects.module.css';
import substyles from './Project/Project.module.css';
import Project from './Project/Project';
import { IconExternalLink } from '@tabler/icons-react';


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
                    <a href="https://github.com/roccostager/calc" target="_blank"><IconExternalLink size="1em" />Repo</a>
                    <a href="https://roccostager.github.io/calc/" target="_blank" className={substyles.button}><IconExternalLink size="1em" />Demo</a>
                </Project>
                <Project
                    title={"Local To-do"}
                    description={"A task app which uses the LocalStorage Browser API."}
                    image={"/projects/local-todo.png"}
                    skills={["html", "css", "js"]}
                >
                    <a href="https://github.com/roccostager/local-todo" target="_blank"><IconExternalLink size="1em" />Repo</a>
                    <a href="https://roccostager.github.io/local-todo/" target="_blank" className={substyles.button}><IconExternalLink size="1em" />Demo</a>
                </Project>
                <Project
                    title={"DynamicGUI"}
                    description={"A Roblox Development Plugin to apply UI effects quickly."}
                    image={"/projects/dynamic-gui.png"}
                    skills={["luau", "figma"]}
                >
                    <a href="https://create.roblox.com/store/asset/115522117336437/DynamicGUI" target="_blank"><IconExternalLink size="1em" />Plugin</a>
                    <a href="https://devforum.roblox.com/t/dynamicgui-%E2%80%94-tag-based-animated-ui-effects-for-roblox/4670904" target="_blank"><IconExternalLink size="1em" />Forum</a>
                </Project>
                <Project
                    title={"(Bad) Auth"}
                    description={"I made a front- and back-end for auth. You will get hacked if you use it..."}
                    image={"/projects/dynamic-gui.png"}
                    skills={["react", "ts", "zod", "prisma", "express", "node"]}
                >
                    <a href="https://github.com/roccostager/fx-react" target="_blank"><IconExternalLink size="1em" />Frontend</a>
                    <a href="https://github.com/roccostager/bx-node" target="_blank"><IconExternalLink size="1em" />Backend</a>
                </Project>
            </div>
        </div>
    </section>
}


export default Projects