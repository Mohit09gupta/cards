import React,{useContext, useEffect, useState} from 'react'
import Navigation from './Navigation'
import Cards from './Cards'
import Add from './Add'
import './Layout.css'
import axios from 'axios'
import { Cardcontext } from './ApiContext'
function Layout() {
    let {cards,addcards} = useContext(Cardcontext)
    useEffect(()=>{
        axios.get('http://localhost:3500/user')
        .then((res)=>{addcards(res.data)})
        .catch((err)=>console.error(err))
    },[addcards])

    let [show,setShow] = useState(false)
    let open = ()=>setShow(true)
    let close = ()=>setShow(false)
    return (
    <div>
        <Navigation/>
        <div className="container-fluid mt-2 p-3 bg-primary custom">
            <div className="rounded container-fluid p-2 bg-secondary custom1">
            <div className="row card-row mw-25 gap">               
                    {
                        cards?.map((ele)=><Cards ele={ele} key= {ele.id}/>)
                    }
                </div>
            </div>
            <div className="row justify-content-end">
                <button className='col-1 btn btn-danger mt-1 me-2' onClick={open}>Add</button>
            </div>
        </div>
    <Add show={show} close = {close}/>
    </div>
  )
}

export default Layout