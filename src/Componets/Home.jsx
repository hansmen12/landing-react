import "./Home.scss"
import {SiGooglemaps} from 'react-icons/si'
import ImageAbout from '../assets/ImagenAbout.jpg'
import ImageReady from  '../assets/imageready.jpg'
import Image1 from  '../assets/imagehome1.jpg'
import Image2 from  '../assets/imagehome2.jpg'
import Image3 from  '../assets/imagehome3.jpg'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import  {FaWhatsapp} from 'react-icons/fa'
import {FaLocationArrow} from 'react-icons/fa'
import Footer from './Footer'

import $  from "jquery";
function Home(){
    $(".hover").hover(
        function () {
          $(this).removeClass("hover");
        }
    );
    return (
        <div className="HomeContainer" >
            <div className="ContainerBanner">
                <h2>
                Connect With Our Team Via Chat Here
                </h2>
            </div>
            <div className="ContainerBannerText">
                <h2>
                Your Partner In Staffing
                </h2>
                <h3>
                Family Owned & Operated 
                </h3>
                <p>
                New Staffing Branches Located in Fontana
                </p>
                <div className="ContainerButtons">
                    <div className="ContainerButtonNumber ">
                            <button>SEARCH JOBS</button>
                    </div>
                    <div className="ContainerButtonNumber">
                    <button>APPLY NOW</button>
                    </div>
                    <div className="ContainerButtonNumber">
                    <button>EVENTS</button>

                    </div>
                </div>
                <div class="ContainerAdress">
                     <div class="location hero-slider-location w-hidden-small w-clearfix">

                     <div class="location-text"><SiGooglemaps className="LogoMaps"/>Fontana,<br/>CA 92335 &amp;<br/>Valley Boulevard Suite</div>
                    </div>
                </div>
            </div>
            <div className="ContainerAbout">
                <div className="ContainerAboutFixed">
                    <div>
                    <p>STAFFING</p>
                    </div>
                </div>
                <div className="ContainerAboutText">
                    <div className="ContainerAbotTextInfo">
                        <div className="ContainerAboutTextInfoTitle">
                            <h2>About Us</h2>
                        </div>
                        <div className="ContainerAboutTextInfoArrow">
                            
                        </div>
                        <div className="ContainerAboutTextInfoP">
                            <div>
                                <p>R&A Work Staffing LLC started to help bring people together in the work spectrum, that being our clients and employees. Our teams will perform their due diligence for the benefit of all parties and not take for granted the relationship we have established to develop long term partnerships. R&A Work Staffing is capable of servicing the San Bernardino, Riverside counties as well as the Inland Empire Regions.</p>
                            </div>
                            <div>
                                <p>Whether you are looking for short-term, long-term or direct placement, you can depend on us for all your staffing needs.</p>
                            </div>
                        </div>
                        <div className="ContainerButtonNumber ButtonAbout">
                             <button>ABOUT FAIRWAY R&A</button>
                         </div>
                    </div>
                    <div className="ContainerAboutImage">
                    <figure class="snip1325"><img src={ImageAbout} alt="ls-sample6"/></figure>
                    </div>
                </div>
            </div>
            <div className="ContainerCertificate">
                <div className="ContainerCertificateText">
                    <p>OSHA-10</p>
                </div>
                <div className="ContainerCertificatePtn">

                </div>
                <div className="ContainerCertificateText">
                    <p>OSHA-30</p>
                </div>
                <div className="ContainerCertificatePtn">
                    
                </div>
                <div className="ContainerCertificateText">
                    <p>Forklift Operation</p>
                </div>
                <div className="ContainerCertificatePtn">
                    
                </div>
                <div className="ContainerCertificateText">
                    <p>First Aid</p>
                </div>
                <div className="ContainerCertificatePtn">
                    
                </div>
                <div className="ContainerCertificateText">
                    <p>CPR Certified</p>
                </div>
               
            </div>
            <div className="ContainerAbout ContainerReady">
                <div className="ContainerReadyFixed">
                    <div>
                    <p>EMPLOYMENT</p>
                    </div>
                </div>
                <div className="ContainerAboutText ContainerReadyText">
                     <div className="ContainerAboutImage ContainerReadyImage image2">
                    <figure class="snip1325"><img src={ImageReady} alt="ls-sample6"/></figure>
                    </div>
                    <div className="ContainerAbotTextInfo">
                        <div className="ContainerAboutTextInfoTitle">
                            <h2>Ready. Willing. Motivated.</h2>
                        </div>
                        <div className="ContainerAboutTextInfoArrow">
                            
                        </div>
                        <div className="ContainerAboutTextInfoP ContainerReadyTextInfoP">
                            <div>
                                <p>We provide opportunitiees in various positions and industries.R&A Work Staffing, LCC is capable of providing quality opportunities to our employees and our clients to develop strong relationships</p>
                            </div>
                            <div>
                                <p>Whether you are looking for short-term, long-term or direct placement, you can depend on us for all your staffing needs.</p>
                            </div>
                            <div className="ContainerButtonNumber ButtonAbout">
                             <button>ABOUT FAIRWAY R&A</button>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className="ContainerCertificateDiv">
            <div className="ContainerCertificate ContainerCertificateTwo">
                <div className="ContainerCertificateText">
                    <p>AED</p>
                </div>
                <div className="ContainerCertificatePtn">

                </div>
                <div className="ContainerCertificateText">
                    <p>BBP (Bloodbourne Pathogens)</p>
                </div>
                <div className="ContainerCertificatePtn">
                    
                </div>
                <div className="ContainerCertificateText">
                    <p>OSHA-General Industry Certified</p>
                </div>
                
               
            </div>
            </div>
            <div className="ContainerJobImage">
                <figure class="snip1477">
                <img src={Image1} alt="sample38" />
                <div class="title">
                    <div>
                    <h2>Penny</h2>
                    <h4>Tool</h4>
                    </div>
                </div>
                <figcaption>
                    <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
                </figcaption>
                </figure>
                <figure class="snip1477 hover"><img src={Image2} alt="sample91" />
                <div class="title">
                    <div>
                    <h2>Ingredia</h2>
                    <h4>Nutrisha</h4>
                    </div>
                </div>
                <figcaption>
                    <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
                </figcaption>
                </figure>
                <figure class="snip1477"><img src={Image3} alt="sample35" />
                <div class="title">
                    <div>
                    <h2>Hans</h2>
                    <h4>Down</h4>
                    </div>
                </div>
                <figcaption>
                    <p>The only skills I have the patience to learn are those that have no real application in life. </p>
                </figcaption>
                </figure>
            </div>
            <div className="ContainerLocale">
                <div className="ContainerLocaleTilte">
                    <div className="ContainerLocaleTitleText">
                        <h2>Staffing Los Angeles: Find Nearest Location</h2>
                    </div>
                    <div className="ContainnerLocaleP">
                        <p>
                        Committed to providing excellent service in areas such as Bell, Santa Ana, Huntington Park, Sacramento, Ontario, and more. To view the nearest location, enter your zip code or city below, or view our locations list <span>here</span>                         </p>
                    </div>
                </div>
                <div className="ContainerLocaleMap">
                    <div className="ContainerLocaleMapFind">
                        <div className="ContainerLocaleMapFindText">
                            <h2>FIND LOCATION NEAR:</h2>
                        </div>
                        <div className="ContainerButtonNumber ButtonAbout">
                             <button><FaLocationArrow className="LocationArrow"/>My Location</button>
                        </div>
                        <div className="ContainerLocaleMapFindInput">
                            <input/>
                        </div>
                    </div>
                    <div className="ContainerLocaleBell">
                        <div className="ContainerLocaleContact">
                            <div className="ContainerContactP">
                                <p>Contact</p>
                                <div className="ContainerButtonNumber ContacButton">
                                <a style={{textDecoration:'none'}} target="blank" href='https://api.whatsapp.com/send?phone=19098278183&text=Conecta%20Con%20Nosotros'>
                                    <button>+1 (909)827-8183</button>
                                </a>
                                </div>
                            </div>
                            <div className="ContainerContactReds ContainerContactP">
                                <p>Redes Sociales</p>
                                <div>
                                <div className="ContainerContactRed">
                                <a style={{textDecoration:'none'}} target="blank" href='https://api.whatsapp.com/send?phone=19098278183&text=Conecta%20Con%20Nosotros'>
                                <FaWhatsapp  className="wathsapp"/>

                                 </a>
                                </div>
                                <div className="ContainerContactRed">
                                <a style={{textDecoration:'none'}} target="blank" href='https://www.instagram.com/raworkstaffing/?hl=en'>
                                <FaInstagram className="instagram"/>
                                    
                                 </a>
                                </div>
                                <div className="ContainerContactRed">
                                <a style={{textDecoration:'none'}} target="blank" href='https://m.facebook.com/raworkstaffing?_rdr'>
                                    <FaFacebookF className="facebook"/>

                                 </a>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className="ContainerContactMap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.954149581044!2d-117.4532202!3d34.0706896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c34ca723ba416b%3A0x3d54288748fdb921!2s16120%20Valley%20Blvd%20%236b%2C%20Fontana%2C%20CA%2092335%2C%20EE.%20UU.!5e0!3m2!1ses!2spe!4v1670450816183!5m2!1ses!2spe" width="600" height="450"  />
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer/>

        </div>
    )

}

export default Home ;