import { useState } from "react";
import Title from "../Title";

const initUserData = {
    userName: '',
    phoneNumber: 0,
    userEmail: '',
    userImg: ''

}

const AddUser = () => {
    const [userData, setUserData] = useState(initUserData)

    const handleOnChange = (e) => {
        const { name, value, type } = e.target
        console.log(name, value);
        setUserData((prev) => ({ ...prev, [name]: type == "number" ? Number(value) : value }))
    }
    console.log(userData);

    const btnCls = 'cursor-pointer uppercase font-mono  font-bold py-2 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212] '

    const inputCls = 'cursor-pointer uppercase font-mono bg-white font-bold py-2 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]'

    const inputContainer = 'flex flex-col font-medium gap-2 '

    return (
        <section className="max-w-7xl mx-auto mb-16 p-8 mt-10 ">
            {/* <Title title={'Contact'} /> */}
            <h1 className="text-2xl font-light  w-full mb-10 text-center uppercase font-mono bg-white  py-2 px-4  shadow-[0.0rem_0.25rem_#121212] " >Contact ME </h1>
            <div className="grid grid-cols-2 gap-4">
                <div className={inputContainer}>
                    <label htmlFor="name"> Name </label>
                    <input className={inputCls} onChange={handleOnChange} type="text" name="name" id="name" />
                </div>

                <div className={inputContainer}>
                    <label htmlFor="email">Email </label>
                    <input className={inputCls} onChange={handleOnChange} type="text" name="email" id="email" />
                </div>

                <div className={`${inputContainer} col-span-2`}>
                    <label htmlFor="number">Message </label>
                    {/* <input className={inputCls} onChange={handleOnChange} placeholder="+880" type="text" name="number" id="number" /> */}
                    <textarea className={inputCls} name="message" id=""></textarea>
                </div>

                {/* <div className={inputContainer}>
                    <label htmlFor="userImg">Photo url </label>
                    <input className={inputCls} onChange={handleOnChange} placeholder="Photo url" type="text" name="userImg" id="userImg" />
                </div> */}

            </div>
            <div className=" w-fit mx-auto   pt-10">
                <button className={`${btnCls} bg-lime-400 hover:bg-white px-20 `}>
                    Submit
                </button>
            </div>
        </section>
    );
};

export default AddUser;