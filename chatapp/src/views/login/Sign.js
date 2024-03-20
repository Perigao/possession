import { Form, Input, Button, Image, Space, Toast } from 'antd-mobile';
import './sign.css';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/register.js';
import { useState } from 'react';
function Sign() {
  const navigate = useNavigate();
  const [from, setFrom] = useState({
    email: '',
    password: ''
  });
  return (
    <div className="sign">
      <div className="signLogo">
        <div style={{ display: 'inline-block' }}>
          <Image
            src={require('../../assets/images/avatar.jpg')}
            width={104}
            height={104}
            fit="cover"
            style={{ borderRadius: 64 }}
          />
        </div>
      </div>
      <Form layout="horizontal" mode="card">
        <Form.Item label="邮箱地址">
          <Input
            onChange={result => {
              // const res = JSON.stringify(result);
              from.email = JSON.stringify(result);
              setFrom({ ...from });
            }}
            placeholder="请输入"
          />
        </Form.Item>
        <Form.Item label="密码">
          <Input
            onChange={result => {
              // const res = JSON.stringify(result);
              from.password = JSON.stringify(result);
              setFrom({ ...from });
            }}
            placeholder="请输入"
          />
        </Form.Item>
      </Form>
      <div className="conf-btn">
        <Space direction="vertical" block>
          <Button
            block
            color="primary"
            size="large"
            onClick={async () => {
              const result = await login(from);
              if (result.code == 200) {
                console.log('登录成功');
                console.log(result.data);
              } else {
                Toast.show({
                  icon: 'error',
                  content: 'result.message'
                });
              }
              //   navigate("/home/main");
            }}>
            确认登录
          </Button>
          <Button
            block
            color="primary"
            size="large"
            onClick={() => {
              navigate('/register');
            }}>
            前往注册
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default Sign;
