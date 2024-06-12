import ky from 'ky';
import Config from 'react-native-config';

const prefixUrl = `${Config.API_URL ?? ''}/`;

export const instance = ky.extend({
  prefixUrl,
  headers: {
    Accept: 'application/json',
  },
});
