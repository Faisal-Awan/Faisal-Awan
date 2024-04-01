import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getData, putData } from "../services/AccessAPI";

const EditRole = () => {
    const { id } = useParams();
    const history = useHistory();

    const [roleName, setRoleName] = useState('');

    useEffect(() => {
        getData('api/Role/' + id).then(
            (result) => {
                if (result) {
                    setRoleName(result.roleName);
                }
            }
        );
    }, [id]);

    const onChange = (e) => {
        setRoleName(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        let roleObj = {
            id: id,
            roleName: roleName
        }

        putData('api/Role/Edit/' + id, roleObj).then((result) => {
            let responseJson = result;
            if (responseJson) {
                console.log(responseJson);
                history.push('/admin/roles');
            }
        });
    }

    const onUpdateCancel = () => {
        history.push('/admin/roles');
    }

    return (
        <div className="row">
            <div className="col-md-4">
                <h3>Edit Role</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label className="control-label">Role Name: </label>
                        <input className="form-control" type="text" value={roleName} onChange={onChange} name="roleName" />
                    </div>

                    <div className="form-group">
                        <button onClick={onUpdateCancel} className="btn btn-default">Cancel</button>
                        <input type="submit" value="Edit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditRole;
