import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Form, Input, Button, Select, message, Row, Col, } from 'antd';
import { variables } from '../../../Varaiable';
import { Collapse, Divider } from 'antd';
const { Option } = Select;


const UpdateRegisterForm = () => {
  const [registration, setRegistration] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    fatherName: "",
    fatherCNIC: "",
    email: "",
    phoneNumber: "",
    gender: "",
    parmanentAddress: "",
    postalAddress: "",
    board: "",
    degreeTitle: "",
    obtainedMark: "",
    totalMark: "",
    rollNo: "",
    passingYear: ""
  })
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

const handleNameChange = (event) =>{
  setFormData((prev) => ({...prev, name: event.target.value}));
  console.log(event.target.value, "name");

}
const handleCnicChange = (event) => {
  setFormData((prev) => ({ ...prev, cnic: event.target.value }));
  console.log(event.target.value, "jhakfhkjad");

}
  const handleFatherNameChange = (event) => {
    setFormData((prev) => ({ ...prev, fatherName: event.target.value }))
  }
  const handleFatherCnicChange = (event) => {
    setFormData((prev) => ({ ...prev, fatherCNIC: event.target.value }))
  }
  const handleEmailChange = (event) => {
    setFormData((prev) => ({ ...prev, email: event.target.value }))
  }
  const handlePhoneNumberChange = (event) => {
    setFormData((prev) => ({ ...prev, phoneNumber: event.target.value }))
  }
  const handleGenderChange = (value) => {
    setFormData((prev) => ({ ...prev, gender: value }))
  }
  const handleParmanentAddressChange = (event) => {
    setFormData((prev) => ({ ...prev, parmanentAddress: event.target.value }))
  }
  const handlePostalAddressChange = (event) => {
    setFormData((prev) => ({ ...prev, postalAddress: event.target.value }))
  }
  const handleBoardChange = (value) => {
    setFormData((prev) => ({ ...prev, board: value }))
  }
  const handledegreeTitleChange = (event) => {
    setFormData((prev) => ({ ...prev, degreeTitle: event.target.value }))
  }
  // const handleObtainedMarkChange = (event) => {
  //   setFormData((prev) => ({ ...prev, obtainedMark: event.target.value }))
  // }
  const handleObtainedMarkChange = (event) => {
    const value = event.target.value;
    // Validate if the value is a valid number
    if (!isNaN(value)) {
      setFormData((prev) => ({ ...prev, obtainedMark: value }));
    } else {
      console.error('Invalid obtained mark value:', value);
      // Optionally, you can show a message to the user indicating that the input is invalid
    }
  }
  const handleTotalMarkChange = (event) => {
    setFormData((prev) => ({ ...prev, totalMark: event.target.value }))
  }
  const handleRollNoChange = (event) => {
    setFormData((prev) => ({ ...prev, rollNo: event.target.value }))
  }
  const handlePassingYearChange = (event) => {
    setFormData((prev) => ({ ...prev, passingYear: event.target.value }))
  }

  useEffect(() => {
    // Fetch registration details using the provided ID
    const fetchRegistration = async () => {
      try {
        const response = await axios.get(`${variables.API_URL}Register/${id}`);
        setRegistration(response.data);
        form.setFieldsValue(response.data); // Set initial form values


        setFormData(prevState => ({
          ...prevState,
          board: response.data.board,
          gender: response.data.gender
        }));


      } catch (error) {
        console.error('Failed to fetch registration:', error);
        // Handle error
      }
    };
    fetchRegistration();
  }, [form, id]);

  // const onFinish = async () => {
  //   try {
  //     const response = await axios.put(`${variables.API_URL}Register/${id}`, formData);
  //     if (response.status === 200) {
  //       message.success('Registration updated successfully!');
  //       navigate('/list_student'); // Redirect to registration list
  //     } else {
  //       message.error('Failed to update registration.');
  //     }
  //   } catch (error) {
  //     console.error('Failed to update registration:', error);
  //     message.error('Failed to update registration. Please try again.');
  //   }
  // };
//  debugger
  const onFinish = async (values) => {
    try {
      console.log(values, "restinggggg")
      const updatedData = { ...values, id }; // Include the ID in the request body
      console.log("testing", updatedData)
      const response = await axios.put(`${variables.API_URL}Register/UpdateData?id=${id}`, updatedData);
      console.log(response, "dummy")
      if (response.status === 200) {
        message.success('Registration updated successfully!');
        navigate('/list_student'); // Redirect to registration list
      }
       else {
        message.error('Failed to update registration.');
      }
    } catch (error) {
      console.error('Failed to update registration:', error);
      message.error('Failed to update registration. Please try again.');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      {registration && (
        <div style={{ backgroundColor: "#f0f2f5", padding: "30px", borderRadius: '10px' }}>
          <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '5vh' }}>
            Personal Info
          </h2>
          <Form
            // {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            labelAlign="left"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            // initialValues={{
            //   residence: ['zhejiang', 'hangzhou', 'xihu'],
            //   prefix: '86',
            // }}
            style={{
              marginTop: '20px'
            }}
            scrollToFirstError
          >
            <Row>
              <Col span={11}>
                <Form.Item
                  onChange={handleNameChange}
                  name="name"
                  label="Name"
                  // tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name!',
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col span={11} offset={2} >
                <Form.Item
                  name="cnic"
                  label="CNIC"
                  onChange={handleCnicChange}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your CNIC!',
                    },
                    {
                      pattern: /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/,
                      message: 'Please enter a valid CNIC (XXXXX-XXXXXXX-X)!',
                    },
                  ]}
                  hasFeedback
                >
                  <Input placeholder="Enter CNIC" />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={11}>
                <Form.Item
                  name="fatherName"
                  label="Father Name"
                  onChange={handleFatherNameChange}
                  // tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your nickname!',
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col span={11} offset={2}>
                <Form.Item
                  name="fatherCNIC"
                  label="Father CNIC"
                  onChange={handleFatherCnicChange}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your CNIC!',
                    },
                    {
                      pattern: /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/,
                      message: 'Please enter a valid CNIC (XXXXX-XXXXXXX-X)!',
                    },
                  ]}
                  hasFeedback
                >
                  <Input placeholder="Enter CNIC" />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={11}>
                <Form.Item
                  name="email"
                  label="E-mail"
                  onChange={handleEmailChange}
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col span={11} offset={2}>
                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                  onChange={handlePhoneNumberChange}
                  rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                  <Input placeholder="Phone Number" />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={11}>
                <Form.Item
                  name="gender"
                  label="Gender"
                  onChange={handleGenderChange}
                  rules={[
                    {
                      required: true,
                      message: 'Please select gender!',
                    },
                  ]}
                >
                  <Select placeholder="select your gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={11} offset={2}>
                <Form.Item
                  name="parmanentAddress"
                  label="Parmanent Address:"
                  onChange={handleParmanentAddressChange}
                  // tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your address!',
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={11} >
                <Form.Item
                  name="postalAddress"
                  label="Postal Address:"
                  onChange={handlePostalAddressChange}
                  // tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your address!',
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>


              <Col span={11} offset={2}>

              </Col>


            </Row>
            <hr />
            <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '15vh' }}>
              Educational Info
            </h1>
            {/* <h3 style={{ display: 'flex', backgroundColor: 'whitesmoke', alignItems: 'center', minHeight: '10vh' }}>Mactriculation detail</h3> */}
            {/* <Divider orientation="left"></Divider> */}
            <Collapse
              defaultActiveKey={['1']}
              items={[
                {
                  key: '1',
                  label: 'Matriculation detail',
                  children:
                    <>
                      <Row>
                        <Col span={12}>
                          <Form.Item
                            name="board"
                            label="Board / University"
                            onChange={handleBoardChange}
                            rules={[
                              {
                                required: true,
                                message: 'Please select board!',
                              },
                            ]}
                          >
                            <Select placeholder="select your Board">
                              <Option value="lahoreBoard">BISE Lahore</Option>
                              <Option value="rawalpindiBoard">BISE Rawalpindi</Option>
                              <Option value="peshawarBoard">BISE Peshawar</Option>
                              <Option value="educationUniversity">Education University</Option>
                              <Option value="punjabUniversity">Punjab University</Option>
                              <Option value="allamaIqbalOpen">Allama Iqbal Open University</Option>
                            </Select>
                          </Form.Item>
                        </Col>

                        <Col span={11} offset={1} >
                          <Form.Item
                            name="degreeTitle"
                            label="Degree Title"
                            onChange={handledegreeTitleChange}
                            // tooltip="What do you want others to call you?"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your degree title!',
                                whitespace: true,
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Row>
                        <Col span={12}>
                          <Form.Item
                            name="obtainedMark"
                            label="Obtained Mark/CGPA"
                            onChange={handleObtainedMarkChange}
                            rules={[
                              {
                                required: true,
                                message: 'Please input Obtained Mark!',
                              },
                              {
                                pattern: /^\d+(\.\d+)?$/,
                                message: 'Please enter a valid number!',
                              },
                            ]}
                            hasFeedback
                          >
                            <Input placeholder="Enter a number" />
                          </Form.Item>

                        </Col>

                        <Col span={11} offset={1} >
                          <Form.Item
                            name="totalMark"
                            label="Total Mark/CGPA"
                            onChange={handleTotalMarkChange}
                            rules={[
                              {
                                required: true,
                                message: 'Please input Total Mark!',
                              },
                              {
                                pattern: /^\d+(\.\d+)?$/,
                                message: 'Please enter a valid number!',
                              },
                            ]}
                            hasFeedback
                          >
                            <Input placeholder="Enter a number" />
                          </Form.Item>

                        </Col>
                      </Row>

                      <Row>
                        <Col span={12}>
                          <Form.Item
                            name="rollNo"
                            label="Roll NO"
                            onChange={handleRollNoChange}
                            rules={[
                              {
                                required: true,
                                message: 'Please input Roll No!',
                              },
                              {
                                pattern: /^\d+(\.\d+)?$/,
                                message: 'Please enter a valid number!',
                              },
                            ]}
                            hasFeedback
                          >
                            <Input placeholder="Enter a number" />
                          </Form.Item>
                        </Col>

                        <Col span={11} offset={1} >
                          <Form.Item
                            name="passingYear"
                            label="Passing Year"
                            onChange={handlePassingYearChange}
                            rules={[
                              {
                                required: true,
                                message: 'Please input your Passing Year!',
                              },
                              {
                                pattern: /^(0|[1-9]\d{0,3})$/,
                                message: 'Please enter a valid Year (YYYY)!',
                              },
                            ]}
                            hasFeedback
                          >
                            <Input placeholder="____" />
                          </Form.Item>
                        </Col>
                      </Row>
                    </>
                },
              ]}
            />
            <Divider orientation="left"></Divider>
            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '20vh' }}>
              <Col >
                <Form.Item >
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      )}
    </div>
  );
};

export default UpdateRegisterForm;
