import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

const SafeAreaScreen: React.FC<SafeAreaViewProps> = ({
  children,
  style,
  ...rest
}) => {
  const colorScheme = useColorScheme();
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }, style]}
      {...rest}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default SafeAreaScreen;
