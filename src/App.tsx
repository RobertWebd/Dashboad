import { Routes, Route } from 'react-router-dom';
import { DashboardAppPage } from './pages/DashboardAppPage/DashboardAppPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Fragment, useEffect } from 'react';
import { useLocalStorage } from './hooks';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { pageStore } from './store/page-show';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  const { setUsers } = useLocalStorage();
  const { showWeatherApp } = pageStore;

  useEffect(() => {
    setUsers();
  }, [setUsers]);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<AuthPage signIn={true} />} />
        <Route path="/registration" element={<AuthPage />} />
        <Route path="/weather" element={<DashboardAppPage weather={showWeatherApp} />} />
        <Route path="/currency" element={<DashboardAppPage weather={!showWeatherApp} />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  );
});

export default App;
