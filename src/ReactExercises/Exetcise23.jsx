import React, { useState } from 'react'

const Exercise23 = () => {
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
    <div className='w-[300px] h-[400px] p-5 text-black shadow-2xl' >
         <h1>Developer application Form </h1>
       <form  onSubmit={handleSubmit}>
        <label >FullName</label>
        <input type="text" name='userName' placeholder='enter your full name' value={formData.userName} onChange={handleChange}/><br />
        <label className='mr-6'> Email</label>
        <input  type="text" name='Email' placeholder='enter your Email' value={formData.Email} onChange={handleChange}/><br />
        <label >Password</label>
        <input type="password" name='password' placeholder='enter your password' value={formData.password} onChange={handleChange}/><br />
        <label >Role</label><br />
        <select value={seletctOption}  onChange={selectHandleChage}>
    
            <option value="frontend">frontend developer</option>
            <option value="backtend">backtend developer</option>
            <option value="fullStack">full stack developer</option>
            <option value="ul/ux">ul/ux developer</option>
        </select><br />
        <label>skills</label><br />
        <input className='mr-6' type="checkbox" checked={ischecked} onChange={hanndleCheckbox}/><label >java</label><br />
        <input className='mr-6' type="checkbox" checked={ischecked} onChange={hanndleCheckbox}/><label >typeScrip</label><br />
        <input className='mr-6' type="checkbox" checked={ischecked} onChange={hanndleCheckbox}/><label >pyton</label><br />
        <input className='mr-6' type="checkbox" checked={ischecked} onChange={hanndleCheckbox}/><label >ul Design</label><br />
        <input className='mr-6' type="checkbox" checked={ischecked} onChange={hanndleCheckbox}/><label >full sack</label><br />

        
        <button className='bg-rose-700 mt-5 p-2 rounded text-white w-[250px]'  type='submit'>submit application</button>
        
       </form>

    </div>
  )
}

export default Exercise23