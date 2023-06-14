import React, { useContext, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { useForm} from 'react-hook-form'
import { Cardcontext } from './ApiContext'
import axios from 'axios'
function Update(props) {
    let {register,handleSubmit,formState:{ errors },setValue,getValues} = useForm()
    useEffect(()=>{
        setValue('Word',props.ele.Word)
        setValue('Meaning',props.ele.Meaning)
        setValue('image',props.ele.image)
    },[props.ele.Word,props.ele.Meaning,props.ele.image,setValue])
    let {updatecards} = useContext(Cardcontext)
  return (
    <Modal
    show={props.UpdateStatus}
    centered
    onHide={props.stopedit}>
    <Modal.Header closeButton>
        <Modal.Title>Add Flash Card</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <form onSubmit={handleSubmit((data)=>{
            let d = getValues()
            d.id = props.ele.id
            console.log(d)
            updatecards(d)
            axios.put(`http://localhost:3500/edit`,d)
            .then((res)=>console.log(res))
            .catch((err)=>console.error(err))
            props.stopedit()})}>
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
                        <input type="text" className="form-control" key="image" {...register('image',{maxLength:200})}/>
                    </div>
            <div className="row justify-content-center">
            <button type="submit" className="btn col-md-3 col-sm-5 btn-primary mt-1 ">Update</button>
                </div>    
        </form>
    </Modal.Body>
</Modal>
  )
}

export default Update