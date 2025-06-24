import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
const Contactus = () => {
  const [enquries,setEnq] =useState([])

const [Name,setName] =useState("");
const [Mobile, setMobile] = useState("");
const [Email, setEmail] =useState("");
const [Country, setCountry] = useState("");
const [Slot, setSlot] = useState("");
const  [id,setId] = useState("");

  useEffect(()=>{
    axios.get('http://localhost:4000/Enquires')
    .then((res)=>setEnq(res.data))
    .catch((err)=>console.log(err))
});
const deleteEnq=(enqId) => {
    axios.delete(`http://localhost:4000/Enquires/${enqId}`)
    .then(()=>alert("Enq deleted"))
    .catch((err)=>console.log(err))
};
const getOneRecord=(enqId) =>{
    axios.get(`http://localhost:4000/Enquires/${enqId}`)

    .then((res)=>{
        setName(res.data.Name);
        setMobile(res.data.Mobile);
    setEmail(res.data.Email);
    setCountry(res.data.Country);
    setSlot(res.data.Slot);
    setId(res.data.id);})
    .catch((err)=>console.log(err))
};

 const updateEnq = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:4000/Enquires/${id}`,{Name,Mobile,Email,Country,Slot,id})
    .then((res)=>alert("update enquries"))
    .catch((err)=> console.log(err))
};


 return (
    <div className="container">
        <h2>Booking List </h2>
        <table className='table table-bordered'>
<thead>
    <tr>
        <th>Name</th>
        <th>Mobile Number</th>
        <th>Email</th>
        <th>Country</th>
        <th>Booking Date</th>
        <th>Action</th>
    </tr>
</thead>
<tbody>
    {
        enquries.map((enq,index)=>{
            return(
                <tr key={index}>
                    <td>{enq.Name}</td>
                    <td>{enq.Mobile}</td>
                    <td>{enq.Email}</td>
                    <td>{enq.Country}</td>
                    <td>{enq.Slot}</td>
                    <td>
                        <button className="btn bg-primary m-3" onClick={()=>getOneRecord(enq.id)}>Edit</button>
                        <button className="btn bg-danger " onClick={()=>deleteEnq(enq.id)}>delete</button>
                    </td>
                </tr>
            )
        })
    }
</tbody>
        </table>
      

<form onSubmit ={updateEnq}>
<input name='Name' placeholder='Enter Name' value={Name} className='form-control w-75 mb-3 mx-5' onChange={(e)=>setName(e.target.value)}/>
<input name='Mobile' placeholder='Mobile Number' value={Mobile} className='form-control w-75 mb-3 mx-5' onChange={(e)=>setMobile(e.target.value)}/>
<input name='Email' placeholder='Email Adress' value={Email} className='form-control w-75 mb-3 mx-5' onChange={(e)=>setEmail(e.target.value)}/>
<input name='Country' placeholder='Country' value={Country} className='form-control w-75 mb-3 mx-5' onChange={(e)=>setCountry(e.target.value)}/>
<input name='Slot' placeholder='Booking DAte' value={Slot} className='form-control w-75 mb-3 mx-5' onChange={(e)=>setSlot(e.target.value)}/>
<input type="submit" placeholder=''   className="form-control bg-primary w-75 mb-3 mx-5"/>
</form>

    </div>
  )
}

export default Contactus
