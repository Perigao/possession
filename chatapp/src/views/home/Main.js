import { NavBar } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { Swiper, Toast } from "antd-mobile";
import { banner } from '../../api//chatapp.js';
function Main() {
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div
        className="chat-swiper"
        style={{ background: color }}
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`);
        }}
      >
        {index + 1}
      </div>
    </Swiper.Item>
  ));
  return (
    <div className="main">
      <NavBar onBack={() => navigate(-1)}>首页</NavBar>
        <Swiper>
          {items}
        </Swiper>
    </div>
  );
}
export default Main;
