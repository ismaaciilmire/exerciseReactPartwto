import React, { useState } from 'react'

const Exercise22 = () => {
    const [formData,setFormData] = useState({
        userName: "",
        Email: "",
        password:"",
    });

    const [ischecked,setIschecked] = useState(false)
    const [seletctOption,setSelectOption] = useState("")

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData)
        console.log(ischecked)
        console.log(seletctOption)
        

    }

    const handleChange=(e)=>{
       const {name,value,type} = e.target
       console.log(type)
       

       setFormData((prevData) => ({...prevData,[name]  : value}));
    }

    const hanndleCheckbox=(event)=>{
        setIschecked(event.target.checked)

    }

    const selectHandleChage=(event)=>{
        setSelectOption(event.target.value)
    }

  return (
    <div >

       <form onSubmit={handleSubmit}>
        <input type="text" name='userName' placeholder='enter username' value={formData.userName} onChange={handleChange}/>
        <input type="text" name='Email' placeholder='enter Email' value={formData.Email} onChange={handleChange}/>
        <input type="password" name='password' placeholder='enter password' value={formData.password} onChange={handleChange}/>
        <label >checkbox</label>
        <input className='mr-6' type="checkbox" checked={ischecked} onChange={hanndleCheckbox}/>

        <select value={seletctOption}  onChange={selectHandleChage}>
            <option value="">selection country</option>
            <option value="somaliland">ssomaliland</option>
            <option value="Djabouti">Djabouti</option>
        </select>
        
        <button className='bg-rose-700 mt-5 p-4 rounded text-white'  type='submit'>submit</button>
        
       </form>

    </div>
  )
}

export default Exercise22