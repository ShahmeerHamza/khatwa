import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Test_Screen from '../../screens/test_screen';
import {View} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Tab = createBottomTabNavigator();

const commonOptions = {
  lazy: true,
  headerShown: false,
  headerShadowVisible: false,
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: '#869ba8',
  tabBarStyle: {
    backgroundColor: '#F1F1F1',
    minHeight: 70,
    paddingBottom: 15,
  },
  tabBarLabelStyle: {
                    fontSize: 12,
                  },
};
const iconComponents = {
  Foundation,
  Octicons,
  Feather,
  SimpleLineIcons
};

const tabBarIcon = (iconLib, focused, iconname, focusedIconname) => {
  const IconName = iconComponents[iconLib];
  if (!focusedIconname) focusedIconname = iconname;
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 5,
      }}>
      <IconName
        name={focused ? iconname : focusedIconname ?? iconname}
        size={20}
        color={focused ? 'black' : '#869ca4'}
      />
    </View>
  );
};

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator screenOptions={commonOptions}>
      <Tab.Screen
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({focused}) => tabBarIcon('Foundation', focused, 'home'),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({focused}) => tabBarIcon('Octicons', focused, 'people'),
        }}
        name="My Network"
        component={Test_Screen}
      />
      <Tab.Screen
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({focused}) => tabBarIcon('Octicons', focused, 'diff-added'),
        }}
        name="Post"
        component={Test_Screen}
      />
      <Tab.Screen
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({focused}) => tabBarIcon('Feather', focused, 'bell'),
        }}
        name="Notifications"
        component={Test_Screen}
      />
      <Tab.Screen
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({focused}) => tabBarIcon('SimpleLineIcons', focused, 'briefcase'),
        }}
        name="Jobs"
        component={Test_Screen}
      />
    </Tab.Navigator>
  );
}
