import React from "react";
import {  Image } from "antd";
import Card from "antd/es/card/Card";
import LoginForm from "./login-form";

export default function Login() {
  return (
    <Card  className="flex flex-col h-3/5 w-auto justify-center items-center">
      <div className="flex justify-center items-center">
        <Image
          width={200}
          src="https://innogencapital.com/wp-content/uploads/2024/07/Logo-Boxful.png"
        />
      </div>
      <LoginForm />
    </Card>
  );
}
