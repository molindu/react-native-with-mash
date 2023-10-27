import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenA from './ScreenA';
import ScreenC from './ScreenC';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconName;

                        if (route.name === 'Screen_A') {
                            iconName = 'autoprefixer';
                            size = focused ? 25 : 20;
                            // color = focused ? '#f0f' : '#555';
                        }
                        else if (route.name === 'Screen_C') {
                            iconName = 'btc';
                            size = focused ? 25 : 20;
                            // color = focused ? '#f0f' : '#555';
                        }
                        return (
                            <FontAwesome5
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    }
                })}
                tabBarOptions={{
                    activeTintColor: '#f0f',
                    inactiveTintColor: '#555',
                    activeBackgroundColor: '#fff',
                    inactiveBackgroundColor: '#999',
                    showLabel: true,
                    labelStyle: { fontSize: 12 },

                }}
            >
                <Tab.Screen
                    name='Screen_A'
                    component={ScreenA}
                    options={{ tabBarBadge: 3 }}
                />
                <Tab.Screen
                    name='Screen_C'
                    component={ScreenC}
                    options={{ tabBarBadge: 2 }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
