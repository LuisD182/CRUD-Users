import React from 'react';
import axios from 'axios';

const UserList = ({ usersList, selectUser, getUsers }) => {
    
    const orderedUsers = usersList.sort((a, b) => a.first_name.localeCompare(b.first_name));

    const deleteUser = (currentUser) => {
        axios
        .delete(`https://users-crud.academlo.tech/users/${currentUser.id}/`)
        .then(() => {
            getUsers()
        })
    }

    return (
        <div  className='general-UserList'>
            <div >
            {orderedUsers.map((currentUser) => (
                <div key={currentUser.id} className='userList-container'  >
                   
                    <div >
                        <div className='userList-text' >
                        <h3>{currentUser.first_name}, {currentUser.last_name}</h3>
                            <h5>{currentUser.email}</h5>
                            <h4><i className='bx bx-cake bx-sm'></i> {currentUser.birthday}</h4>
                        </div>
                    </div>
                    <div className='userList-btn'>
                            <div  onClick={() => selectUser(currentUser)}><i className='bx bxs-edit-alt bx-sm'></i></div>
                            <div  onClick={() => deleteUser(currentUser)}><i className='bx bx-trash bx-sm'></i></div>
                        </div>
                </div>
            ))
            }
            </div>
        </div>
    );
};

export default UserList;