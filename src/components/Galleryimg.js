import React, { useState } from 'react'
import './Galleryimg.css'


import { Image } from 'antd'
import Imagegallery from './data/Imagegallery';
const Galleryimg = () => {
    const[category,setCategory]=useState('all');
  return (
    <>
    <div className='my-5' style={{backgroundColor:'#453F78'}}>
    <div className="container py-5" style={{backgroundColor:'#453F78',borderRadius:'10px'}}>
            <div className="py-2" style={{display:'flex', margin:"auto"}}>
                <div style={{display:'flex', margin:"auto"}}>
                <button className='btn mx-2  filterbutton' onClick={()=>setCategory('all')}> All</button>
                <button className='btn mx-2 filterbutton' onClick={()=>setCategory('banquet')}> Banquet</button>
                <button className='btn mx-2 filterbutton' onClick={()=>setCategory('roomstay')}> Room Stay</button>
                <button className='btn mx-2 filterbutton' onClick={()=>setCategory('catering')}> Catering</button>
                </div>
            </div>
            <div className="row py-2">
               
            <Image.PreviewGroup>
                {Imagegallery.filter(data=>category!=='all'?data.category===category:data).map(
                    (imggallery,i)=>(
                        
                            <div  className="col-12 col-md-6 col-lg-4 col-xlg-4 col-xxlg-4 p-2" style={{margin:'auto'}} >
                            <Image src={imggallery.img}  id="imagesub" className="img-fluid " alt='img'  style={{height:'300px',borderRadius:'10px'}}/>
                            </div>
                        
                    )
                )}
                
                
                


               
             </Image.PreviewGroup>   
            </div>
            </div>
            </div>
    </>
  )
}

export default Galleryimg
