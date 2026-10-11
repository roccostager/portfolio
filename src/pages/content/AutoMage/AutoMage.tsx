import styles from './AutoMage.module.css'
import { IconExternalLink } from '@tabler/icons-react';
import Masonry from 'react-layout-masonry';
import images from './images';
import Applied from '@components/Applied/Applied';


function AutoMage() {
    return <div className={`contentWrapper ${styles.automage}`}>
        <div className={styles.banner}>
            <img src="/content/auto-mage/thumbnail.png" alt="" />
        </div>

        <h2 className={styles.title}>Auto Mage</h2>
        <p className={styles.description}>Auto Mage is my current project. It's a Roblox Simulator Game about magic and hordes of enemies.</p>

        <div className={styles.links}>
            <a href="https://ro.blox.com/Ebh5?af_dp=roblox%3A%2F%2Fnavigation%2Fgame_details%3FgameId%3D10766076305&af_web_dp=https%3A%2F%2Fwww.roblox.com%2Fgames%2F78978221791175" target="_blank" className="button"><IconExternalLink size="1em" />Play on Roblox</a>
        </div>

        {/* <h3>Skills Applied</h3>
        <Applied /> */}

        <h3 className={styles.subtitle}>Collection</h3>
        <p className={styles.subDescription}>Some images showing the development process.</p>
        <div className={styles.collection}>
            <Masonry
                columns={{ 360: 1, 480: 2, 1024: 3 }}
                gap={8} // Gap between items in pixels
            >
                {images.map((image, index) => (
                    <div className={styles.collectionItem} key={index}>
                        <img
                            src={image.url}
                            alt={image.alt || `Gallery item ${index}`}
                            className={styles.collectionImg}
                        />
                    </div>
                ))}
            </Masonry>
        </div>
    </div>
}


export default AutoMage;