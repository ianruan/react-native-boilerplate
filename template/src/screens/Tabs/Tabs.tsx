import { useCallback } from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import Home from '@/screens/Home/Home';
import Settings from '@/screens/Settings/Settings';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  const HomeIcon = useCallback(
    ({ color, focused }: { focused: boolean; color: string }) => (
      <Icon name={focused ? 'home' : 'home-outline'} color={color} size={26} />
    ),
    [],
  );

  const SettingsIcon = useCallback(
    ({ color, focused }: { focused: boolean; color: string }) => (
      <Icon
        name={focused ? 'account' : 'account-outline'}
        color={color}
        size={26}
      />
    ),
    [],
  );

  return (
    <Tab.Navigator initialRouteName="Home" safeAreaInsets={{ bottom: 10 }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: SettingsIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
