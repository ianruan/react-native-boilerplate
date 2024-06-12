import { Text, View } from 'react-native';

import { render, screen } from '@testing-library/react-native';

import SafeAreaScreen from './SafeAreaScreen';

describe('SafeAreaScreen component should render correctly', () => {
  test('with default props', () => {
    const component = (
      <SafeAreaScreen>
        <View>
          <Text testID="test-content">Test Content</Text>
        </View>
      </SafeAreaScreen>
    );

    render(component);

    const textContent = screen.getByTestId('test-content');

    expect(textContent.children).toEqual(['Test Content']);
  });
});
