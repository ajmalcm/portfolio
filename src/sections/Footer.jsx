import { mySocials } from "../constants"

const Footer = () => {
  return (
    <section className="flex flex-wrap justify-between gap-5 text-sm text-neutral-400 c-space">
    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"/>
    <div className="flex gap-2">
        <p>
            Terms & Conditions
        </p>
        <p>
            |
        </p>
        <p>
        Privacy Policy
        </p>
    </div>
    <div className="flex gap-3">
    {
        mySocials.map((social,index)=>(
            <a key={index} href={social.href} target="_blank">
                <img src={social.icon} className="w-5 h-5" alt={social.name} style={{filter:social.name==="github"?"invert(100%)":"invert(0%)"}}/>
            </a>
        ))
    }
    </div>
    <p>&copy; 2025 Aju. All rights reserved.</p>
    </section>
  )
}

export default Footer