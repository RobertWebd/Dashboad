import { AppPageLayout, Currency, Weather } from '../../components';

type DashboardPageProps = {
  weather?: boolean;
};

export const DashboardAppPage = ({ weather }: DashboardPageProps) => {
  return <AppPageLayout>{weather ? <Weather></Weather> : <Currency></Currency>}</AppPageLayout>;
};
