import { useForm } from "react-hook-form"


const Exercise24Form = () => {
  const {register, handleSubmit,formState:{errors}} = useForm();
   console.log(errors.userName)
   console.log(errors.Email)
   console.log(errors.password)

  const onsubmit=(data)=>{
    console.log(data)
   

  }
  return (
    <div className='min-h-screen'>
     
       <form className="w-[400px] h-[600px] bg-green-200  p-7 rounded-lg m-8" onSubmit={handleSubmit(onsubmit)}>
         <h1 className="flex justify-center m-4 font-bold text-3xl">Form Registration</h1>
        <label >Username:</label>
        <input className="border-2" type="text" {...register('userName',{required: 'userName is required'})}/>
        {errors.userName && <p className="text-red-500">{errors.userName.message}</p>}
        <br />
        <label >Email:</label>
        <input className="border-2" type="Email" {...register('Email' ,{required:'Email is required'})} />
        {errors.Email && <p className="text-red-500">{errors.Email.message}</p>}
        
        <br />
        <label >Password:</label>
        <input className="border-2" type="password"   {...register('password',{required:'password is required'})}/>
        <br />
        {errors.password && <p className=" text-red-400">{errors.password.message}</p>}

       
        <button type="submit" className="bg-red-600 rounded-lg p-2 text-white ml-4 mt-4">submit</button>
       </form>

    
    </div>
  )
}

export default Exercise24Form