import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import  ProductAnalysis from './Components/ProductAnalysis'
import  ProductDetail from './Components/ProductDetail'
import  ProductManage from './Components/ProductManage'


const MyTheme = {
  dark: false,
  colors: {
    primary: '#80D444',
    background: 'white',
    card: 'white',
    text: 'gray',
    border: '#f1f1f1',
  },
};


function MainScreen({ navigation }) {
  return (
   <HomeScreen/>
  );
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
    <ProductAnalysis/>
  );
}

function Screen4({ navigation }) {
  return (
    <ProductManage/>
  );
}

function Screen5({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Log in/out</Text>
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
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Screen1}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="face-profile" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Manage"
        component={Screen2}
        options={{
          tabBarLabel: 'BASKET',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="basket" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function MyTabs2() {
  return (
    <Tab.Navigator initialRouteName="Product Analysis">
      <Tab.Screen name="Product Analysis"
       component={Screen3}
       options={{
        tabBarLabel: 'Product Analysis',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="chart-pie" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Product Management" 
      component={Screen4}
      options={{
        tabBarLabel: 'Product Management',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="playlist-plus" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}

function MyTabs3() {
  return (
    <Tab.Navigator initialRouteName="Product Management">
      <Tab.Screen name="Product Analysis"
       component={Screen3}
       options={{
        tabBarLabel: 'Product Analysis',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="chart-pie" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Product Management" 
      component={Screen4}
      options={{
        tabBarLabel: 'Product Management',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="playlist-plus" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}


function Mydrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={MyTabs1} />
      <Drawer.Screen name="Product Analysis" component={MyTabs2} />
      <Drawer.Screen name="Product Management" component={MyTabs3} />
      <Drawer.Screen name="Log in/out" component={Screen5} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Mydrawer />
    </NavigationContainer>
  );
}