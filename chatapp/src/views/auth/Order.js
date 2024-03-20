import { InfiniteScroll, List, NavBar } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Order() {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  return (
    <div>
        <NavBar onBack={() => navigate(-1)}>订单页面</NavBar>
      <List>
        {data.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
      <InfiniteScroll
        loadMore={() => {
          setTimeout(() => {
            const append = [
              "1",
              "1",
              "1",
              "1",
              "1",
              "1",
              "1",
              "1",
              "1",
              "1",
              "1",
              "1",
            ];
            setData((val) => [...val, ...append]);
            setHasMore(append.length > 0);
          });
        }}
        hasMore={hasMore}
      />
    </div>
  );
}

export default Order;
