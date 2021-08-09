 
import * as React from 'react';
import { View, Text, TouchableOpacity, Image,color } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './app/Auth/Splash';
import Login from './app/Auth/Login'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Foundation from 'react-native-vector-icons/Foundation'
import { About, } from './app/screens/About';
import Register from './app/Auth/Register';
import Tier from './app/screens/Tier';
import Pay from './app/Auth/Pay';
import Home from './app/screens/Home';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Winner from './app/screens/Winner';
import Setting from './app/screens/Setting';
import AddTicket from './app/screens/AddTicket';
import Ticket from './app/screens/Ticket';
import Result from './app/screens/Result';
import MoreTicket from './app/screens/MoreTicket';
import Wheel from './app/screens/Wheel';
import { connect } from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


 

 
 
  


class AppNavigator extends React.Component {

     

  
    AuthStack = () => {
        return (
          <Stack.Navigator headerMode="none" screenOptions={{ ...TransitionPresets.SlideFromRightIOS, gestureEnabled: true, gestureDirection: 'horizontal' }}>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Tier" component={Tier} options={{ title: '' }} /> */}
            <Stack.Screen name="Pay" component={Pay} options={{ title: '' }} />
            <Stack.Screen name="Login" component={Login} options={{ title: '' }} />
            <Stack.Screen name="Register" component={Register} options={{ title: '' }} />
          </Stack.Navigator>
        )
      }
      homeStack = () => {
        return (
          <Stack.Navigator headerMode="none" //initialRouteName={'Welcome'} 
            screenOptions={{ gestureEnabled: true, gestureDirection: 'horizontal', animationEnabled: Platform.OS === 'ios' ? true : false }}
          > 
            <Stack.Screen name='Home' component={Home} />
            {/* <Stack.Screen name='About' component={About} /> */}
            <Stack.Screen name="Tier" component={Tier} options={{ title: '' }} />
            <Stack.Screen name='Setting' component={Setting} />
            <Stack.Screen name="AddTicket" component={AddTicket} />
            <Stack.Screen name="MoreTicket" component={MoreTicket} />
    
          </Stack.Navigator>
        );
      }
     
      ticketStack = () => {
        return (
          <Stack.Navigator headerMode="none" //initialRouteName={'Welcome'} 
            screenOptions={{ gestureEnabled: true, gestureDirection: 'horizontal', animationEnabled: Platform.OS === 'ios' ? true : false }}
          >
            <Stack.Screen name='Ticket' component={Ticket} />
            <Stack.Screen name='Wheel' component={Wheel} />
           
            
    
          </Stack.Navigator>
        );
      }
      winnerStack = () => {
        return (
          <Stack.Navigator headerMode="none" //initialRouteName={'Welcome'} 
            screenOptions={{ gestureEnabled: true, gestureDirection: 'horizontal', animationEnabled: Platform.OS === 'ios' ? true : false }}
          >
            <Stack.Screen name='Winner' component={Winner} />
            <Stack.Screen name='Setting' component={Setting} />
           
            
    
          </Stack.Navigator>
        );
      }
      getTabBarVisibility = (route) => {
        const routeName = route.state ? route.state.routes[route.state.index].name : '';
    
        if (routeName === 'AddTicket') {
          return false;
        }
        else if (routeName === 'Setting') {
          return false;
        }
    
        return true;
      }
       
    
      TabStack = () => {
        return (
          <Tab.Navigator
            tabBar={props => this.MyTabBar({ ...props })}>
            <Tab.Screen name="Home" component={this.homeStack} options={({ route }) => ({ tabBarVisible: this.getTabBarVisibility(route) })} />
            
            <Tab.Screen name="Ticket" component={this.ticketStack}  />
            <Tab.Screen name="Result" component={Result} />
            <Tab.Screen name="Winner" component={this.winnerStack} />
    
          </Tab.Navigator >
        );
      }
    
      MyTabBar = ({ state, descriptors, navigation }) => {
        const focusedOptions = descriptors[state.routes[state.index].key].options;
    
        if (focusedOptions.tabBarVisible === false) {
          return null;
        }
        return (
          <View style={{ flexDirection: 'row', paddingVertical: getStatusBarHeight() / 4, backgroundColor: '#fbfbfb', justifyContent: 'space-evenly', }}>
    
            {state.routes.map((route, index) => {
    
              const isFocused = state.index === index;
    
              const onPress = () => {
                navigation.navigate(route.name, { screen: route.name })
              };
    
              return (
                <TouchableOpacity key={index} onPress={onPress} style={{ marginTop: 5, alignItems: 'center', justifyContent: 'space-between', flexDirection: "row" }}                        >
    
                  {
                    route.name == 'Home' &&
                    <AntDesign name="home" size={30} style={{color: isFocused ? "#04a4df": "black"}}/>}
                   {
                    route.name == 'Ticket' &&
                    <Entypo name="ticket" size={30} style={{color: isFocused ? "#04a4df": "black"}} />}
                    {
                    route.name == 'Result' &&
                    <Foundation name="results" size={30} style={{color: isFocused ? "#04a4df": "black"}}/>}
    
                  {
                    route.name == 'Winner' &&
                    <EvilIcons name="trophy" size={30} style={{color: isFocused ? "#04a4df": "black"}} />}
    
                 
    
                  
    
    
    
    
    
                </TouchableOpacity>
    
    
              );
            })}
          </View>
        );
      }


    render() {
        return (
            <NavigationContainer >
                {
                    this.props.logged ?
                    this.TabStack()
                    :
                    this.AuthStack()
                }
            </NavigationContainer>
        )
    }
}
const mapState = state => {
    return {
        logged: state.authReducer.logged,
        
    }
}

export default connect(mapState, null)(AppNavigator);



 


 












 
