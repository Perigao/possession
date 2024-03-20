import { HashRouter, Route, Routes } from 'react-router-dom';

import Sign from './views/login/Sign.js';
import Register from './views/login/Register.js';
import Home from './views/home/Home.js';
import Order from './views/auth/Order.js';
import Chat from './views/chat/Chat.js';

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        {/* 单极路由 */}
        <Route element={<Sign />} path="/" />
        <Route element={<Sign />} path="/sign" />
        <Route element={<Order />} path="/order" />
        <Route element={<Register />} path="/register" />
        <Route element={<Chat />} path="/chat" />
        {/* 多级路由 */}
        <Route element={<Home />} path="/home/*" />
      </Routes>
    </HashRouter>
  );
}

export default App;
