import React, { useState, useEffect } from "react";
import { getData, putData } from "../services/AccessAPI";
import RoleList from "./RoleList";

const UsersRole = () => {
    const [userId, setUserId] = useState('');
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [userRoles, setUserRoles] = useState([]);
    const [roles, setRoles] = useState([]);
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        let userData = {
            userName: userName,
            roles: userRoles
        }
        putData('api/User/EditUserRoles', userData).then((result) => {
            let responseJson = result;
            if (responseJson) {
                setMsg("User's roles updated successfully!");
            }
        });
    }

    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            if (!userRoles.includes(event.target.value)) {
                setUserRoles(prevState => [...prevState, event.target.value]);
            }
        } else {
            setUserRoles(prevState => prevState.filter(roleName => roleName !== event.target.value));
        }
    }

    const onChange = (e) => {
        setUserName(e.target.value);
    }

    const onSearch = (userName) => {
        getData('api/User/GetUserDetailsByUserName/' + userName).then(
            (result) => {
                if (result) {
                    setUserRoles(result.roles);
                    setFullName(result.fullName);
                    setUserName(result.userName);
                    setLoading(false);
                }
            }
        );
    }

    const getAllRoles = () => {
        getData('api/Role/GetAll').then(
            (result) => {
                if (result) {
                    setRoles(result);
                    setLoading(false);
                }
            }
        );
    }

    useEffect(() => {
        getAllRoles();
    }, []);

    const renderRoleList = () => {
        return (
            <RoleList roles={roles} userRoles={userRoles} onChange={handleCheckboxChange} />
        );
    };

    return (
        <div>
            <h3>Users Role</h3>
            <div className="input-group">
                <input className="col-md-3" type="text" name="userName" placeholder="Enter user name" value={userName} onChange={onChange}></input>
                <span class="input-group-addon">&nbsp;</span>
                <button className="btn btn-primary" onClick={() => onSearch(userName)}>
                    Search
                </button>
            </div>
            <label>Full Name: {fullName}</label>
            <label className="col-md-4">User Name: {userName}</label>
            <hr></hr>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    {renderRoleList()}
                </div>
                <div className="form-group">
                    <input type="submit" value="Save" className="btn btn-primary"></input>
                </div>
            </form>
            <label>{msg}</label>
        </div>
    );
}

export default UsersRole;
