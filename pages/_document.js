import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-CNMFGB1MRC"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-CNMFGB1MRC', {
                            page_path: window.location.pathname,
                            });
                        `,
                        }}
                    />
<<<<<<< HEAD
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7796283578510574"
                        crossorigin="anonymous"></script>
=======
                    <meta name="propeller" content="510b0baedc5377871bd16b917d9ce48f" />
>>>>>>> 5c6484a9627f9d05b9d4064d90a9a338972b81dd
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument