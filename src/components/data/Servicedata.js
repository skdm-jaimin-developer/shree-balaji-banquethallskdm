import carouselone from '../Imagess/carouselone.jpeg'
import carouseltwo from '../Imagess/carouseltwo.jpeg'
import connect from '../Imagess/connect.jpg'
import Contact from '../Imagess/Contact.jpeg'
import expone from '../Imagess/expone.jpeg'
import exptwo from '../Imagess/exptwo.jpeg'
import expthree from '../Imagess/expthree.jpg'
import Serviceone from '../Imagess/serviceone.jpeg'
import Servicetwo from '../Imagess/servicetwo.jpeg'
import { FaWifi ,FaTv } from "react-icons/fa"
import { LuParkingCircle } from "react-icons/lu";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiFoodTag } from "react-icons/bi";
import { TbAirConditioning } from "react-icons/tb";

const Servicedata=[
    {
        title:'Banquet Hall',
        desc:'',
        image:[carouselone,carouseltwo,connect,exptwo,expthree,Serviceone,Contact],
        slugs:'/banquet',
        amenities:[{
                logo:<FaWifi/>,
                amenity:'Wifi'
            },
            {
                logo:<LuParkingCircle/>,
                amenity:'Parking'
            },
            {
                logo:<BsFillPeopleFill/>,
                amenity:'Up to 555 Guests'
            },
            ,
            {
                logo:<BiFoodTag style={{color:'green'}}/>,
                amenity:'Veg Food'
            }
            ,
            {
                logo:<FaTv/>,
                amenity:'TV Screen'
            },
            {
                logo:<TbAirConditioning />,
                amenity:'Air Conditioner'
            }

        ]
            
        
    },




    // Data for Room Stays


    {
        title:'Room Stays',
        desc:'',
        image:[expone,Contact,Servicetwo,carouselone,carouseltwo,connect,exptwo],
        slugs:'/roomstay',
        amenities:[
            {
                logo:<FaWifi/>,
                amenity:'Wifi'
            },
            {
                logo:<LuParkingCircle/>,
                amenity:'Parking'
            },
            {
                logo:<BsFillPeopleFill/>,
                amenity:'Up to 555 Guests'
            },
            ,
            {
                logo:<BiFoodTag style={{color:'green'}}/>,
                amenity:'Veg Food'
            }
            ,
            {
                logo:<FaTv/>,
                amenity:'TV Screen'
            },
            
            {
                logo:<TbAirConditioning />,
                amenity:'Air Conditioner'
            }
        ]
    },




    // Data for Catering 


    {
        title:'Catering',
        desc:'',
        image:[carouselone,carouseltwo,connect,exptwo,expthree,Serviceone,Servicetwo],
        slugs:'/catering',
        amenities:[
            {
                logo:<FaWifi/>,
                amenity:'Wifi'
            },
            {
                logo:<LuParkingCircle/>,
                amenity:'Parking'
            },
            {
                logo:<BsFillPeopleFill/>,
                amenity:'Up to 555 Guests'
            },
            ,
            {
                logo:<BiFoodTag style={{color:'green'}}/>,
                amenity:'Veg Food'
            }
            ,
            {
                logo:<FaTv/>,
                amenity:'TV Screen'
            },
            
            {
                logo:<TbAirConditioning />,
                amenity:'Air Conditioner'
            }
        ]
    }
]
export default Servicedata