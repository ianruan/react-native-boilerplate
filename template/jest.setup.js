import 'react-native-gesture-handler/jestSetup';

import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);
