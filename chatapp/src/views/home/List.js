import { List, Switch } from 'antd-mobile'
import { useNavigate } from "react-router-dom";
import { NavBar} from "antd-mobile";
function MaskList() {
    const navigate = useNavigate();
  return (
    <div className="item-list">
    <NavBar onBack={() => navigate(-1)}>我创建的页面</NavBar>
      <List header="复杂列表">
        <List.Item extra={<Switch defaultChecked />}>新消息通知</List.Item>
        <List.Item extra="未开启" clickable>
          大字号模式
        </List.Item>
        <List.Item description="管理已授权的产品和设备" clickable>
          授权管理
        </List.Item>
        <List.Item title="副标题信息A" description="副标题信息B" clickable>
          这里是主信息
        </List.Item>
      </List>
    </div>
  );
}
export default MaskList;
