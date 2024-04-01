import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getData } from "../services/AccessAPI";

const Roles = () => {
    const history = useHistory();
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);

    const onRoleCreate = () => {
        history.push('/admin/role/create');
    }

    const onRoleEdit = (id) => {
        history.push('/admin/role/edit/' + id);
    }

    const onRoleDelete = (id) => {
        history.push('/admin/role/delete/' + id);
    }

    useEffect(() => {
        getAllRoles();
    }, []);

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

    const populateRolesTable = (roles) => {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Roles</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map(role => (
                        <tr key={role.id}>
                            <td>{role.roleName}</td>
                            <td>
                                <button onClick={() => onRoleEdit(role.id)} className="btn btn-success">Edit</button>
                                <button onClick={() => onRoleDelete(role.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    return (
        <div>
            <h4>List of roles</h4>
            <button onClick={onRoleCreate} className="btn btn-primary">Create new role</button>
            {loading ? (
                <p>
                    <em>Loading ... </em>
                </p>
            ) : (
                populateRolesTable(roles)
            )}
        </div>
    );
}

export default Roles;
