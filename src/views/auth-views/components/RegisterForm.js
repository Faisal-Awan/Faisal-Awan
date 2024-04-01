// eslint-disable-next-line
import React, { useState } from 'react';

import { variables } from '../../../Varaiable';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  message
} from 'antd';
import { Collapse, Divider } from 'antd';
const { Option } = Select;

const RegisterForm = () => {
  const [form] = Form.useForm();



  const navigate = useNavigate();
  const onFinish = async (values) => {


    // Convert DOB to the desired format
    // const dob = new Date(values.dob);
    // const dob = (values.dob) ? new Date(values.dob).toISOString() : null;
    // // values.dob = dob.toLocaleDateString('en-GB'); // Assuming 'DD/MM/YYYY' format

    // console.log('Received values:', values);
    // try {
    //   const response = await axios.post(`${variables.API_URL}Register/Register`, values);
    //   // Handle response
    // } catch (error) {
    //   // Handle error
    // }


    values.id = 0;
    console.log('Received values:', values);
    try {
      // debugger;
      // Make an API call to register the user
      const response = await axios.post(`${variables.API_URL}Register`, values);

      if (response.status === 201) {
        // Registration successful
        message.success('Registration successful!');
        navigate('/sidenav');
      } else {
        // Handle other status codes if needed
        message.error('Registration failed.');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle validation errors
        const { errors } = error.response.data;

        // Display a message for each validation error
        Object.keys(errors).forEach((key) => {
          const errorMessage = errors[key].join(' ');
          message.error(`${key}: ${errorMessage}`);
        });
      } else {
        console.error('Registration failed:', error.response?.data || error.message);
        message.error('Registration failed. Please try again.');
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


   return (
    <>
      <div style={{ backgroundColor: "#f0f2f5", padding: "30px" , borderRadius: '10px'}}>
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
              {/* <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                  {
                    pattern: /^[0-9]{1,2}$/, // Adjust the pattern based on your specific requirements
                    message: 'Please enter a valid phone number (0-15)!',
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item> */}
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
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
              {/* <Form.Item
                name="dob"
                label="Date of Birth"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Date of Birth!',
                  },
                  {
                    pattern: /^(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/\d{4}$/,
                    message: 'Please enter a valid Date of Birth (DD/MM/YYYY)!',
                  },
                ]}
                hasFeedback
              >
                <Input placeholder="__/__/____" />
              </Form.Item> */}
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

          {/* <Row>
            <Col span={12}>
              <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item
                      name="captcha"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: 'Please input the captcha you got!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Button>Get captcha</Button>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
            <Col span={12}>

            </Col>
          </Row> */}
          {/* <Row >
            <Col span={24} >
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                  },
                ]}
              // {...tailFormItemLayout}
              >
                <Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>
              </Form.Item>
            </Col>
          </Row> */}
          <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '20vh' }}>
            <Col >
              <Form.Item >
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};
export default RegisterForm;








          // <Collapse
          //   items={[
          //     {
          //       key: '2',
          //       label: 'Intermediate detail',
          //       children:
          //         <>
          //           <Row>
          //             <Col span={12}>
          //               <Form.Item
          //                 name="interBoardUniversity"
          //                 label="Board / University"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please select board!',
          //                   },
          //                 ]}
          //               >
          //                 <Select placeholder="select your Board">
          //                   <Option value="lahoreBoard">BISE Lahore</Option>
          //                   <Option value="rawalpindiBoard">BISE Rawalpindi</Option>
          //                   <Option value="peshawarBoard">BISE Peshawar</Option>
          //                   <Option value="educationUniversity">Education University</Option>
          //                   <Option value="punjabUniversity">Punjab University</Option>
          //                   <Option value="allamaIqbalOpen">Allama Iqbal Open University</Option>
          //                 </Select>
          //               </Form.Item>
          //             </Col>

          //             <Col span={11} offset={1} >
          //               <Form.Item
          //                 name="interDegreeTitle"
          //                 label="Degree Title"
          //                 // tooltip="What do you want others to call you?"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input your degree title!',
          //                     whitespace: true,
          //                   },
          //                 ]}
          //               >
          //                 <Input />
          //               </Form.Item>

          //             </Col>
          //           </Row>

          //           <Row>
          //             <Col span={12}>
          //               <Form.Item
          //                 name="interObtainedMark"
          //                 label="Obtained Mark/CGPA"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input Obtained Mark!',
          //                   },
          //                   {
          //                     pattern: /^\d+(\.\d+)?$/,
          //                     message: 'Please enter a valid number!',
          //                   },
          //                 ]}
          //                 hasFeedback
          //               >
          //                 <Input placeholder="Enter a number" />
          //               </Form.Item>

          //             </Col>

          //             <Col span={11} offset={1} >
          //               <Form.Item
          //                 name="interTotalMark"
          //                 label="Total Mark/CGPA"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input Total Mark!',
          //                   },
          //                   {
          //                     pattern: /^\d+(\.\d+)?$/,
          //                     message: 'Please enter a valid number!',
          //                   },
          //                 ]}
          //                 hasFeedback
          //               >
          //                 <Input placeholder="Enter a number" />
          //               </Form.Item>

          //             </Col>
          //           </Row>
                    
          //           <Row>
          //             <Col span={12}>
          //               <Form.Item
          //                 name="interRollNo"
          //                 label="Roll NO"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input Roll No!',
          //                   },
          //                   {
          //                     pattern: /^\d+(\.\d+)?$/,
          //                     message: 'Please enter a valid number!',
          //                   },
          //                 ]}
          //                 hasFeedback
          //               >
          //                 <Input placeholder="Enter a number" />
          //               </Form.Item>
          //             </Col>

          //             <Col span={11} offset={1} >
          //               <Form.Item
          //                 name="interPassingYear"
          //                 label="Passing Year"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input your Passing Year!',
          //                   },
          //                   {
          //                     pattern: /^(0|[1-9]\d{0,3})$/,
          //                     message: 'Please enter a valid Year (YYYY)!',
          //                   },
          //                 ]}
          //                 hasFeedback
          //               >
          //                 <Input placeholder="____" />
          //               </Form.Item>
          //             </Col>
          //           </Row>
          //         </>
          //     },
          //   ]}
          // />
          // <Divider orientation="left"></Divider>

          // <Collapse
          //   items={[
          //     {
          //       key: '3',
          //       label: 'Bacholers detail',
          //       children:
          //         <>
          //           <Row>
          //             <Col span={12}>
          //               <Form.Item
          //                 name="bacholerBoardUniversity"
          //                 label="Board / University"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please select board!',
          //                   },
          //                 ]}
          //               >
          //                 <Select placeholder="select your Board">
          //                   <Option value="lahoreBoard">BISE Lahore</Option>
          //                   <Option value="rawalpindiBoard">BISE Rawalpindi</Option>
          //                   <Option value="peshawarBoard">BISE Peshawar</Option>
          //                   <Option value="educationUniversity">Education University</Option>
          //                   <Option value="punjabUniversity">Punjab University</Option>
          //                   <Option value="allamaIqbalOpen">Allama Iqbal Open University</Option>
          //                 </Select>
          //               </Form.Item>
          //             </Col>

          //             <Col span={11} offset={1} >
          //               <Form.Item
          //                 name="bacholerDegreeTitle"
          //                 label="Degree Title"
          //                 // tooltip="What do you want others to call you?"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input your degree title!',
          //                     whitespace: true,
          //                   },
          //                 ]}
          //               >
          //                 <Input />
          //               </Form.Item>

          //             </Col>
          //           </Row>

          //           <Row>
          //             <Col span={12}>
          //               <Form.Item
          //                 name="bacholerObtainedMark"
          //                 label="Obtained Mark/CGPA"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input Obtained Mark!',
          //                   },
          //                   {
          //                     pattern: /^\d+(\.\d+)?$/,
          //                     message: 'Please enter a valid number!',
          //                   },
          //                 ]}
          //                 hasFeedback
          //               >
          //                 <Input placeholder="Enter a number" />
          //               </Form.Item>

          //             </Col>

          //             <Col span={11} offset={1} >
          //               <Form.Item
          //                 name="bacholerTotalMark"
          //                 label="Total Mark/CGPA"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input Total Mark!',
          //                   },
          //                   {
          //                     pattern: /^\d+(\.\d+)?$/,
          //                     message: 'Please enter a valid number!',
          //                   },
          //                 ]}
          //                 hasFeedback
          //               >
          //                 <Input placeholder="Enter a number" />
          //               </Form.Item>

          //             </Col>
          //           </Row>
                    
          //           <Row>
          //             <Col span={12}>
          //               <Form.Item
          //                 name="bacholerRollNo"
          //                 label="Roll NO"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input Roll No!',
          //                   },
          //                   {
          //                     pattern: /^\d+(\.\d+)?$/,
          //                     message: 'Please enter a valid number!',
          //                   },
          //                 ]}
          //                 hasFeedback
          //               >
          //                 <Input placeholder="Enter a number" />
          //               </Form.Item>
          //             </Col>

          //             <Col span={11} offset={1} >
          //               <Form.Item
          //                 name="bacholerPassingYear"
          //                 label="Passing Year"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input your Passing Year!',
          //                   },
          //                   {
          //                     pattern: /^(0|[1-9]\d{0,3})$/,
          //                     message: 'Please enter a valid Year (YYYY)!',
          //                   },
          //                 ]}
          //                 hasFeedback
          //               >
          //                 <Input placeholder="____" />
          //               </Form.Item>
          //             </Col>
          //           </Row>
          //         </>
          //     },
          //   ]}
          // />
          // <Divider orientation="left"></Divider>

          // <Collapse
          //   items={[
          //     {
          //       key: '4',
          //       label: 'Master detail',
          //       children:
          //         <>
          //           <Row>
          //             <Col span={12}>
          //               <Form.Item
          //                 name="masterBoardUniversity"
          //                 label="Board / University"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please select board!',
          //                   },
          //                 ]}
          //               >
          //                 <Select placeholder="select your Board">
          //                   <Option value="lahoreBoard">BISE Lahore</Option>
          //                   <Option value="rawalpindiBoard">BISE Rawalpindi</Option>
          //                   <Option value="peshawarBoard">BISE Peshawar</Option>
          //                   <Option value="educationUniversity">Education University</Option>
          //                   <Option value="punjabUniversity">Punjab University</Option>
          //                   <Option value="allamaIqbalOpen">Allama Iqbal Open University</Option>
          //                 </Select>
          //               </Form.Item>
          //             </Col>

          //             <Col span={11} offset={1} >
          //               <Form.Item
          //                 name="masterDegreeTitle"
          //                 label="Degree Title"
          //                 // tooltip="What do you want others to call you?"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input your degree title!',
          //                     whitespace: true,
          //                   },
          //                 ]}
          //               >
          //                 <Input />
          //               </Form.Item>

          //             </Col>
          //           </Row>

          //           <Row>
          //             <Col span={12}>
          //               <Form.Item
          //                 name="masterObtainedMark"
          //                 label="Obtained Mark/CGPA"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input Obtained Mark!',
          //                   },
          //                   {
          //                     pattern: /^\d+(\.\d+)?$/,
          //                     message: 'Please enter a valid number!',
          //                   },
          //                 ]}
          //                 hasFeedback
          //               >
          //                 <Input placeholder="Enter a number" />
          //               </Form.Item>

          //             </Col>

          //             <Col span={11} offset={1} >
          //               <Form.Item
          //                 name="masterTotalMark"
          //                 label="Total Mark/CGPA"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input Total Mark!',
          //                   },
          //                   {
          //                     pattern: /^\d+(\.\d+)?$/,
          //                     message: 'Please enter a valid number!',
          //                   },
          //                 ]}
          //                 hasFeedback
          //               >
          //                 <Input placeholder="Enter a number" />
          //               </Form.Item>

          //             </Col>
          //           </Row>
                    
          //           <Row>
          //             <Col span={12}>
          //               <Form.Item
          //                 name="masterRollNo"
          //                 label="Roll NO"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input Roll No!',
          //                   },
          //                   {
          //                     pattern: /^\d+(\.\d+)?$/,
          //                     message: 'Please enter a valid number!',
          //                   },
          //                 ]}
          //                 hasFeedback
          //               >
          //                 <Input placeholder="Enter a number" />
          //               </Form.Item>
          //             </Col>

          //             <Col span={11} offset={1} >
          //               <Form.Item
          //                 name="masterPassingYear"
          //                 label="Passing Year"
          //                 rules={[
          //                   {
          //                     required: true,
          //                     message: 'Please input your Passing Year!',
          //                   },
          //                   {
          //                     pattern: /^(0|[1-9]\d{0,3})$/,
          //                     message: 'Please enter a valid Year (YYYY)!',
          //                   },
          //                 ]}
          //                 hasFeedback
          //               >
          //                 <Input placeholder="____" />
          //               </Form.Item>
          //             </Col>
          //           </Row>
          //         </>
          //     },
          //   ]}
          // />