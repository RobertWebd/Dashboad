import { makeAutoObservable } from 'mobx';

class PageStore {
  showWeatherApp = true;

  constructor() {
    makeAutoObservable(this);
  }

  showWeather = () => {
    this.showWeatherApp = true;
  };

  showCurrency = () => {
    this.showWeatherApp = false;
  };
}

export const pageStore = new PageStore();
