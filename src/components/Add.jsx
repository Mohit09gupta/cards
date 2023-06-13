import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Cardcontext } from './ApiContext'
import axios from 'axios'
function Add(props) {
    let {register,formState:{ errors },handleSubmit} = useForm()
    let {postcard,count} = useContext(Cardcontext)
    return (
        <Modal
            show={props.show}
            centered
            onHide={props.close} >
            <Modal.Header closeButton>
                <Modal.Title>Add Flash Card</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit((data)=>{
                    props.close()
                    postcard(data)
                    data = {...data,id:count+1}
                    axios.post('http://localhost:3500/add',data)
                    .then((res)=>console.log(res.data))
                    .catch((err)=>console.error(err))
                    })}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Word</label>
                        <input type="text" className="form-control" {...register('Word',{required:true,minLength:4,maxLength:100})} aria-describedby="emailHelp" placeholder="Enter Word" />
                        {errors.Word?.type === "required" && <small id="Word" className="form-text text-muted text-danger">*Word required</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Meaning">Meaning</label>
                        <input type="text" className="form-control" id="Meaning" {...register('Meaning',{required:true,minLength:4,maxLength:100})}  placeholder="Meaning" />
                        {errors.Meaning?.type === "required" && <small id="Meaning" className="form-text text-muted text-danger">*Meaning Required</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image Link</label>
                        <input type="text" className="form-control" key="image" {...register('image',{maxLength:'200'})}/>
                    </div>
                    <button type="submit"  className="btn btn-primary">Submit</button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default Add