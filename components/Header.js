import React, { useContext, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })

  if (burgerOpen) {
    var rolldown = {
      display: 'flex',
    }
  } else {
    var rolldown = {
      display: 'none',
    }
  }

  const openBurger = (e) => {
    setBurgerOpen(!burgerOpen)
  }

  return (
    <div>
      <nav className={styles.header}>
        <h1 className={styles.home}>
          <Link href="/" title="Engineering Guidance">
            ENGUI.
          </Link>
        </h1>
        <h4>
          <Link href="/contact" title="Contact">
            Contact
          </Link>
        </h4>
        <h4>
          <Link href="/privacy-policy" title="Privacy Policy">
            Privacy Policy
          </Link>
        </h4>
        <div className={styles.burgerIcon} onClick={openBurger}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
      </nav>
      {isTabletOrMobile && (
        <nav style={rolldown} className={styles.rolldown}>
          <h4>
            <Link href="/contact" title="Contact">
              Contact
            </Link>
          </h4>
          <h4>
            <Link href="/privacy-policy" title="Privacy Policy">
              Privacy Policy
            </Link>
          </h4>
        </nav>
      )}
    </div>
  )
}

export default Header
