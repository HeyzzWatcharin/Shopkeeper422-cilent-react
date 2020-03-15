import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './Components/HomeScreen';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
// import { ScrollView } from 'react-native-gesture-handler';
// // import AnalysisScreen from './Components/AnalysisScreen';
import ProductManage from './Components/ProductManage';
import ProductAnalysis from './Components/ProductAnalysis';
// import HomeScreen from './Components/HomeScreen';
// import ProductDetail from './Components/ProductDetail'

function MainScreen({ navigation }) {
  return <ProductAnalysis />;
}

function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen2</Text>
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Manage</Text>
    </View>
  );
}

function Screen3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AnalysisScreen />
    </View>
  );
}

function Screen4({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen4</Text>
    </View>
  );
}

function Screen5({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen5</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs1() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Screen1}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-profile"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="Manage"
        component={Screen2}
        options={{
          tabBarLabel: 'BASKET',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="basket" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
function MyTabs2() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="3" component={Screen3} />
      <Tab.Screen name="4" component={Screen4} />
      <Tab.Screen name="5" component={Screen5} />
    </Tab.Navigator>
  );
}

function Mydrawer() {
  return (
    <Drawer.Navigator initialRouteName="Stack1">
      <Drawer.Screen name="Mytabs1" component={MyTabs1} />
      <Drawer.Screen name="Mytabs2" component={MyTabs2} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Mydrawer />
    </NavigationContainer>
  );
}
