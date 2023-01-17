import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"


const UsersForm = ({ getUsers, userSelected, selectUser }) => {

    const { handleSubmit, register, reset } = useForm();

    const emptyUser = {
        first_name: "",
        lasst_name: "",
        email: "",
        password: "",
        birthday: ""
    }
    useEffect(() => {
        if (userSelected) {
            reset(userSelected);
        } else {
            reset(emptyUser);
        }
    }, [userSelected]);

    const submit = (data) => {
        if (userSelected) {
            axios
                .put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
                .then(() => {
                    getUsers();
                    selectUser(null);
                });
        } else {
            axios
                .post("https://users-crud.academlo.tech/users/", data)
                .then(() => {
                    getUsers();
                    reset(emptyUser);
                });
        }
    };



    return (
        <div >
            <div >
                <form onSubmit={handleSubmit(submit)}
                    className='general-form'>
                    <h2>New user</h2>
                    <div className='row-form' >
                        <label htmlFor="first_name"><i className='bx bx-user bx-sm'></i></label>
                        <div className='names-input'>
                            <input className='input-container' required type="text"
                                id="first_name" placeholder='first name' {...register("first_name")} />
                            <input className='input-container' required type="text"
                                id="last_name" placeholder='last name' {...register("last_name")} />
                        </div>
                    </div>
                    <div className='row-form'>
                        <label htmlFor="email"><i className='bx bx-envelope bx-sm'></i></label>
                        <input className='input-container' required type="email"
                            id="email" placeholder='email' {...register("email")} />
                    </div>
                    <div className='row-form'>
                        <label htmlFor="password"><i className='bx bx-lock-alt bx-sm' ></i></label>
                        <input className='input-container' required type="password"
                            id="password" placeholder='password' {...register("password")} />
                    </div>
                    <div className='row-form'>
                        <label htmlFor="birthday"><i className='bx bx-cake bx-sm'></i></label>
                        <input className='input-container' required type="date"
                            id="birthday" {...register("birthday")} />
                    </div>
                    <button className='btn-Upload'> {userSelected ?  "Edit user"  : "Upload"}</button>
                </form>
            </div>
        </div>
    );
};

export default UsersForm;