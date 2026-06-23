'use client'
import { useState } from "react"
import Image from "next/image";
import styles from "./Grids.module.css"
import ContactPopupCopy from "../ContactCopy/ContactPopupCopy"
import longImg from "./long.png"
import img1 from "./Frame 1984079042.png"
import img2 from "./Frame 1984079045 (1).png"
import img3 from "./Frame 1984079046.png"
import img4 from "./Frame 1984079720.png"
import img5 from "./Frame 1984079721 (1).png"
import img6 from "./Group 1597885696.png"
import img7 from "./Rectangle 161125236 (3).png"
import img8 from "./Rectangle 161125244.png"
import img9 from "./Rectangle 161125245 (3).png"
import img10 from "./Rectangle 161125246 (1).png"

export default function Grid() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.mainContainer}>
                        {/* mobile row 1: long.png full width, hidden on desktop */}
                        <Image src={longImg} alt="grid-long" className={styles.mobileLong} />
                        {/* desktop: 8 images (2 rows × 4 cols); mobile: rows 2–5 */}
                        <Image src={img1} alt="grid1" />
                        <Image src={img2} alt="grid2" />
                        <Image src={img3} alt="grid3" />
                        <Image src={img4} alt="grid4" />
                        <Image src={img5} alt="grid5" />
                        <Image src={img6} alt="grid6" />
                        <Image src={img7} alt="grid7" />
                        <Image src={img8} alt="grid8" />
                        {/* mobile only: fills row 6 */}
                        <Image src={img9} alt="grid9" className={styles.mobileOnly} />
                        <Image src={img10} alt="grid10" className={styles.mobileOnly} />
                    </div>
                    <div className={styles.top}>
                        <div className={styles.toptop}>
                            <h1 className={styles.heading}>
                                Ready to start a project ?

                            </h1>
                            <p className={styles.para1}>
                                Book a free consultation to get clarity, direction, and expert advice you can implement right away.
                            </p>
                        </div>
                        <div className={styles.topbottom}>
                            <div className={styles.Quote} onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }}>
                                <div className={styles.txt0}>
                                    Request a Quote
                                </div>
                                <div className={styles.circle}>
                                    <svg className={styles.iconAlign} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" y="2" width="24" height="24" rx="12" fill="black" />
                                        <path d="M10.4913 9.83685L18.4462 9.83685L18.4462 17.7918M17.8938 10.3893L9.82836 18.4547" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <ContactPopupCopy isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}
