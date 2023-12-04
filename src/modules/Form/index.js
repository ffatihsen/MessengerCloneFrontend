import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"
import {useNavigate} from "react-router-dom"

const Form = ({
    isSignInPage=true
}) => {

    const [data,setData] = useState({
        ...(isSignInPage && {
            fullName :""
        }),
        email :"",
        password:""
    })

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("data->",data);
        const res = await fetch(`http://localhost:8000/api/${isSignInPage ? "login" : "register"}`, {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(data)
        });
        

        if(res.status  === 400){
            alert("Invalid credentials")
        }
        else{
            const resData = await res.json();
            if(resData.token){
                localStorage.setItem("user:token",resData.token);
                localStorage.setItem("user:detail",JSON.stringify(resData.user));
                navigate("/");
            }

        }
        


    }

  return (
    <div className="bg-light h-screen flex items-center justify-center">
            <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
            <div className=" text-4xl font-extrabold">Welcome {isSignInPage && "Back" } </div>
            <div className=" text-xl font-light mb-14"> {isSignInPage ? "Sign up now to get explored" : "Sign up now to get started"} </div>
            <form className="flex flex-col items-center w-full" onSubmit={(e)=>{handleSubmit(e);}} >
                { !isSignInPage && <Input label="Full name" name="name" placeHolder="Enter your full name" className="mb-6" value={data.fullName} onChange={(e) => {setData({...data, fullName: e.target.value})}}  />}
                <Input label="Email adress" type="email" name="email" placeHolder="Enter your email"className="mb-6" value={data.email} onChange={(e) => {setData({...data, email: e.target.value})}} />
                <Input label="Password" type="password" name="password" placeHolder="Enter your Password" className="mb-14" value={data.password} onChange={(e) => {setData({...data, password: e.target.value})}} />
                <Button type="submit" label= {isSignInPage ? "Sign in" : "Sign up"} className="mb-2" />
            </form>
            <div> {isSignInPage ? "Didn't have an account ?" : "Already have an account ?"} <span className=" text-primary cursor-pointer underline" onClick={()=> navigate(`/user/${isSignInPage ? 'sign_up' : 'sign_in'}`) }> {isSignInPage ? "Sign up" : "Sign in"} </span></div>
        </div>

    </div>

  )
}

export default Form
