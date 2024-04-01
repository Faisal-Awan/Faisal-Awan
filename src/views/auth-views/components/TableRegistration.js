
import { variables } from '../../../Varaiable';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Popconfirm, message } from 'antd';
import { useNavigate } from "react-router-dom";


const StudentRegistrationList = () => {
    const [registrations, setRegistrations] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetchRegistrations();
    }, []);

    const fetchRegistrations = async () => {
        try {
            const response = await axios.get(`${variables.API_URL}Register`);
            setRegistrations(response.data);
        } catch (error) {
            console.error('Failed to fetch registrations:', error);
            message.error('Failed to fetch registrations. Please try again.');
        }
    };

    // const handleUpdate = (id) => {
        
    //     // Implement logic to edit registration with the given id
    // };


    const handleDelete = async (id) => {
        console.log(id)
        alert(id)
        debugger
        try {
            await axios.delete(`${variables.API_URL}Register/${id}`);
            const updatedRegistrations = registrations.filter(registration => registration.id !== id);
            setRegistrations(updatedRegistrations);
            message.success('Registration deleted successfully!');
        } catch (error) {
            console.error('Failed to delete registration:', error);
            message.error('Failed to delete registration. Please try again.');
        }
    };


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'CNIC',
            dataIndex: 'cnic',
            key: 'cnic',
        },
        {
            title: 'Father Name',
            dataIndex: 'fatherName',
            key: 'fatherName',
        },
        {
            title: 'Father CNIC',
            dataIndex: 'fatherCNIC',
            key: 'fatherCnic',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <span>
                    <Button type="primary" onClick={() => navigate(`/update_student/${record.id}`)}>Edit</Button>
                    <Popconfirm
                        title="Are you sure to delete this registration?"
                        onConfirm={() => handleDelete(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="danger" style={{ marginLeft: 8 }}>Delete</Button>
                    </Popconfirm>
                </span>
            ),
        },
    ];

    return (
        <div>
            <h2>Student Registration List</h2>
            <Table columns={columns} dataSource={registrations} rowKey="id" />
        </div>
    );
};

export default StudentRegistrationList;
