import React, { useState } from "react";
import { postData } from "../services/AccessAPI";

const CreateRole = ({ history }) => {
    const [roleName, setRoleName] = useState('');
    const [loading, setLoading] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();

        let roleObj = {
            roleName: roleName
        }

        postData('api/Role/Create', roleObj).then((result) => {
            let responseJson = result;

            if (responseJson) {
                history.push('/admin/roles');
            }
        });
    }

    const onChange = (e) => {
        setRoleName(e.target.value);
    }

    return (
        <div className="row">
            <div className="col-md-4">
                <h3>Create new role</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label className="control-label">Role Name: </label>
                        <input className="form-control" type="text" name="roleName" value={roleName} onChange={onChange}></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Role" className="btn btn-primary"></input>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default CreateRole;
