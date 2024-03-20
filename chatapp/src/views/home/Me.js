import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline,
} from "antd-mobile-icons";
import { List, NavBar, Image } from "antd-mobile";
import { useNavigate } from "react-router-dom";

function Me() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar onBack={() => navigate(-1)}>我的页面</NavBar>
      <div className="avatar">
        <div style={{ display: "inline-block" }}>
          <Image
            src={require("../../assets/images/avatar.jpg")}
            width={64}
            height={64}
            fit="cover"
            style={{ borderRadius: 32 }}
          />
        </div>
      </div>
     <div className="me-list">
     <List>
        <List.Item prefix={<UnorderedListOutline />} onClick={() => {
            navigate('/order')
        }}>
          账单
        </List.Item>
        <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
          总资产
        </List.Item>
        <List.Item prefix={<SetOutline />} onClick={() => {
            navigate('/sign')
        }}>
          登出
        </List.Item>
      </List>
     </div>
    </div>
  );
}
export default Me;
