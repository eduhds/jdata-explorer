import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../themes/Colors';
import { APP_TITLE } from '../values/Strings';
import Home from '../pages/Home';
import DataExplorer from '../pages/DataExplorer';

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
				<Stack.Screen name='DataExplorer' component={DataExplorer} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
