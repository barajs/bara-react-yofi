import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface NavBarProps {
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#ccc',
	borderWidth: 1
  },
});

export const NavBar = (props: NavBarProps) => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>Example NavBar</Text>
    </View>
  );
};
