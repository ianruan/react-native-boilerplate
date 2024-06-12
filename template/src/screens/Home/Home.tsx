import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import SafeAreaScreen from '@/components/SafeAreaScreen/SafeAreaScreen';
import useUserStore from '@/stores/user/useUserStore';

const Home = () => {
  const user = useUserStore(state => state.user);
  const isPending = useUserStore(state => state.isPending);
  const fetchUser = useUserStore(state => state.fetchUser);

  return (
    <SafeAreaScreen>
      <View style={{ flex: 1 }}>
        {user && <Text variant="headlineLarge">Hello {user.name}</Text>}
      </View>
      <Button mode="contained" onPress={() => fetchUser(1)} loading={isPending}>
        Fetch User
      </Button>
    </SafeAreaScreen>
  );
};

export default Home;
