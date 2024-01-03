import styled from 'styled-components';
import { AppFormLayout } from '../AppMenu/AppMenu';

const WeatherWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Weather = () => {
  return (
    <>
      <AppFormLayout></AppFormLayout>
      <WeatherWrapper>Weather</WeatherWrapper>
    </>
  );
};
