import Footer from "./Footer";
import './About.scss'
import emailjs from 'emailjs-com'
import {useRef} from 'react'
function Employer () {
    const form = useRef()
const sendEmail = e => {
    e.preventDefault()
    console.log(e.target)
    emailjs
      .sendForm('service_nd82kfq', 'template_uj335xo', e.target, '2acSMxp1-9FSQAIJB')
      .then(
        result => {
          alert('Correo enviado correctamente')
        },
        error => {
          alert(`Ocurrio un error, intente nuevamente - ${error}`)
        }
      )
  }
    return (
        <div className="ContainerAbout">
            <div className="ContainerAboutBanner">
                <div className="ContainerAboutUs">
                    <p>
                        Employer
                    </p>
                </div>
            </div>
            <div className="ContainerAboutTextContent">
                <div className="ContainerAboutTextBanner">
                    <p>
                    Find Qualified Staff For Your Company
                    </p>
                </div>
                <div className="ContainerAboutTextP">
                    <p>
                    At R&A Work Staffing LLC we help you find the perfect candidate for your accounting and finance staffing needs right NOW. We know the local job market like the backs of our hands and have a distinct eye for top notch professionals working within the market.

                    Our staffing and recruiting professionals know exactly what to look for in your next great candidate. </p>
                </div>
                <div className="ContainerAboutTextFile">
                    <div className="ContainerAboutTextFileContent">
                        <div className="Cona">

                        </div>
                    </div>
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
            <div className="ContainerAboutImage">

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
                <div>
                <form onSubmit = {sendEmail}>
                    <label>Nombre y Apellidos</label>
                    <input type="text" name="from_name" />
                    <label>Correo Electrónico</label>
                    <input type="text" name="reply_to" />
                    <label>Telefono</label>
                    <input type="text" name="phone" />
                    <label>Asunto</label>
                    <textarea name="message"/>
                    <button className="btn btn__primary" type="submit">Enviar Mensaje</button>
                </form>
                </div>
            </div>
            <Footer/>
        </div>


    )
}
export default Employer ;