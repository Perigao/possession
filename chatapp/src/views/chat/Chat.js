import { NavBar, Button } from 'antd-mobile';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextArea } from 'antd-mobile';
import { useRef } from 'react';
import './chat.css';

function Chat() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState([]);
  const [userMsg, setUserMsg] = useState('');
  const messageRef = useRef(null);
  useEffect(() => {
    // 创建一个新的WebSocket连接 连接到ws://127.0.0.1:2000这个URL
    const websocket = new WebSocket('ws://127.0.0.1:2000');
    // 设置WebSocket的onopen事件处理程序
    websocket.onopen = () => {
      setSocket(websocket);
    };
    // 设置 WebSocket 的 onmessage 事件处理程序
    websocket.onmessage = data => {
      // 当收到WebSocket消息时 使用setMessage函数（可能也是一个React状态设置函数）来更新消息列表。
      setMessage(msg => {
        // 获取消息列表中的最后一个消息对象，并将其msg属性与从WebSocket接收到的数据进行拼接
        //这可能意味着消息列表是一个对象数组，其中每个对象代表一个聊天消息，并且有一个msg属性来存储消息内容。
        msg[msg.length - 1].msg += data.data;

        // 使用scrollIntoView方法将messageRef引用的DOM元素滚动到视图的底部。这通常用于聊天应用，确保新接收的消息始终显示在底部。
        // messageRef可能是一个在组件中定义的React引用（使用useRef钩子），用于访问DOM元素。
        messageRef.current.scrollIntoView({ block: 'end' });
        return [...msg];
      });
    };
  }, []);

  return (
    <div className="chat">
      <NavBar onBack={() => navigate(-1)}>聊天页面</NavBar>
     

      <div className="uesr-input">
        <TextArea
          className="text"
          placeholder="请输入内容"
          value={value}
          onChange={val => {
            setValue(val);
          }}
        />
      </div>
      <Button className="sendBtn" color="primary" fill="outline">
        发送
      </Button>
    </div>
  );
}

export default Chat;
