import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import ProductAnalysis from './Components/ProductAnalysis'
import ProductDetail from './Components/ProductDetail'
import ProductManage from './Components/ProductManage'
import Icon from 'react-native-vector-icons/FontAwesome'
import Searchpage from './Components/Searchpage'

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
// ---------------------------------Screen--------------------------------------------------------------------------------------------------

function MainScreen({ navigation }) {
  return (
    <HomeScreen />
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
    <ProductAnalysis />
  );
}

function Screen4({ navigation }) {
  return (
    <ProductManage />
  );
}

function Screen5({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Log in/out</Text>
    </View>
  );
}


function Searchfilter({ navigation }) {
  return (
    <Searchpage />
  );
}


// ---------------------------------Tab-------------------------------------------------------------------------------------
function MyTabs1() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Stack1}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
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
        component={Stack2}
        options={{
          tabBarLabel: 'Product Analysis',
          tabBarIcon: ({ color, size }) => (
            <Icon name="pie-chart" color={color} size={size} />
          ),
        }} />

    </Tab.Navigator>
  );
}

function MyTabs3() {
  return (
    <Tab.Navigator initialRouteName="Product Management">

      <Tab.Screen name="Product Management"
        component={Stack3}
        options={{
          tabBarLabel: 'Product Management',
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}
// -------------------------------Drawer----------------------------------------------------------------------------------------------------

function Mydrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs1}
        options={{
          drawerIcon: () => (
            <Icon
              name="home"
              color='#0C5800'
              size={20} />
          ),
        }} />
      <Drawer.Screen name="Product Analysis" component={MyTabs2}
        options={{
          drawerIcon: () => (
            <Icon
              name="pie-chart"
              color='#0C5800'
              size={20} />
          ),
        }} />
      <Drawer.Screen name="Product Management" component={MyTabs3}
        options={{
          drawerIcon: () => (
            <Icon
              name="plus"
              color='#0C5800'
              size={20} />
          ),
        }} />
      <Drawer.Screen name="Log in/out" component={Screen5}
        options={{
          drawerIcon: () => (
            <Icon
              name="power-off"
              color='#0C5800'
              size={20} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
// ------------------------------Stack-----------------------------------------------------------------------------------------------------


function Stack1({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: 'Mainscreen',
          headerLeft: () => (
            <Icon
              name="list"
              size={30}
              color="#fff"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTitle: () => (
            <Icon
              name="home"
              size={30}
              color="#fff"
            />
          ),
          headerTitleContainerStyle: {
            marginLeft: '33%'
          },
          headerRight: () => (
            <Icon
              name="search"
              size={30}
              color="#fff"
              onPress={() => navigation.navigate('Search')}
            />
          ),
          headerRightContainerStyle: {
            marginHorizontal: 20,
          },
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#80D444',
          },
        }}
      />
      <Stack.Screen name="Search" component={Searchfilter} />
    </Stack.Navigator>
  );
}

function Stack2({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Product Analysis">
      <Stack.Screen
        name="Product Analysis"
        component={Screen3}
        options={{
          headerLeft: () => (
            <Icon
              name="list"
              size={30}
              color="#fff"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTitle: () => (
            <Icon
              name="home"
              size={30}
              color="#fff"
            />
          ),
          headerTitleContainerStyle: {
            marginLeft: '33%'
          },
          headerStyle: {
            backgroundColor: '#80D444',
          },
        }}
      />
      <Stack.Screen
        name="Product Management"
        component={Screen4}
        options={{
          headerLeft: () => (
            <Icon
              name="list"
              size={30}
              color="#fff"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTitle: () => (
            <Icon
              name="home"
              size={30}
              color="#fff"
            />
          ),
          headerTitleContainerStyle: {
            marginLeft: '33%'
          },
          headerStyle: {
            backgroundColor: '#80D444',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function Stack3({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Product Management">
      <Stack.Screen
        name="Product Analysis"
        component={Screen3}
        options={{
          headerLeft: () => (
            <Icon
              name="list"
              size={30}
              color="#fff"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTitle: () => (
            <Icon
              name="home"
              size={30}
              color="#fff"
            />
          ),
          headerTitleContainerStyle: {
            marginLeft: '33%'
          },
          headerStyle: {
            backgroundColor: '#80D444',
          },
        }}
      />
      <Stack.Screen
        name="Product Management"
        component={Screen4}
        options={{
          headerLeft: () => (
            <Icon
              name="list"
              size={30}
              color="#fff"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTitle: () => (
            <Icon
              name="home"
              size={30}
              color="#fff"
            />
          ),
          headerTitleContainerStyle: {
            marginLeft: '33%'
          },
          headerStyle: {
            backgroundColor: '#80D444',
          },
        }}
      />
    </Stack.Navigator>
  );
}


// -------------------------------Return App----------------------------------------------------------------------------------------------------

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Mydrawer />
    </NavigationContainer>
  );
}