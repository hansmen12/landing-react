import Footer from "./Footer";
import './About.scss'
import {useRef} from 'react'
function About () {
    const form = useRef()

    return (
        <div className="ContainerAbout">
            <div className="ContainerAboutBanner">
                <div className="ContainerAboutUs">
                    <p>
                        About Us
                    </p>
                </div>
            </div>
            <div className="ContainerAboutTextContent">
                <div className="ContainerAboutTextBanner">
                    <p>
                         About R&A
                    </p>
                </div>
                <div className="ContainerAboutTextP">
                    <p>
                         If you are looking for a staffing service that can provide everything you need, look no further. At R&A Work Staffing LLC you can find comfort knowing that we are dedicated to filling openings with qualified personnel in a swift manner.
                    </p>
                </div>
                <div className="ContainerAboutTextBanner">
                    <p>
                    Short-Term & Long-Term Placement
                    </p>
                </div>
                <div className="ContainerAboutTextP">
                    <p>
                    Whether you are looking for short-term, long-term or direct placement, you can depend on us for all your staffing needs. <br/>

                    In the current environment, employers that have flexibility in adjusting labor requirements to meet production and service demands have a competitive advantage over those with less flexible resources.     </p>
                </div>
            </div>
            <div className="ContainerAboutImages">

            </div>
            <div className="ContainerAboutP">
                <p>
                We at R&A Work Staffing LLC understand that immediate response and flexibility is important. That’s why we maintain a well-stocked database of resumes, which enable us to quickly match the right person to fit and fill your needs. Let us help you with all your staffing needs today.
                </p>
            </div>
            <div className="ContainerAbutInfo">
                <div className="ContainerAboutInfoContent">
                     <div className="ContainerAboutInfoBanner">
                      <p>
                        Headquarters
                      </p>
                     </div>
                     <div className="ContainerAboutInfoBannerP">
                        <p>
                        16120 Valley Boulevard Suite 6B Fontana, CA 92335 USA
                        </p>
                    </div>
                </div>
                <div className="ContainerAboutInfoContent">
                     <div className="ContainerAboutInfoBanner">
                      <p>
                      Call Us
                      </p>
                     </div>
                     <div className="ContainerAboutInfoBannerP">
                        <p>
                        +1 (909)827-8183
                        </p>
                      </div>
                </div>
                <div className="ContainerAboutInfoContent">
                     <div className="ContainerAboutInfoBanner">
                      <p>
                      Email
                      </p>
                     </div>
                     <div className="ContainerAboutInfoBannerP">
                        <p>
                        info@r&astaffing.com
                           </p>
                      </div>
                </div>
                <div className="ContainerAboutInfoContent">
                     <div className="ContainerAboutInfoBanner">
                      <p>
                      Hours
                      </p>
                     </div>
                     <div className="ContainerAboutInfoBannerP">
                        <p>
                        Mon:	8:00 AM - 5:00 PM<br/>
                        Tue:	8:00 AM - 5:00 PM<br/>
                        Wed:	8:00 AM - 5:00 PM<br/>
                        Thu:	8:00 AM - 5:00 PM<br/>
                        Fri:	8:00 AM - 5:00 PM<br/>
                        Sat:	Closed<br/>
                        Sun:	Closed           
                        </p>
                      </div>
                </div>
                
            </div>
            <Footer/>
        </div>


    )
}
export default About ;