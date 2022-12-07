import "./Home.scss"
import {SiGooglemaps} from 'react-icons/si'
import ImageAbout from '../assets/ImagenAbout.jpg'
import ImageReady from  '../assets/imageready.jpg'
import Image1 from  '../assets/imagehome1.jpg'
import Image2 from  '../assets/imagehome2.jpg'
import Image3 from  '../assets/imagehome3.jpg'



import $  from "jquery";
function Home(){
    $(".hover").mouseleave(
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
                Family Owned & Operated Since 2009
                </h3>
                <p>
                New Staffing Branches Located in Moreno Valley & Anaheim
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
                     <div class="location-text"><SiGooglemaps className="LogoMaps"/>Los Angeles,<br/>Orange County &amp;<br/>Inland Empire</div>
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
                                <p>If you are looking for a staffing service that can provide everything you need, look no further. At Fairway Staffing Services you can find comfort knowing that we are dedicated to filling openings with qualified personnel in a swift manner.</p>
                            </div>
                            <div>
                                <p>Whether you are looking for short-term, long-term or direct placement, you can depend on us for all your staffing needs.</p>
                            </div>
                        </div>
                        <div className="ContainerButtonNumber ButtonAbout">
                             <button>ABOUT FAIRWAY STAFFING</button>
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
                     <div className="ContainerAboutImage ContainerReadyImage">
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
                                <p>If you are looking for a staffing service that can provide everything you need, look no further. At Fairway Staffing Services you can find comfort knowing that we are dedicated to filling openings with qualified personnel in a swift manner.</p>
                            </div>
                            <div>
                                <p>Whether you are looking for short-term, long-term or direct placement, you can depend on us for all your staffing needs.</p>
                            </div>
                            <div className="ContainerButtonNumber ButtonAbout">
                             <button>ABOUT FAIRWAY STAFFING</button>
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

        </div>
    )

}

export default Home ;