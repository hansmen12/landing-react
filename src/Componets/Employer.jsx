import Footer from "./Footer";
import './About.scss'
import Box from "../assets/boxEmployer.jpg"
import Box1 from "../assets/boxEmployer1.jpg"
// import emailjs from 'emailjs-com'
import {useRef} from 'react'
import './Employer.css'
import { useForm } from 'react-hook-form';
import Message from "./Message";
function Employer () {
    const { register, handleSubmit, reset, formState: { errors }} = useForm();
    const submit = (data) => {
        console.log(data)
        reset({
            username: "",
            company: "",
            position: "",
            phone: "",
            email: "",
            services: "",
            yesOrNo: ""
        })
    };
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
        <div className="container-employer">
            <div className="employer-hero">
            </div>
            <div className="employer-presentation">
                <div className="presentation-title">
                    <h1>The Right Staffin Partner</h1>
                </div>
                <div className="presentation-description">
                    <p>The dedicated Recruiting Specialists at R&A Work Staffing will help you find, hire and retain the resources you need. Our temporary and direct hire staffing services are customized to your needs but designed for maximum efficiency. We help you to make work happen across many industries and environments.</p>
                    <br />
                    <p>At R&A Work Staffing, it is always our privilege to help clients increase the selection and retention of highly-qualified employees. Get in touch with our recruiting specialists to improve the quality of your new hires</p>
                </div>
            </div>
            <div className="employer-industries">
                <div className="industries">
                    <div className="industries-title">
                        <h1>Industries We Serve</h1>
                    </div>
                    <div className="industries-content">
                        <div className="industries-subtitle">
                            <h3>Commercial/Industrial</h3>
                        </div>
                        <div className="industries-description">
                            <p>A wide range of companies hire R&A Work Staffing to help them meet their short-term and long-term staffing needs. Many of the positions we fill are in the commercial sector</p>
                            <br />
                            <p>Here are some of the commercial positions we fill on a regular basis:</p>
                        </div>
                        <div className="industries-warehouse">
                            <div className="warehouse">
                                <div className="warehouse-subtitle">
                                    <h3>Warehouse Positions</h3>
                                </div>
                                <div className="warehouse-list">
                                    <p>• General Laborers</p>
                                    <p>• Scanners</p>
                                    <p>• Forklift Operators</p>
                                    <p>• Shipping/Receiving</p>
                                    <p>• Machine Operators</p>
                                    <p>• Assembly Line</p>
                                    <p>• Maintenance Helpers</p>
                                </div>
                            </div>
                            <div className="management">
                                <div className="management-subtitle">
                                    <h3>Management Positions</h3>
                                </div>
                                <div className="management-list">
                                    <p>• QC Manager</p>
                                    <p>• Maintenance Supervisor/Managers</p>
                                    <p>• Operations Manager</p>
                                    <p>• Warehouse Manager</p>
                                    <p>• Leads</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="industries-box">    
                    <img src={Box1} alt="" className="box-one"/>
                    <img src={Box} alt="" className="box-two"/>
                </div>
            </div>
            <div className="employer-form">
                <div>
                    <p><span className="required">*</span> Required</p>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="div-input">
                        <label htmlFor="username">1.First and Last Name <span className="required">*</span></label>
                        <br />
                        <input type="text" placeholder="Enter your answer" {...register("username", {
                            required: true
                        })}/>
                        {errors.username?.type === "required" && <Message Class="error" Message="This is required"/>}
                    </div>
                    <div className="div-input">
                        <label htmlFor="company">2.Company Name <span className="required">*</span></label>
                        <br />
                        <input type="text" placeholder="Enter your answer" {...register("company", {
                            required: true
                        })}/>
                        {errors.company?.type === "required" && <Message Class="error" Message="This is required"/>}
                    </div>
                    <div className="div-input">
                        <label htmlFor="position">3.Position <span className="required">*</span></label>
                        <br />
                        <input type="text" placeholder="Enter your answer" {...register("position", {
                            required: true
                        })}/>
                        {errors.position?.type === "required" && <Message Class="error" Message="This is required"/>}
                    </div>
                    <div className="div-input">
                        <label htmlFor="phone">4.Phone Number <span className="required">*</span></label>
                        <br />
                        <input type="number" placeholder="Enter your answer" {...register("phone", {
                            required: true
                        })}/>
                        {errors.phone?.type === "required" && <Message Class="error" Message="This is required"/>}
                    </div>
                    <div className="div-input">
                        <label htmlFor="email">5.Company Email <span className="required">*</span></label>
                        <br />
                        <input type="email" placeholder="Enter your answer" {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i
                        })}/>
                        {errors.email?.type === "required" && <Message Class="error" Message="This is required"/>}
                    </div>
                    <div className="div-input">
                        <label htmlFor="services">6.What type of services are you interested in? <span className="required">*</span></label>
                        <div>
                            <input type="checkbox" {...register("services",{
                                required: true
                            })}/>
                            <label htmlFor="temporary">Temporary Labor</label>
                        </div>
                        <div>
                            <input type="checkbox" {...register("services",{
                                required: true
                            })}/>
                            <label htmlFor="clarical">Clarical</label>
                        </div>
                        <div>
                            <input type="checkbox" {...register("services",{
                                required: true
                            })}/>
                            <label htmlFor="direct-hire">Direct Hire</label>
                        </div>
                        {errors.services?.type === "required" && <Message Class="error" Message="This is required"/>}
                    </div>
                    <div className="div-input">
                        <label htmlFor="">7.Are you currently using or have used a staffing provider in the past? <span className="required">*</span></label>
                        <div>
                            <input type="radio" value="Yes" {...register('yesOrNo', {
                                required: true
                            })}/>
                            <label htmlFor="yes">Yes</label>
                        </div>
                        <div>
                            <input type="radio" value="No" {...register('yesOrNo', {
                                required: true
                            })}/>
                            <label htmlFor="no">No</label>
                        </div>
                        {errors.yesOrNo?.type === "required" && <Message Class="error" Message="This is required"/>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Employer ;

        // <div className="ContainerAbout">
        //     <div className="ContainerEmployeBanner">
        //         <div className="ContainerEmploye">
        //             <p>
        //                  Job Seekers
        //             </p>
        //         </div>
        //     </div>
            
        //     <div className="ContainerAboutTextContent">
                
        //         <div className="ContainerAboutTextP ">
        //             <p>
        //             Whether you’re looking for something new, want to work the right shift for you or simply need a job, R&A Work Staffing can help you find the right
        //             opportunity that matches your skills and interests. We work with a wide range of companies throughout California that are looking to power their
        //             workforce with reliable, skilled workers like you.   
        //             </p>
        //               </div>
        //         <div className="ContainerAboutTextBanner">
        //             <p>
        //             WE OFFER TEMP-TO-HIRE AND PERMANENT POSITIONS IN THESE
        //             SECTORS
        //             </p>
        //         </div>
        //         <div className="ContainerAboutTextP ContainerEmployerTextP">
        //         <div className="ContainerTextDivs">

        //         <div className="ContainerTextUl">
        //             <div className="ContainerTextIconUl">

        //             </div>
        //             <div className="ContainerTextP">
        //                 <p>Light Industrial</p>
        //             </div>
        //         </div>
        //         <div className="ContainerTextUl">
        //             <div className="ContainerTextIconUl">

        //             </div>
        //             <div className="ContainerTextP">
        //                 <p>Office/Clerical</p>
        //             </div>
        //         </div>
        //         <div className="ContainerTextUl">
        //             <div className="ContainerTextIconUl">

        //             </div>
        //             <div className="ContainerTextP">
        //                 <p>Warehousing</p>
        //             </div>
        //         </div>
        //         <div className="ContainerTextUl">
        //             <div className="ContainerTextIconUl">

        //             </div>
        //             <div className="ContainerTextP">
        //                 <p>Manufacturing</p>
        //             </div>
        //         </div>    
        //         </div>

        //         </div>
        //         <div className="ContainerAboutTextP ">
        //             <p>
        //             R&A Work Staffing embraces its workforce, their diversity, work ethic and commitment to getting the job done right. We make it a priority to
        //             understand the needs of our associates by listening to concerns and guiding them through the application process. We embrace a safety culture to
        //             ensure all associates return home to their families at the end of their shift. Our goal is to find the right jobs for the right people every day.  
        //             </p>
                    
        //         </div>
                    
               








        //         <div className="ContainerAboutTextBanner">
        //             <p>
        //             ARE YOU INTERESTED IN BECOMING A LUMPER?
        //             </p>
        //         </div>
        //         <div className="ContainerAboutTextP ">
                    
        //         </div>
        //     </div>
            
        //     <div className="ContainerFormEmploye">
        //         <form>
        //             <div className="FormContainerEmploye">
        //                 <div className="FormContainerEmployeDiv">
        //                     <input placeholder="Name"/>
        //                     <input placeholder="Position"/>
        //                 </div>
        //                 <div className="FormContainerEmployeDiv">
        //                     <input placeholder="Email"/>
        //                     <input placeholder="Phone"/>
        //                 </div>
        //                 <div className="FormContainerEmployeDivs">
        //                     <input placeholder="Company"/>
        //                 </div>
        //                 <div className="FormContainerEmployeDivs">
        //                     <input placeholder="Address"/>
        //                 </div>
        //                 <div className="FormContainerEmployeDivs">
        //                     <input placeholder="Subject"/>
        //                 </div>
        //                 <div className="FormContainerEmployeDivs">
        //                     <input placeholder="Message" style={{paddingBottom:"70px",textAlign:"initial",display:"flex"}}/>
        //                 </div>



        //             </div>
        //             <div className="FormBotonSumbit ContainerButtonNumber">
        //                 <div>
        //                     <button>Sumbit</button>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
            
        //     <Footer/>
        // </div>