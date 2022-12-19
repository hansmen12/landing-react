import Footer from "./Footer";
import './About.scss'
// import emailjs from 'emailjs-com'
import {useState} from 'react'
import './Employer.scss'
import Swal from 'sweetalert2'
import axios from "axios";

function Employer () {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [position, setPosition] = useState()
    const [phone, setPhone] = useState()
    const [company, setCompany] = useState()
    const [address, setAddress] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()

    const handleSendEmail = async () => {
        const databody = {
            name,
            email,
            position,
            phone,
            company,
            address,
            subject,
            message
        }
        const config = {
            headers: { 
              'Content-Type': "application/json",
            // 'Authorization': `Bearer ${session.token}`
              
            },
        };
        const url = `https://api.randaworkstaffing.com/`
        const {data} = await axios.post(url, databody, config)
        if(data){
            Swal.fire({
                title: 'Success!',
                text: data.response,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
    }
    return (
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
                    <div className="FormContainerEmploye">
                        <div className="FormContainerEmployeDiv">
                            <input placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
                            <input placeholder="Position" onChange={(e)=> setPosition(e.target.value)}/>
                        </div>
                        <div className="FormContainerEmployeDiv" >
                            <input placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
                            <input placeholder="Phone" onChange={(e)=> setPhone(e.target.value)}/>
                        </div>
                        <div className="FormContainerEmployeDivs">
                            <input placeholder="Company" onChange={(e)=> setCompany(e.target.value)}/>
                        </div>
                        <div className="FormContainerEmployeDivs">
                            <input placeholder="Address"  onChange={(e)=> setAddress(e.target.value)}/>
                        </div>
                        <div className="FormContainerEmployeDivs">
                            <input placeholder="Subject" onChange={(e)=> setSubject(e.target.value)}/>
                        </div>
                        <div className="FormContainerEmployeDivs">
                            <input placeholder="Message" style={{paddingBottom:"70px",textAlign:"initial",display:"flex"}}  onChange={(e)=> setMessage(e.target.value)}/>
                        </div>



                    </div>
                    <div className="FormBotonSumbit ContainerButtonNumber">
                        <div>
                            <button onClick={handleSendEmail}>Sumbit</button>
                        </div>
                    </div>
            </div>
            
            <Footer/>
        </div>


    )
}
export default Employer ;