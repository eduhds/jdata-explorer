import React from 'react';
import { View, Text } from 'react-native';
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
					headerTintColor: Colors.white,
					headerRight: () => <RightInfo />
				}}>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='DataExplorer' component={DataExplorer} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

function RightInfo() {
	return (
		<View style={{ backgroundColor: Colors.primary3, padding: 5, marginRight: 10, borderRadius: 2 }}>
			<Text style={{ fontSize: 14, color: Colors.white, fontWeight: 'bold' }}>Beta</Text>
		</View>
	);
}
