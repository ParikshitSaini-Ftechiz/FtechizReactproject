import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DevicesIcon from '@mui/icons-material/Devices';
import ComputerIcon from '@mui/icons-material/Computer';
import GroupsIcon from '@mui/icons-material/Groups';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import { NavLink } from "react-router-dom";

export const Card_detail = [
    {   
        icon:<CurrencyBitcoinIcon style={{color:"#231740", marginLeft:"-2rem", fontSize:"5rem", marginBottom:"2.3rem"}}/>,
        title:"Blockchain Development Company",
        para:"Being a leading Mobile App Development Company, Ftechiz develops the best user-friendly mobile applications for iOS and Android users both. Our Talented Mobile app developers have the ability to build custom innovative solutions that are designed and delivered to your specific requirement.",
        btn_text:<NavLink to="/blockchaindevelopment"  style={{color:"white"}}>Read Me</NavLink>,
    },
    {
        icon:<PhoneAndroidIcon  style={{color:"#231740", marginLeft:"-2rem", fontSize:"5rem", marginBottom:"2.3rem"}}/>,
        title:"Mobile App Development Company",
        para:"Being a leading Mobile App Development Company, Ftechiz develops the best user-friendly mobile applications for iOS and Android users both. Our Talented Mobile app developers have the ability to build custom innovative solutions that are designed and delivered to your specific requirement.",
        btn_text:<NavLink to="/mobileappdevelopment"  style={{color:"white"}}>Read Me</NavLink>,
    },
    {
        icon:<DevicesIcon style={{color:"#231740", marginLeft:"-2rem", fontSize:"5rem", marginBottom:"2.3rem"}}/>,
        title:"Website Development Company",
        para:"Ftechiz is a leading web development company offering all kinds of custom built websites, web portals and web applications for all types of business verticals. We use latest cutting edge technologies, advanced frameworks and proven methodologies to ensure that our solutions are future-ready and scalable. ",
        btn_text:<NavLink to="/websitedevelopment"  style={{color:"white"}}>Read Me</NavLink>,
    },
    {
        icon:<ComputerIcon style={{color:"#231740", marginLeft:"-2rem", fontSize:"5rem", marginBottom:"2.3rem"}}/>,
        title:"Website Designing Company",
        para:"Being a Top Website Designing Company, Ftechiz bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behaviour of their users. We use latest cutting-edge technologies, tools, advanced frameworks, and proven strategies to make sure that our solutions are future-ready and conformable. We have a pool of skilled designers who creates attractive designs for retail, banking, manufacturing, healthcare, education and other industries.",
        btn_text:<NavLink to="/websitedesigning"  style={{color:"white"}}>Read Me</NavLink>,
    },
    {
        icon:<GroupsIcon  style={{color:"#231740", marginLeft:"-2rem", fontSize:"5rem", marginBottom:"2.3rem"}}/>,
        title:"Website App Development Company",
        para:"Ftechiz believes in providing web application development services with valued consulting and analysis solutions. Through our top-notch web app development services, we became the partner of growing businesses and industry leaders in their success journey. Our team specializes in web app development services with robust technology, latest frameworks and tools, and are capable of picking the project from scratch to delivery. We have hands-on experience in building world-class B2B and B2C web solutions.",
        btn_text:<NavLink to="/webapplicationdevelopment"  style={{color:"white"}}>Read Me</NavLink>,
    },
    {
        icon:<BackupOutlinedIcon style={{color:"#231740", marginLeft:"-2rem", fontSize:"5rem", marginBottom:"2.3rem"}}/>,
        title:"Cloud Application Development Company",
        para:"As a leading cloud application development company, our cloud-native application development includes ERPs, CRMs, and much more. Ftechiz offers custom cloud application development services as per your budget and business requirement. We develop and Implement Cloud Applications that are Browser-compatible, Future-Proof, and Highly Scalable. We can deploy cloud applications in public, private, or hybrid environments thanks to our top-level integration services.",
        btn_text:<NavLink to="/cloudappdevelopment"  style={{color:"white"}}>Read Me</NavLink>,
    },
]


