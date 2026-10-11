const rootDir = '/content/auto-mage'


interface Image {
    url: string,
    alt: string,
    title?: string,
    description?: string
}
const images: Image[] = [
    { url: `${rootDir}/icon.png`, alt: '' },
    { url: `${rootDir}/interface-powers.png`, alt: '' },
    { url: `${rootDir}/spells.png`, alt: '' },
    { url: `${rootDir}/map-g_forest.png`, alt: '' },
    { url: `${rootDir}/enemies.png`, alt: '' },
    { url: `${rootDir}/icon-iterations.png`, alt: '' },
    { url: `${rootDir}/gameplay2.png`, alt: '' },
    { url: `${rootDir}/toxic-wastes.png`, alt: '' },
    { url: `${rootDir}/interface-upg.png`, alt: '' },
    { url: `${rootDir}/sandy-shores.png`, alt: '' },
    { url: `${rootDir}/gameplay.png`, alt: '' },
    { url: `${rootDir}/spell-bb.png`, alt: '' },
    { url: `${rootDir}/effect-upg.png`, alt: '' },
    { url: `${rootDir}/enchanted-forest.png`, alt: '' },
    { url: `${rootDir}/testing.png`, alt: '' },
    { url: `${rootDir}/early-dev.png`, alt: '' },
];


export default images;