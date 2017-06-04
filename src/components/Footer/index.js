import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    <div className="image-reel">
    <div className="wide">
        <a className="align-top">
           <img src="/assets/shop/1.jpg" alt="Frucht-Smothie Bar"/>
        </a>
        <a className="align-center">
           <img src="/assets/shop/2.jpg" alt="Vapo-Raum"/>
        </a>
        <a className="align-top">
           <img src="/assets/shop/4.jpg" alt="Vulcano-Vaporizer"/>
        </a>
    </div>
</div>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    {/*<p>
      <a
        href={ process.env.PHENOMIC_HOMEPAGE }
        className={ styles.phenomicReference }
      >
        { "Website generated with " }
        <span className={ styles.phenomicReferenceName }>
          {  `<${ process.env.PHENOMIC_NAME} />` }
        </span>
      </a>
    </p>*/}
  </footer>
)

export default Footer
