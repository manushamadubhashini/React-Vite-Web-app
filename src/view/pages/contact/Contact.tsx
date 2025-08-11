import "./Contact.css"
import {useForm} from "react-hook-form";
export function Contact() {
    type formData = {
        name : string;
        email :string;
        subject :string;
        message:string;

    }
    const onSubmit = (data : formData) =>{
        console.log("form data submit",data)
        alert(`submit your case ${data.subject}`)
    }
    const {register,handleSubmit,formState :{errors}} = useForm<formData>()
    return (
        <div className="contact-container">
            <div className="form-contnet">
            <h2>Contact Form</h2>
            <h4>please let us know your query</h4>
            <form onSubmit= {handleSubmit(onSubmit)}>
                <label form="name">Name</label>
                <input type="text" {...register(
                    "name" ,{required : "name is required!"}
                )} id="name" name="name" />
                {errors.name ?
                    <span className="error">{errors.name.message}</span>
                    : ""
                }
                <label form="email">Email</label>
                <input type="email" {...register(
                    'email',{required : "Email is required!",
                        pattern : { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message :"invalid email format"
                    }
                    })}
                    id="email" name="email"/>
                {errors.email ?
                    <span className="error">{errors.email.message}</span>
                    : ""
                }
                <label form="subject">Subject</label>
                <input type="text" {...register(
                    "subject",{required : "subject is required!",
                    pattern:{value: /^.{10,30}$/, message : "subject must be in between 10 to 30 character"
                    }}
                )}
                       id="subject" name="subject"/>
                {errors.subject ?
                    <span className="error">{errors.subject.message}</span>
                    : ""
                }
                <label form= "message">Message</label>
                <textarea id= "message" {...register(
                    "message",{required : "message is required!"}
                )} name= "message" rows={10} cols={4}></textarea>
                {errors.message ?
                    <span className="error">{errors.message.message}</span>
                    : ""
                }
                <button className="submit-btn" type="submit">Submit Form</button>
            </form>
            </div>
        </div>
    );
}