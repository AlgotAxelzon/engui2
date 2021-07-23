import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Article.module.css'

const contact = () => {
    return (
        <>
            <Head>
                <title>Contact Engineering Guidance</title>
                <link rel="canonical" href="https://www.engineeringguidance.com/contact" />
            </Head>
            <Header />
            <div className={styles.article}>
                <h1>Contact Us</h1>
                <p>Got any suggestions on engineering problems we should tackle next? Feel free to contact us at: contact@engineeringguidance.com</p>
                <p>Want to use our images? No need to ask for permission! Currently you are free to use them if you leave a link to the article. The link has to be very visible!</p>
            </div>
        </>
    )
}

export default contact