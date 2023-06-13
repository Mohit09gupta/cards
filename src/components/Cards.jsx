import React, { useState } from 'react'
import Update from './Update'
function Cards(props) {
    let [UpdateStatus, Status] = useState(false)
    let edit = () => Status(true)
    let stopedit = () => {
        Status(false)
    }
    let [hover, setHover] = useState(true)
    let isHovering = (event) => {
        setHover(!hover)
    }
    let notHovering = () => {
        setHover(true)
    }
    let alt ='No image for reference'
    return (
        <div className='card col-3  mt-3 rounded' onClick={isHovering} onMouseLeave={notHovering}>
            <div className="card-head text-center">
                <img src={props.ele.image} alt={alt} className='position-relative img-fluid rounded' style={{top:'-1em'}}  />
            </div>
            <div className="card-body ">
                <p className='fs-5 text-center'>
                    {props.ele.Word}
                </p>
                <div hidden={hover} >
                    <p className="fs-6 text-start ">
                        {props.ele.Meaning}
                    </p>
                    <div className="row justify-content-end">
                        <button className='btn col-md-3 col-sm-5 btn-success' onClick={edit}>Edit</button>
                    </div>
                </div>
            </div>
            <Update ele={props.ele} UpdateStatus={UpdateStatus} stopedit={stopedit} />
        </div>
    )
}

export default Cards