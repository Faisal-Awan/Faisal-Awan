import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { deleteData, getData } from "../services/AccessAPI";

const DeleteRole = () => {
    const { id } = useParams();
    const history = useHistory();

    const [roleName, setRoleName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData('api/Role/' + id).then(
            (result) => {
                console.log("Role for edit: ");
                console.log(result);
                if (result) {
                    setRoleName(result.roleName);
                    setLoading(false);
                }
            }
        );
    }, [id]);

    const onCancel = () => {
        history.push('/admin/roles');
    }

    const onConfirmation = (e) => {
        e.preventDefault();

        deleteData('api/Role/Delete/' + id).then((result) => {
            let responseJson = result;
            if (responseJson) {
                console.log(responseJson);
                history.push('/admin/roles');
            }
        });
    }

    return (
        <div>
            <h2>::Delete role::</h2>
            <h3>Are you sure you want to delete this?</h3>
            <div>
                <h4>Role Information</h4>
                <dl className="row">
                    <dt className="col-sm-2">
                        Role Name:
                    </dt>
                    <dd className="col-sm-10">
                        {roleName}
                    </dd>
                </dl>

                <form onSubmit={onConfirmation}>
                    <button type="submit" className="btn btn-danger">Delete</button> |
                    <button onClick={onCancel} className="btn btn-primary">Back to List</button>
                </form>
            </div>
        </div>
    );
}

export default DeleteRole;
