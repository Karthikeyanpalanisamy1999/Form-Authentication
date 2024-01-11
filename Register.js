import React, { useState } from "react"


function Register() {
    const [name,setName] = useState();
    const [email,setEmail] =useState();
    const [mobile,setmobile] =useState();
    const [password,setPassword]=useState();
    const [confirm,setConfirm] = useState(); 
    const handleClick=(e)=>{
        
            e.preventDefault();
        let array1=JSON.parse(localStorage.getItem('k')) || [];

        let array2={
            name:name, email:email,mobile:mobile,password:password,confirm:confirm
        }
        array1.push(array2);
        localStorage.setItem("k",JSON.stringify(array1))

        if(password===confirm)
        {
            alert("Register successfully")
            window.location.href='/'
        }
        else
        {
            alert("password not match")
        }
    }
  return (
    <div className="d-flex  img1 vh-100 justify-content-center align-items-center">
      <div className=" w-50 bg-light rounded-2 p-5">
        <form onSubmit={handleClick}>
            <div className=" ">
                <label className="ms-3 mt-2">UserName<span className="text-danger">*</span></label>
                <input className="form-control ms-3" type="text" required placeholder="Enter Username"
                onInput={(e)=>setName(e.target.value)} value={name}></input>
            </div>
            <div>
                <label className="ms-2 mt-2">Email<span className="text-danger">*</span></label>
                <input className="form-control ms-3" type="email" required placeholder="Enter email"
                onInput={(e)=>setEmail(e.target.value)} value={email}></input>
            </div>
            <div>
                <label className="ms-2 mt-2">Mobile.No</label>
                <input className="form-control ms-3" type="text" placeholder="Enter mobile number"
                onInput={(e)=>setmobile(e.target.value)} value={mobile}></input>
            </div>
            <div>
                <label className="ms-2">Password<span className="text-danger">*</span></label>
                <input className="form-control ms-3" type="password" required placeholder="Enter password"
                onInput={(e)=>setPassword(e.target.value)} value={password}></input>
            </div>
            <div>
                <label className="ms-2 mt-2">ConfirmPassword<span className="text-danger">*</span></label>
                <input className="form-control ms-3" type="password" required placeholder="Enter confirm password"
                onInput={(e)=>setConfirm(e.target.value)} value={confirm}></input>
            </div>
            <button className="btn btn-success ms-3 mt-3">Register</button>
        </form>
      </div>
    </div>
  )
};

export default Register; 
