import * as React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './app/Auth/Splash';
import Login from './app/Auth/Login'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {

  About,

} from './app/screens/About';
import Register from './app/Auth/Register';
import Tier from './app/Auth/Tier';
import Pay from './app/Auth/Pay';
import Home from './app/screens/Home';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const tabIcon1 = require('./app/Assets/tabIcon1.jpeg')
const tabIcon1Active = require('./app/Assets/tabIcon1Active.jpeg')

// const tabIcon4 = require('./assets/tabIcon4.png')
// const tabIcon4Active = require('./assets/tabIcon4Active.png');

class App extends React.Component {


  AuthStack = () => {
    return (
      <Stack.Navigator headerMode="none" screenOptions={{ ...TransitionPresets.SlideFromRightIOS, gestureEnabled: true, gestureDirection: 'horizontal' }}>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Tier" component={Tier} options={{ title: '' }} />
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
            <Stack.Screen name='About' component={About} />

          
            
        </Stack.Navigator>
    );
}
  AppStack = () => {
    return (
      <Tab.Navigator headerMode="none"  >
        <Tab.Screen name="Home" component={Home}  />
        {/* <Tab.Screen name="About" component={About}  /> */}
      </Tab.Navigator>
    )
  }
  TabStack = () => {
    return (
        <Tab.Navigator initialRouteName='Home'
            tabBar={props => this.MyTabBar({ ...props })}>
            <Tab.Screen name="Home" component={Home} />

            {/* <Tab.Screen name="About" component={this.searchStack} options={{ unmountOnBlur: true }} /> */}
 
        </Tab.Navigator >
    );
}

MyTabBar = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: getStatusBarHeight(), backgroundColor: '#fbfbfb' }}>

            {state.routes.map((route, index) => {

                const isFocused = state.index === index;

                const onPress = () => {
                    navigation.navigate(route.name, { screen: route.name })
                };

                return (
                    <TouchableOpacity key={index} onPress={onPress} style={{ marginTop: 5, alignItems: 'center', justifyContent: 'center', }}                        >

                       {
                            route.name == 'Home' &&
                              <AntDesign  name="home" size={30} />  } 
                         
                        {/* {
                            route.name == 'About' &&
                            <Image resizeMode='contain' source={isFocused ? tabIcon1Active : tabIcon1} style={{width:25,height:25}} />
                          } */}
                      
                      
                        



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
          this.AuthStack()
          :
          this.TabStack()
        }
      </NavigationContainer>
    )
  }
}



// const styles = StyleSheet.create({
//   img: {
//       width: 25, height: 25
//   }
// })












export default App;
