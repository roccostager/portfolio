
// Type Definitions
export type Skill = keyof typeof SKILLS_CONFIG;
export interface SkillData {
    name: string,
    image: string,
};


// SKILLS CONFIG
const SKILLS_CONFIG = {
    html: {
        name: 'HTML',
        image: '/skills/html5.png'
    },
    css: {
        name: 'CSS',
        image: '/skills/css3.png'
    },
    js: {
        name: 'JavaScript',
        image: '/skills/js.png'
    },
    ts: {
        name: 'TypeScript',
        image: '/skills/typescript.png'
    },
    react: {
        name: 'React',
        image: '/skills/react.png'
    },
    node: {
        name: 'Node',
        image: '/skills/nodejs.png'
    },
    python: {
        name: 'Python',
        image: '/skills/python.png'
    },

    express: {
        name: 'Express JS',
        image: '/skills/expressjs.png'
    },
    prisma: {
        name: 'Prisma',
        image: '/skills/prisma.png'
    },
    zod: {
        name: 'Zod',
        image: '/skills/zod.png'
    },

    luau: {
        name: 'Luau',
        image: '/skills/luau.png'
    },
    figma: {
        name: 'Figma',
        image: '/skills/figma.png'
    },
} satisfies Record<string, SkillData>;


export default SKILLS_CONFIG;