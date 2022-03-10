import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../themes/Colors';

import Home from '../pages/Home';
import { APP_TITLE } from '../values/Strings';

const Stack = createNativeStackNavigator();

export default function Navigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{
					headerTitle: APP_TITLE,
					headerStyle: { backgroundColor: Colors.primary2 },
					headerTintColor: Colors.white
				}}>
				<Stack.Screen name='Home' component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
