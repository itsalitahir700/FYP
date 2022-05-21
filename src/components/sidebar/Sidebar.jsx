import "./sidebar.css"
import {MdLineStyle,MdTimeline} from "react-icons/md"
import {FiTrendingUp} from "react-icons/fi"
import {FaBrain,FaMedrt,FaAddressBook} from "react-icons/fa"
import { BsCurrencyDollar} from "react-icons/bs"
import {AiOutlineMail,AiFillSetting} from "react-icons/ai"
import {VscGraph,VscFeedback} from "react-icons/vsc"
import {SiGoogleanalytics} from "react-icons/si"
import {RiSuitcaseLine,RiErrorWarningLine} from "react-icons/ri"
import {BiMessageAlt} from "react-icons/bi"
import Home from "../pages/home/Home"




export default function sidebar() {

    const path = window.location.pathname;
    

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h1 className="sidebarTitle"> DashBoard</h1>
                    <ul className="sidebarlist">
                        <li className={`sidebarListItem ${path === '/' ? 'active' : ''}`}><a href="/" className="text-reset">
                        <MdLineStyle className="sidebarIcon"/>HOME</a>

                        </li>
                       
                        
                        
                        
                        
                        
                        </ul>

                </div>


                <div className="sidebarMenu">
                    <h1 className="sidebarTitle"> Quick Menu</h1>
                    <ul className="sidebarlist">
                       
                        <li className={`sidebarListItem ${path === '/patients' ? 'active' : ''}`}><a href="/patients" className="text-reset">
                        <FaBrain className="sidebarIcon"/>Patients</a>
                        </li>
                                             <li className={`sidebarListItem ${path === '/appointments' ? 'active' : ''}`}><a href="/appointments" className="text-reset">

                        <FaAddressBook className="sidebarIcon"/>Appointments</a>
                        </li>
                                  {/*   <li className="sidebarListItem">
                        <BsCurrencyDollar className="sidebarIcon"/>Payments
                        </li>
    */}
                        
                        </ul>
                     </div>  


                     
             {/*   <div className="sidebarMenu">
                    <h1 className="sidebarTitle"> Notifications</h1>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem ">
                        <AiOutlineMail className="sidebarIcon"/>Mail
                        </li>
                        <li className="sidebarListItem">
                        <VscFeedback className="sidebarIcon"/>Feedback
                        </li>
                        <li className="sidebarListItem">
                        <BiMessageAlt className="sidebarIcon"/>Messages
                        </li>
                        </ul>
                     </div>   

    
                     <div className="sidebarMenu">
                    <h1 className="sidebarTitle"> Staff</h1>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem ">
                        <RiSuitcaseLine className="sidebarIcon"/>Manage
                        </li>
                        <li className="sidebarListItem">
                        <SiGoogleanalytics className="sidebarIcon"/>Analytics
                        </li>
                        <li className="sidebarListItem">
                        <RiErrorWarningLine className="sidebarIcon"/>Reports
                        </li>
                        </ul>
                     </div> */}


            </div>
        </div>
    )
}
