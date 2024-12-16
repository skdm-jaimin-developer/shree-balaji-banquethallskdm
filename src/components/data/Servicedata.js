import carouselone from '../Imagess/wedding.jpg'
import carouseltwo from '../Imagess/carouseltwo.jpeg'
import connect from '../Imagess/connect.jpg'
import Contact from '../Imagess/Contact.jpeg'
import expone from '../Imagess/homeservicetwo.jpg'
import exptwo from '../Imagess/catering.jpg'
import expthree from '../Imagess/expthree.jpg'
import Serviceone from '../Imagess/serviceone.jpeg'
import Servicetwo from '../Imagess/servicetwo.jpeg'
import { FaWifi ,FaTv } from "react-icons/fa"
import { LuParkingCircle } from "react-icons/lu";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiFoodTag } from "react-icons/bi";
import { TbAirConditioning } from "react-icons/tb";
import one from '../Imagess/wedding.jpg'
import two from '../Imagess/birthday.jpg'
import three from '../Imagess/corporateevents.jpg'
import four from '../Imagess/engagement.jpeg'
import five from '../Imagess/sangeet.jpg'
import six from '../Imagess/namingceremony.jpg'
const Servicedata=[
    {
        title:'Banquet Hall',
        desc:['Welcome to Shree Balaji NX Banquet: The Top Banquet in Bhayandar for Unforgettable Celebrations',
            "Looking for a luxurious venue to host your special event? Shree Balaji Banquet is proud to be recognized as the Top Banquet in Bhayandar, offering a stunning venue that combines elegance with exceptional service. Whether you're planning a wedding, anniversary, corporate function, or family gathering, our venue provides the perfect backdrop for your occasion. With a spacious, air-conditioned hall that can comfortably accommodate 75 to 250 guests, we cater to both intimate and large-scale events. Experience the best in hospitality and style at Shree Balaji Banquet.",
            "As the Top Banquet in Bhayandar, we offer a versatile space designed to meet your every need. Our banquet hall is equipped with state-of-the-art facilities, from beautiful interiors to high-quality audiovisual systems, ensuring your event is nothing short of spectacular. We specialise in transforming our venue to suit the theme and style of your event, whether it’s a traditional wedding, a sophisticated corporate event, or a vibrant family celebration. Our team of experts is here to assist you in creating the perfect ambiance, ensuring every detail is taken care of.",
            'When you choose Shree Balaji Banquet, you are choosing the Top Banquet in Bhayandar for your most important events. We take pride in offering an all-inclusive experience, from catering and décor to event planning and coordination. Our dedicated staff ensures that every aspect of your event is executed flawlessly, allowing you to enjoy your celebration with peace of mind. With our commitment to excellence, we guarantee an unforgettable experience for you and your guests. Book your next event with us and see why we are the top choice in Bhayandar.'
        ],
        image:[carouselone,one,two,three,four,five,six],
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
                amenity:'75 to 250 Guests'
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
        desc:['Welcome to Shree Balaji NX Banquet: The Top Banquet in Bhayandar for Unforgettable Celebrations',
            "Looking for a luxurious venue to host your special event? Shree Balaji Banquet is proud to be recognized as the Top Banquet in Bhayandar, offering a stunning venue that combines elegance with exceptional service. Whether you're planning a wedding, anniversary, corporate function, or family gathering, our venue provides the perfect backdrop for your occasion. With a spacious, air-conditioned hall that can comfortably accommodate 75 to 250 guests, we cater to both intimate and large-scale events. Experience the best in hospitality and style at Shree Balaji Banquet.",
            "As the Top Banquet in Bhayandar, we offer a versatile space designed to meet your every need. Our banquet hall is equipped with state-of-the-art facilities, from beautiful interiors to high-quality audiovisual systems, ensuring your event is nothing short of spectacular. We specialise in transforming our venue to suit the theme and style of your event, whether it’s a traditional wedding, a sophisticated corporate event, or a vibrant family celebration. Our team of experts is here to assist you in creating the perfect ambiance, ensuring every detail is taken care of.",
            'When you choose Shree Balaji Banquet, you are choosing the Top Banquet in Bhayandar for your most important events. We take pride in offering an all-inclusive experience, from catering and décor to event planning and coordination. Our dedicated staff ensures that every aspect of your event is executed flawlessly, allowing you to enjoy your celebration with peace of mind. With our commitment to excellence, we guarantee an unforgettable experience for you and your guests. Book your next event with us and see why we are the top choice in Bhayandar.'
        ],
        image:[expone,one,two,three,four,five,six],
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
                amenity:'75 to 250 Guests'
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
        desc:['Exquisite Catering Services at Shree Balaji NX Banquet: The Best Catering in Bhayandar',
            "At Shree Balaji Banquet, we believe that exceptional catering is key to a memorable event. That’s why we offer the Best Catering in Bhayandar to elevate your celebrations. Whether you're hosting a wedding, a corporate function, or a family gathering, our culinary team crafts exquisite menus that will leave your guests impressed. From delicious appetisers to decadent desserts, we provide a wide range of dishes that cater to all tastes and preferences, ensuring that every bite is a delight.",
            "As the Best Catering in Bhayandar, we offer a diverse selection of cuisines to match the theme and style of your event. Our expert chefs specialise in both traditional and contemporary dishes, using the finest ingredients to create flavorful, high-quality meals. Whether you're looking for a traditional Indian feast, international cuisine, or customised menu options, we can tailor the catering to suit your specific needs. Our service is efficient, professional, and designed to enhance the overall experience of your event.",
            'Choosing Shree Balaji Banquet means choosing the Best Catering in Bhayandar for your special occasion. Our team not only focuses on the quality of food but also on providing a seamless dining experience for you and your guests. We take care of everything, from presentation to serving, ensuring that your event runs smoothly. Our catering service is designed to complement the elegance and atmosphere of our venue, making your celebration truly exceptional. Let us take care of the food while you focus on making memories.'
        ],
        image:[exptwo,one,two,three,four,five,six],
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
                amenity:'75 to 250 Guests'
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