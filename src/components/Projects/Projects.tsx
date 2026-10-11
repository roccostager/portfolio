import styles from './Projects.module.css';
import Project from './Project/Project';
import { IconExternalLink } from '@tabler/icons-react';
import { Link } from 'react-router';


function Projects() {

    return <section id="projects" className={styles.projects}>
        <div className="contentWrapper">
            <h2>My Work.</h2>
            <br />
            <div className={styles.projectContainer}>
                <Project
                    title={"Auto Mage"}
                    description={"A Roblox Game I am currently working on."}
                    image={"/projects/auto-mage.png"}
                    skills={["luau", "figma"]}
                >
                    <Link to="auto" className="stretchedLink">Read</Link>
                    <a href="https://ro.blox.com/Ebh5?af_dp=roblox%3A%2F%2Fnavigation%2Fgame_details%3FgameId%3D10766076305&af_web_dp=https%3A%2F%2Fwww.roblox.com%2Fgames%2F78978221791175" target="_blank" className="button"><IconExternalLink size="1em" />Test</a>
                </Project>
                <Project
                    title={"Calc"}
                    description={"I'm only including this one because it looks nice and has sound effects."}
                    image={"/projects/calc.png"}
                    skills={["html", "css", "js"]}
                >
                    <a href="https://github.com/roccostager/calc" target="_blank"><IconExternalLink size="1em" />Repo</a>
                    <a href="https://roccostager.github.io/calc/" target="_blank" className="button"><IconExternalLink size="1em" />Demo</a>
                </Project>
                <Project
                    title={"Local To-do"}
                    description={"A task app which uses the LocalStorage Browser API."}
                    image={"/projects/local-todo.png"}
                    skills={["html", "css", "js"]}
                >
                    <a href="https://github.com/roccostager/local-todo" target="_blank"><IconExternalLink size="1em" />Repo</a>
                    <a href="https://roccostager.github.io/local-todo/" target="_blank" className="button"><IconExternalLink size="1em" />Demo</a>
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
                    title={"Question bank"}
                    description={"Questions were spread over multiple papers so I extracted them and put them on a website."}
                    image={"/projects/comm1240.png"}
                    skills={["react", "ts", "python"]}
                >
                    <a href="https://github.com/roccostager/cb1-exam-extractor" target="_blank">Extractor</a>
                    <a href="https://comm1240.roccostager.com/" target="_blank" className="button"><IconExternalLink size="1em" />Demo</a>
                </Project>
                <Project
                    title={"(Bad) Auth"}
                    description={"I made a front- and back-end for auth. from (sorta) scratch. You will get hacked if you use it..."}
                    image={"/projects/bad-auth.png"}
                    skills={["react", "ts", "zod", "prisma", "express", "node"]}
                >
                    <a href="https://github.com/roccostager/fx-react" target="_blank"><IconExternalLink size="1em" />Frontend</a>
                    <a href="https://github.com/roccostager/bx-node" target="_blank"><IconExternalLink size="1em" />Backend</a>
                </Project>
            </div>
        </div>
    </section >
}


export default Projects