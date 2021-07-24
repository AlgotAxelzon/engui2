import Link from 'next/link'
import CookieConsent, { Cookies } from "react-cookie-consent";

const CookieAccept = () => {
    return (
        <CookieConsent>
          This website uses cookies to enhance the user experience. 
          Read more <Link href="/privacy-policy">here</Link>.
        </CookieConsent>
    )
}

export default CookieAccept