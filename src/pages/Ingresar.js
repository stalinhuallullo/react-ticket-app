import React, { useState } from "react";

import { Button, Divider, Form, Input, InputNumber, Typography } from "antd";
import { SaveOutlined } from "@ant-design/icons"
import { Navigate, useNavigate } from 'react-router-dom';
import { useHideMenu } from "../hooks/useHideMenu";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";

const { Title, Text } = Typography


export const Ingresar = () => {

  useHideMenu(false);
  const [usuario] = useState(getUsuarioStorage());
  const navigate = useNavigate();

  
  const onFinish = ({ agente, escritorio }) => {
    localStorage.setItem('agente', agente );
    localStorage.setItem('escritorio', escritorio );
    navigate('/escritorio');
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if ( usuario.agente && usuario.escritorio ) {
    return <Navigate to="/escritorio" />
  }

  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y número de escritorio</Text>
      <Divider/>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={ onFinish }
        onFinishFailed={ onFinishFailed }
        autoComplete="off"
      >
        <Form.Item
          label="Nombre del agente"
          name="agente"
          rules={[ { required: true, message: "Por favor ingrese su nombre" } ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={[ { required: true, message: "Por favor ingrese su escritorio" } ]}>
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
          <SaveOutlined />
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
