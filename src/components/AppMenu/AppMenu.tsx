import styled from 'styled-components';
import { Logo } from '../../UI';
import { User } from '../../hooks';
import { observer } from 'mobx-react-lite';
import { pageStore } from '../../store/page-show';

const MenuWrapper = styled.div`
  width: 20%;
  padding: 10px 20px;
  border: 2px solid #303235;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
`;

const Text = styled.span`
  font-size: 1.5rem;
`;

const Navbar = styled.div`
  color: rgb(95, 96, 101);
  flex: 1 0 auto;
  padding: 20px 0;
`;

const NavbarTitle = styled.div`
  margin-bottom: 10px;
  padding-left: 10px;
`;

const AppList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const App = styled.div`
  width: 100%;
  padding: 10px 0;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.showWeatherApp ? '#303235' : 'inherit')};
  color: ${(props) => (props.showWeatherApp ? '#fb7f12;' : 'inherit')};

  &::before {
    content: '';
    position: absolute;
    left: -21px;
    height: 15px;
    width: 2px;
    background-color: #fb7f12;
    border-radius: 5px;
    background-color: ${(props) => (props.showWeatherApp ? '#fb7f12' : 'transparent')};
  }
`;

const Name = styled.div`
  padding: 0 10px;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const Pointer = styled.div`
  font-size: 1.5rem;
  margin-right: 15px;
`;

const UserName = styled.div`
  padding-bottom: 5px;
`;

const UserEmail = styled.div`
  color: rgb(95, 96, 101);
`;

const Profile = styled.div``;

export const AppFormLayout = observer(() => {
  const user: User = JSON.parse(sessionStorage.getItem('user'));
  const { name, email } = user;
  const { showWeatherApp, showWeather, showCurrency } = pageStore;

  return (
    <MenuWrapper>
      <Header>
        <Logo height={30} width={30} margin={`0 5px 0 0`}></Logo>
        <Text>Dashik</Text>
      </Header>
      <Navbar>
        <NavbarTitle>Main</NavbarTitle>
        <AppList>
          <App onClick={() => showWeather()} showWeatherApp={showWeatherApp}>
            <Name>
              <Logo width={20} height={20} margin="0 10px 0 0"></Logo>
              <div>Weather</div>
            </Name>
            <Pointer>{`>`}</Pointer>
          </App>
          <App onClick={() => showCurrency()} showWeatherApp={!showWeatherApp}>
            <Name>
              <Logo width={20} height={20} margin="0 10px 0 0"></Logo>
              <div>Currency</div>
            </Name>
            <Pointer>{`>`}</Pointer>
          </App>
        </AppList>
      </Navbar>
      <Profile>
        <App>
          <Name>
            <Logo width={30} height={30} margin="0 10px 0 0"></Logo>
            <div>
              <UserName>{name}</UserName>
              <UserEmail>{email}</UserEmail>
            </div>
          </Name>
          <Pointer>{`>`}</Pointer>
        </App>
      </Profile>
    </MenuWrapper>
  );
});
