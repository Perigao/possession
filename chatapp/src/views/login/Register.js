import { Form, Input, Button, Image, Toast } from 'antd-mobile';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { sendEmail, register } from '../../api/register.js';
function Register() {
  const navigate = useNavigate();
  const [from, updateFrom] = useState({
    name: '',
    email: '',
    verification_code: '',
    password: '',
    repassword: ''
  });

  return (
    <div className="register">
      <div className="reAvatar">
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
        <Form.Header>填写注册信息</Form.Header>
        <Form.Item label="姓名">
          <Input
            onChange={e => {
              from.name = e;
              updateFrom({ ...from });
            }}
            placeholder="请输入"
          />
        </Form.Item>
        <Form.Header />
        <Form.Item label="邮箱地址">
          <Input
            onChange={e => {
              from.email = e;
              updateFrom({ ...from });
            }}
            placeholder="请输入"
          />
        </Form.Item>
        <Form.Header />
        <Form.Item label="密码">
          <Input
            onChange={e => {
              from.password = e;
              updateFrom({ ...from });
            }}
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Header />
        <Form.Item label="确认密码">
          <Input
            onChange={e => {
              from.repassword = e;
              updateFrom({ ...from });
            }}
            type="password"
            placeholder="请输入确认密码"
          />
        </Form.Item>
        <Form.Header />
        <Form.Item
          label="邮箱验证码"
          extra={(() => {
            return (
              <a
                onClick={() => {
                  console.log(
                    sendEmail({
                      email: from.email
                    })
                  );
                }}>
                发送验证码
              </a>
            );
          })()}>
          <Input
            onChange={e => {
              from.verification_code = e;
              updateFrom({ ...from });
            }}
            placeholder="请输入"
          />
        </Form.Item>
      </Form>
      <div className="conf-btn">
        <Button
          block
          color="primary"
          size="large"
          onClick={async () => {
            const result = await register(from);
            if (result.code == 200) {
              navigate('/home/main');
            } else {
              Toast.show({
                icon: 'error',
                content: '注册失败'
              });
            }
          }}>
          确认注册
        </Button>
      </div>
    </div>
  );
}
export default Register;
