import React from 'react'

const Swipersliderdiv = (props) => {
  return (
    <>
    <div className="card text-center mb-3" style={{backgroundColor: 'var(--primary-color)',border:'none'}} >
              <div className="card-body" style={{height:'max-content'}}>
                <h3 className="card-title">{props.name}</h3>
                <br/>
                <p className="lead" style={{color:'white'}}>
                	{props.review}
                 </p>
                 <br/>
                 <p className="card-text d-flex align-items-end justify-content-start" style={{color:'var(--secondary-color)',textAlign:'start',alignItems:'end'}}>
                 {props.rtime}
                 </p>
                 
              </div>
            </div>
    </>
  )
}

export default Swipersliderdiv
