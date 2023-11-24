import Input from "../../components/Input"


const Form = () => {
  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className=" text-4xl font-extrabold">Welcome</div>
        <div className=" text-xl font-light mb-14">Sign up now to get started</div>
        <Input label="Full name" name="name" placeHolder="Enter your full name" clasName="mb-6"/>
        <Input label="Email adress" name="email" placeHolder="Enter your email"clasName="mb-6"/>
        <Input label="Password" type="password" name="password" placeHolder="Enter your Password" clasName="mb-6"/>
    </div>
  )
}

export default Form
