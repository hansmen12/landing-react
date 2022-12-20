import Footer from "./Footer";
import './About.scss'
import './Employer.scss'
import { useRef } from 'react';

const JobSeeker = () => {
        const form = useRef()
// const sendEmail = e => {
//     e.preventDefault()
//     console.log(e.target)
//     emailjs
//       .sendForm('service_nd82kfq', 'template_uj335xo', e.target, '2acSMxp1-9FSQAIJB')
//       .then(
//         result => {
//           alert('Correo enviado correctamente')
//         },
//         error => {
//           alert(`Ocurrio un error, intente nuevamente - ${error}`)
//         }
//       )
//   }
    return (
        <div>
            <div className="ContainerAbout">
                <div className="ContainerEmployeBanner">
                    <div className="ContainerEmploye">
                        <p>
                            Job Seekers
                        </p>
                    </div>
                </div>

                <div className="ContainerAboutTextContent">

                    <div className="ContainerAboutTextP ">
                        <p>
                            Whether you’re looking for something new, want to work the right shift for you or simply need a job, R&A Work Staffing can help you find the right
                            opportunity that matches your skills and interests. We work with a wide range of companies throughout California that are looking to power their
                            workforce with reliable, skilled workers like you.
                        </p>
                    </div>
                    <div className="ContainerAboutTextBanner">
                        <p>
                            WE OFFER TEMP-TO-HIRE AND PERMANENT POSITIONS IN THESE
                            SECTORS
                        </p>
                    </div>
                    <div className="ContainerAboutTextP ContainerEmployerTextP">
                        <div className="ContainerTextDivs">

                            <div className="ContainerTextUl">
                                <div className="ContainerTextIconUl">

                                </div>
                                <div className="ContainerTextP">
                                    <p>Light Industrial</p>
                                </div>
                            </div>
                            <div className="ContainerTextUl">
                                <div className="ContainerTextIconUl">

                                </div>
                                <div className="ContainerTextP">
                                    <p>Office/Clerical</p>
                                </div>
                            </div>
                            <div className="ContainerTextUl">
                                <div className="ContainerTextIconUl">

                                </div>
                                <div className="ContainerTextP">
                                    <p>Warehousing</p>
                                </div>
                            </div>
                            <div className="ContainerTextUl">
                                <div className="ContainerTextIconUl">

                                </div>
                                <div className="ContainerTextP">
                                    <p>Manufacturing</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="ContainerAboutTextP ">
                        <p>
                            R&A Work Staffing embraces its workforce, their diversity, work ethic and commitment to getting the job done right. We make it a priority to
                            understand the needs of our associates by listening to concerns and guiding them through the application process. We embrace a safety culture to
                            ensure all associates return home to their families at the end of their shift. Our goal is to find the right jobs for the right people every day.
                        </p>

                    </div>










                    <div className="ContainerAboutTextBanner">
                        <p>
                            ARE YOU INTERESTED IN BECOMING A LUMPER?
                        </p>
                    </div>
                    <div className="ContainerAboutTextP ">

                    </div>
                </div>

                <div className="ContainerFormEmploye">
                    <form>
                        <div className="FormContainerEmploye">
                            <div className="FormContainerEmployeDiv">
                                <input placeholder="Name" />
                                <input placeholder="Position" />
                            </div>
                            <div className="FormContainerEmployeDiv">
                                <input placeholder="Email" />
                                <input placeholder="Phone" />
                            </div>
                            <div className="FormContainerEmployeDivs">
                                <input placeholder="Company" />
                            </div>
                            <div className="FormContainerEmployeDivs">
                                <input placeholder="Address" />
                            </div>
                            <div className="FormContainerEmployeDivs">
                                <input placeholder="Subject" />
                            </div>
                            <div className="FormContainerEmployeDivs">
                                <input placeholder="Message" style={{ paddingBottom: "70px", textAlign: "initial", display: "flex" }} />
                            </div>



                        </div>
                        <div className="FormBotonSumbit ContainerButtonNumber">
                            <div>
                                <button>Sumbit</button>
                            </div>
                        </div>
                    </form>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default JobSeeker;