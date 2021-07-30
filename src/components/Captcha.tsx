import HCaptcha from '@hcaptcha/react-hcaptcha';
import { firebaseAnalytics } from "../analytics"

interface Props{
    prevPage: ()=>void,
    nextPage: ()=>void,
}

const Captcha = ({nextPage}: Props) => {
    return (
        <div>
            <h1>Are you a human?</h1>
            <form>
                <HCaptcha
                    sitekey='d700f172-32de-4e54-a1b2-a3b66342c0c1'
                    onVerify={()=>{firebaseAnalytics.logEvent('capthca_complete'); nextPage()}}
                />
            </form>
        </div>
    )
}

export default Captcha
