import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackParamList = {
  Tabs: undefined;
  Home: undefined;
  Settings: undefined;
};

export type ApplicationScreenProps = NativeStackScreenProps<AppStackParamList>;
