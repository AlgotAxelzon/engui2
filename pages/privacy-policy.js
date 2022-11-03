import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Article.module.css'
import CookieAccept from '../components/CookieAccept'

const privacypolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy Engineering Guidance</title>
                <link rel="canonical" href="https://www.engineeringguidance.com/privacy-policy" />
            </Head>
            <Header />
            <div className={styles.article}>
                <h1>Our Privacy Policy</h1>
                <p>This site makes use of Google Analytics to analyze the performance of the website, both technically and content-wise. This service collects data from visitors such as your location, browser, device and other such details. No personal data is captured whatsoever. For more information, refer to the Google Analytics help pages.</p>
                <h1>Our Cookie Policy</h1>
                <p>Most web browsers are initially set up to accept cookies. You can reset your web browser to refuse all cookies or to indicate when a cookie is being sent. Please note, however, that certain features of the site might not function if you delete or disable cookies. The site's cookies do not and cannot infiltrate a user's hard drive to collect any information stored on the hard drive.</p>
            </div>
            <CookieAccept />
        </>
    )
}

export default privacypolicy