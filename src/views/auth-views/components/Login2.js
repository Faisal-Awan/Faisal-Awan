import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SignUpForm from './SignUpForm';
import EmailServices from '../../app-views/EmailServces';
import MassageServices from '../../app-views/components/MassageServices';

const Login2 = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: 'Register',
            status: 'finish',
            icon: <UserOutlined />,
            content: <SignUpForm onNext={next} />,
        },
        {
            title: 'Email Verification',
            status: 'finish',
            icon: <EmailServices onNext={next} />,
            content: <EmailServices onNext={next} />
        },
        {
            title: 'OTP',
            status: 'process',
            icon: <MassageServices onNext={next} />,
            content: <MassageServices onNext={next} />
        },
    ];

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    const contentStyle = {
        lineHeight: '80px',
        textAlign: 'center',
        // color: token.colorTextTertiary,
        // backgroundColor: token.colorFillAlter,
        // borderRadius: token.borderRadiusLG,
        // border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };
    return (
        <>
            <div style={{ padding: "50px" }}>
                <Steps current={current} items={items} />
                <div style={contentStyle}>{steps[current].content}</div>
                {/* <div
                    style={{
                        marginTop: 24,
                    }}
                >
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={() => prev()}
                        >
                            Previous
                        </Button>
                    )}
                </div> */}
            </div>
        </>
    );
};

export default Login2;
