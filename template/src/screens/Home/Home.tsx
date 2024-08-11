import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useQuery } from '@tanstack/react-query';

import SafeAreaScreen from '@/components/SafeAreaScreen/SafeAreaScreen';
import { fetchOne } from '@/services/users';
import useUserStore from '@/stores/user/useUserStore';

const Home = () => {
  const setUser = useUserStore(state => state.setUser);
  const [userId, setUserId] = useState<number | null>(null);

  const { isSuccess, data, isFetching } = useQuery({
    queryKey: ['fetchUser', userId],
    queryFn: async () => {
      if (userId) {
        return fetchOne(userId);
      }
    },
    enabled: !!userId && userId > 0,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setUser(data);
    }
  }, [isSuccess, data, setUser]);

  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        {data && <Text variant="headlineLarge">Hello {data.name}</Text>}
      </View>
      <Button
        mode="contained"
        onPress={() => setUserId(1)}
        loading={isFetching}>
        Fetch User
      </Button>
    </SafeAreaScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
