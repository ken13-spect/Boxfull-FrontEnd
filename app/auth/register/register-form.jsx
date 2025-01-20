'use client'
import React from 'react'
import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import { Register } from '../auth.api';
import { useRouter } from 'next/navigation';


export default function RegisterForm() {
  const route = useRouter();
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    try{
        const { name, email, password } = values;
    const response = await Register(name, email, password);
    //
    console.log('registro exitoso',response.data)
    //reset fields
    form.resetFields(); 
    
    router.push('/auth/login');

    }catch(error){
        form.resetFields(); 
        message.error('Error al registrar. Inténtalo de nuevo.');
    }
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="name"
        rules={[
          {
            required: false,
            message: "Please input valid username!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input valid email!",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message:
              "The password must be 8 characters long, 1 capital letter, 1 number and a special symbol!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
