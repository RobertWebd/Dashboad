import { Routes, Route } from 'react-router-dom';
import { DashboardAppPage } from './pages/DashboardAppPage/DashboardAppPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Fragment, useEffect } from 'react';
import { useLocalStorage } from './hooks';
import { AuthPage } from './pages/AuthPage/AuthPage';

function App() {
  const { setUsers } = useLocalStorage();

  useEffect(() => {
    setUsers();
  }, [setUsers]);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<AuthPage signIn={true} />} />
        <Route path="/registration" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardAppPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
