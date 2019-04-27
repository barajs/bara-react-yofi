import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface NavBarProps {
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: '#ccc'
  },
});

export const NavBar = (props: NavBarProps) => {
  return (
    <View style={styles.container}>
      <Text>NavBar</Text>
    </View>
  );
};
