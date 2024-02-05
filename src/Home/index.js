import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState, ReactDOM } from 'react'
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
const Home = () => {
    const [formData, setFormData] = useState();
    const [slotidData, setSlotidData] = useState();
    const slotref1 = useRef("");
    const slotref2 = useRef("");
    const slotref3 = useRef("");

    const slotref4 = useRef("");

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(">>", data);
        setFormData(data);
        reset();
        // clear();
    }
    const booking1 = () => {
        console.log("Hr");
        let datas = slotref1.current.id;
        console.log("data", datas);
        setSlotidData(datas);
    }
    const booking2 = () =>{
        console.log("Hr");
        let datas = slotref2.current.id;
        console.log("data", datas);
        setSlotidData(datas);
    }
    const booking3 = () =>{
        console.log("Hr");
        let datas = slotref3.current.id;
        console.log("data", datas);
        setSlotidData(datas);
    }
    const booking4 = () =>{
        console.log("Hr");
        let datas = slotref4.current.id;
        console.log("data", datas);
        setSlotidData(datas);
    }
    // const booking5 = () =>{
    //     console.log("Hr");
    //     let datas = slotref2.current.id;
    //     console.log("data", datas);
    //     setSlotidData(datas);
    // }
    // const booking6 = () =>{
    //     console.log("Hr");
    //     let datas = slotref2.current.id;
    //     console.log("data", datas);
    //     setSlotidData(datas);
    // }
    // const booking7 = () =>{
    //     console.log("Hr");
    //     let datas = slotref.current.id;
    //     console.log("data", datas);
    //     setSlotidData(datas);
    // }
    // const booking8 = () =>{
    //     console.log("Hr");
    //     let datas = slotref.current.id;
    //     console.log("data", datas);
    //     setSlotidData(datas);
    // }
    console.log(errors);
    const book =()=>{
        console.log("hello" , slotidData);
       document.getElementById(slotidData).style="background-color:darkgreen";
       reset();
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Enter Name" {...register("Name", { required: true })} />
                <p>{errors?.Name?.message}</p>
                <input type="password" placeholder="Enter password" {...register("Password",
                    {
                        required: true,
                        pattern: /^[a-z]{2}[A-Z]{1}[0-9]{1}(.*\W){1}.*$/
                    })} />
                <p>{errors?.Password?.message}</p>
                <p>{formData?.Name}</p>
                {(formData?.Password === "22222222" ? "ww" : "")}
                <input type="submit" />
            </form>
            <h3 className="slot-title">Booking Slot</h3>
            <div className="booking-slot-parent">
                <div className="booking-slots-1" id="1" ref={slotref1} onClick={booking1}>
                    {/* <a id="1" ref={slotref1} onClick={booking1}>slot1</a> */}
                    Slot 1
                </div>
                <div className="booking-slots-1" id="2" ref={slotref2} onClick={booking2}>
                    Slot 2
                    {/* <a id="2" ref={slotref2} onClick={booking2}>slot2</a> */}
                </div>
                <div className="booking-slots-1" id="3" ref={slotref3} onClick={booking3}>
                    Slot 3
                    {/* <a id="3" ref={slotref} onClick={booking3}>slot3</a> */}
                </div>
                <div className="booking-slots-1" id="4" ref={slotref4} onClick={booking4}>
                    Slot 4
                    {/* <a id="4" ref={slotref} onClick={booking4}>slot4</a> */}
                </div>
                {/* <div className="booking-slots-1">
                    <a id="5" ref={slotref} onClick={booking5}>slot5</a>
                </div>
                <div className="booking-slots-1">
                    <a id="6" ref={slotref} onClick={booking6}>slot6</a>
                </div>
                <div className="booking-slots-1">
                    <a id="7" ref={slotref} onClick={booking7}>slot7</a>
                </div>
                <div className="booking-slots-1">
                    <a id="8" ref={slotref} onClick={booking8}>slot8</a>
                </div> */}
            </div>
            {(slotidData) ?

                <div className="booking-btn">
                    <button onClick={book}>Proceed to Book</button>
                </div>
                : ""
            }

        </>
        // pattern:/^[a-z]{1}[A-Z]{1}[0-9]{1}(.*\W){1}.*$/ -> this pattern will work as first char in small letter 2 character in Big letter and number and special characters
    )
}

export default Home