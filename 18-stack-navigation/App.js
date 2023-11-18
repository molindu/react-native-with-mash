import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenC from './ScreenC';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: () => null
                }}
            >
                <Stack.Screen
                    name='Screen_A'
                    component={ScreenA}
                // options={{
                //     header: () => null
                // }}
                />
                <Stack.Screen
                    name='Screen_C'
                    component={ScreenC}
                // options={{
                //     header: () => null
                // }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

