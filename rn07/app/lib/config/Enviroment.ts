import Config from 'react-native-config';

class Enviroment {
  get baseUrl() {
    return Config.BASE_URL ?? 'http://localhost:3000';
  }
}

export default new Enviroment();
