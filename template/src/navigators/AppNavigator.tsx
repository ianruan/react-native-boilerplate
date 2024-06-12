import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from '@/screens/Tabs/Tabs';
import type { AppStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
