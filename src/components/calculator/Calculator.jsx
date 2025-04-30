import React from 'react'
import { useState } from 'react'
import {toast, Toaster} from 'react-hot-toast'
function Calculator(props) {
    const [formData, setFormData] = useState({
        productName: '',
        productQuantity: '',
        boxQuantity: '',
    })

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        if(formData.boxQuantity == "" || formData.productQuantity == ""){
            return toast.error("Įveskite vienetų skaičių ir kiekį dėžėje.")
        }
        toast.success('Sėkmingai pridėta.')
        props.onSave(formData)

        setFormData({
            productName: '',
            productQuantity: '',
            boxQuantity: '',
          });
    }
    
  return (
    <>
            <Toaster
            position="top-center"
            reverseOrder={false}
            />
        <div className="card">
            <div className="card-body">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Pavadinimas:</label>
                        <input className="form-control mb-3" 
                        onChange={handleChange}
                        name='productName'
                        type="text" 
                        placeholder="Pavadinimas" 
                        value={formData.productName}/>
                    </div>
                    <div className="form-group">
                        <label>Vienetai:</label>
                        <input className="form-control mb-3"
                        onChange={handleChange}
                        name='productQuantity'
                        type="number" 
                        placeholder="Vienetai"
                        value={formData.productQuantity}/>
                    </div>
                    <div className="form-group">
                        <label>Vienetų kiekis dėžėje:</label>
                        <input className="form-control mb-3"
                        onChange={handleChange}
                        name='boxQuantity' 
                        type="number" 
                        placeholder="Vienetų kiekis dėžėje"
                        value={formData.boxQuantity}/>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-start">
                            <button type="submit" className="btn btn-primary mt-1">Skaičiuoti</button>
                            </div>
                        <div className="col d-flex justify-content-end">
                            <button type="button" onClick={props.deleteAll} className="btn btn-danger mt-1">Ištrinti viską</button>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Calculator