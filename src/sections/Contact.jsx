import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../Components/Alert";
import { Particles } from "../Components/Particles";

const Contact = () => {

    const [formData,setFormData]=useState({name:"",email:"",message:""});
    const {name,email,message}=formData;
    const [isLoading,setIsLoading]=useState(false);
    const [showAlert,setAlert]=useState(false);
    const [alertType,setAlertType]=useState("success");
    const [alertMessage,setAlertMessage]=useState("");

    const onChangeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const showAlertMessage=(type,message)=>{
         setAlert(true);
           setAlertType(type);
           setAlertMessage(message);
           setTimeout(()=>{
           setAlert(false); 
           },4000)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
       setIsLoading(true);
       try{
        
           await emailjs.send("service_rwlzhaj","template_0rb8qad",{
               from_name:name,
               to_name:"Aju",
               from_email:email,
               to_email:"ajmalcm22@gmail.com",
               message:message
           },"chOHFkShWcVtoJPfv")
           setIsLoading(false);
           setFormData({name:"",email:"",message:""});
          showAlertMessage("Success","You'r message have been sent")
       }
       catch(err)
       {
        setIsLoading(false);
        console.log(err);
        showAlertMessage("danger","Something went wrong")
       }
    }

  return (
    <section className="relative flex items-center c-space section-spacing" id="contact">
     <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    {
        showAlert && <Alert type={alertType} text={alertMessage}/>
    }
        <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="text-heading">Lets's Talk</h2>
            <p className="font-normal text-neutral-400">Wheathet you're looking  to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help</p>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
            <label htmlFor="name" className="field-label">
                Full Name
            </label>
            <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={onChangeHandler}
                className="field-input field-input-focus"
                placeholder="John Doe"
                autoComplete="name"
                required
            />
            </div>
            <div className="mb-5">
            <label htmlFor="email" className="field-label">
                Email
            </label>
            <input
                id="email"
                name="email"
                value={email}
                onChange={onChangeHandler}
                type="email"
                className="field-input field-input-focus"
                placeholder="JohnDoe@gmail.com"
                autoComplete="email"
                required
            />
            </div>
            <div className="mb-5">
            <label htmlFor="message" className="field-label">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                value={message}
                onChange={onChangeHandler}
                type="text"
                className="field-input field-input-focus"
                placeholder="Share your thoughts..."
                autoComplete="message"
                rows="4"
                required
            />
            </div>
            <button className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation" type="submit">{!isLoading ? "Send":"Sending"}</button>
        </form>

        </div>
    </section>
  )
}

export default Contact