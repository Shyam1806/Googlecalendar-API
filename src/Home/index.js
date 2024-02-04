import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const Home = () => {
    const [formData , setFormData] = useState();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(">>", data);
          setFormData(data);
          reset();
        // clear();
    }
    console.log(errors);
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Enter Name" {...register("Name", { required: true })} />
                <p>{errors?.Name?.message}</p>
                <input type="password" placeholder="Enter password" {...register("Password",
                    {
                        required: true, 
                        pattern:/^[a-z]{2}[A-Z]{1}[0-9]{1}(.*\W){1}.*$/
                    })} />
                   <p>{errors?.Password?.message}</p> 
                   <p>{formData?.Name}</p>
                   {(formData?.Password === "22222222"? "ww" :"")}
                <input type="submit" />
            </form> 

        </>
// pattern:/^[a-z]{1}[A-Z]{1}[0-9]{1}(.*\W){1}.*$/ -> this pattern will work as first char in small letter 2 character in Big letter and number and special characters
    )
}

export default Home