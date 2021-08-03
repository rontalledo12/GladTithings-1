import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Slider2 from 'modules/slider/index2';
import {BasicStyles } from 'common';
import Homepage from 'modules/homepage';
import Settings from 'modules/display';
import Privacy from 'modules/privacy';
import TermsAndConditions from 'modules/termsAndConditions';
import Header from 'src/modules/generic/Header'

import Style from './Style.js';
import { connect } from 'react-redux'

// const width = Math.round(Dimensions.get('window').width);
const width = Math.round(Dimensions.get('window').width);
class MenuDrawerStructure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginState: true,
    };
  }
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}></View>
    );
  }
}

const mapStateToProps = (state) => ({ state: state });

const mapDispatchToProps = (dispatch) => {
  const { actions } = require('@redux');
  return {
    setQRCodeModal: (isVisible) => {
      dispatch(actions.setQRCodeModal({ isVisible: isVisible }))
    },
  };
};

const _StackNavigator = createStackNavigator({
  Homepage: {
    screen: Homepage,
    navigationOptions: ({navigation}) => ({
      title: null,
      headerLeft: <Header navigation={navigation} />,
      ...BasicStyles.drawerHeader1
    }),
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      title: null,
      headerLeft: <Header navigation={navigation} />,
      ...BasicStyles.drawerHeader
    }),
  },
  TermsAndConditions: {
    screen: TermsAndConditions,
    navigationOptions: ({navigation}) => ({
      title: null,
      headerLeft: <Header navigation={navigation} />,
      ...BasicStyles.drawerHeader
    }),
  },
  Privacy: {
    screen: Privacy,
    navigationOptions: ({navigation}) => ({
      title: null,
      headerLeft: <Header navigation={navigation} />,
      ...BasicStyles.drawerHeader
    }),
  }
});

const Drawer = createDrawerNavigator(
  {
    Homepage: {
      screen: _StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    Profile: {
      screen: _StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    Notification: {
      screen: _StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    Settings: {
      screen: _StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    TermsAndConditions: {
      screen: _StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    },
    Privacy: {
      screen: _StackNavigator,
      navigationOptions: {
        drawerLabel: '',
      },
    }
  },
  {
    contentComponent: Slider2,
    drawerWidth: width,
    initialRouteName: 'Homepage'
  },
);

export default Drawer;
