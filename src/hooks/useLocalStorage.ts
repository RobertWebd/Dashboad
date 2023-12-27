import { useNavigate } from 'react-router-dom';
import { Inputs } from '../types/inputs';
import { delay } from '../utils';

type User = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
};

const mockUsers = [
  { name: 'Robert', phoneNumber: '89274372223', email: 'ra.20.z02@mail.ru', password: '44Robert21!' },
  { name: 'Ramil', phoneNumber: '89372908085', email: 'blackRay@mail.ru', password: 'Ramil2119kutak%' },
];

export const useLocalStorage = () => {
  const navigate = useNavigate();

  const setUsers = (user?: User) => {
    const cachedUsers = localStorage.getItem('users') ?? '';

    if (!user && !cachedUsers) {
      localStorage.setItem('users', JSON.stringify(mockUsers));
      return;
    }

    const isUserExists = JSON.parse(cachedUsers)?.some((i: User) => {
      return i.name === user?.name && i.phoneNumber === user.phoneNumber && i.email === user.email && i.password === user.password;
    });

    if (isUserExists) {
      alert('Пользователь уже существует');
    } else if (user) {
      localStorage.setItem('users', JSON.stringify([...JSON.parse(cachedUsers), user]));
      alert('Вы зарегистрированы');
      navigate('/dashboard');
    }
  };

  const getUsers = () => {
    const cachedUsers = localStorage.getItem('users');

    if (cachedUsers) return JSON.parse(cachedUsers);

    return mockUsers;
  };

  const saveUser = (user: User) => {
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  const loginFunc = ({ userLogin, password }: Inputs) => {
    delay(1000);

    const users = getUsers();
    const targetUser = users.find((user: User) => {
      const { phoneNumber, email } = user;
      const userPassword = user.password;
      const difNumberVariations =
        userLogin.slice(-10) === phoneNumber.slice(-10) &&
        (userLogin.slice(0, 1) === '8' || userLogin.slice(0, 1) === '7' || userLogin.slice(0, 2) === '+7');
      return (difNumberVariations || phoneNumber === userLogin || email === userLogin) && userPassword === password;
    });

    return targetUser ?? null;
  };

  return { setUsers, getUsers, saveUser, loginFunc };
};
