import React ,{useState} from 'react'
import axios from 'axios'
const Carenq = () => {

const [Name,setName] =useState("")
const[Mobile, setMobile] = useState("")
const [Email, setEmail] =useState("")
const [Country, setCountry] = useState("")
const [Slot, setSlot] = useState("")

const submitHandler =(e) =>{
  e.preventDefault();
  axios.post (`http://localhost:4000/Enquires`, {Name,Mobile,Email,Country,Slot})
  .then((res)=>alert("you slot bokked mawa"))
  .catch((err)=>console.log(err))
}

  return (
    <div className="Container p-3 ">
      <h2 className="text-center">Book Slots For Visit</h2>
      <form onSubmit={submitHandler}>
      <input data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" name='Name' placeholder='Enter Name' className="form-control w-75 mb-3 mx-5" onChange={(e)=>setName(e.target.value)}/>
      <input data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" name='Mobile' placeholder=' Mobile Number' className="form-control  w-75 mb-3 mx-5" onChange ={(e)=>setMobile(e.target.value)}/>
      <input data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" type='Email' placeholder='Email Address' className="form-control w-75 mb-3 mx-5"  onChange ={(e)=>setEmail(e.target.value)} />
      <input data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" type='Country' placeholder='Country' className="form-control w-75 mb-3 mx-5"  onChange ={(e)=>setCountry(e.target.value)}/>
      <input data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" type='Slot' placeholder='Slot Date (in nunmbers)' className="form-control w-75 mb-3 mx-5"  onChange ={(e)=>setSlot(e.target.value)}/>
        <input
     type='submit' placeholder='' className="form-control bg-primary w-75 mb-3 mx-5"/>
      </form>
    </div>
  )
}

export default Carenq
