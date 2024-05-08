import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, pathname } = location;
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (state && state.from && state.pathname !== pathname) {
      setHistory([...history, state]);
    }
  }, [state, pathname]);

  // Функция для навигации назад
  const goBack = () => {
    if (history.length > 0) {
      const previousLocation = history.pop();
      navigate(previousLocation.from);
    }
  };

  return (
    <div className="container">
      
      <Header />

      <div className="history-block">
        {/* Кнопка для возврата на предыдущую страницу */}
        {history.length > 0 && <button onClick={goBack}>Назад</button>}
      </div>

      <div className="history-window">
        {/* Вывод списка переходов */}
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              Переход с {item.pathname} на {item.from}
            </li>
          ))}
        </ul>
      </div>

      <main className="main">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};
