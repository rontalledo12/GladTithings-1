import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {Color, BasicStyles} from 'common';
import {connect} from 'react-redux';
import Events from './index.js';

class HeaderOptions extends Component {
  constructor(props) {
    super(props);
  }
  back = () => {
    this.props.navigationProps.pop()
  };
  
  render() {
    const { theme } = this.props.state;
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.back.bind(this)}>
          {/*Donute Button Image */}
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={BasicStyles.headerBackIconSize}
            style={{color: Color.gray }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({state: state});

const mapDispatchToProps = (dispatch) => {
  const {actions} = require('@redux');
  return {
    logout: () => dispatch(actions.logout()),
  };
};

let HeaderOptionsConnect  = connect(mapStateToProps, mapDispatchToProps)(HeaderOptions);

const eventsStack = createStackNavigator({
  eventsScreen: {
    screen: Events,
    navigationOptions: ({navigation}) => ({
      title: 'Events near you',
      headerLeft: <HeaderOptionsConnect navigationProps={navigation} />,
      ...{
				headerStyle: {
					elevation: 0,
					backgroundColor: Color.primary,
					height: 60,
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: 18
				},
				headerTitleContainerStyle: {
					backgroundColor: Color.primary,
					justifyContent: 'center',
					alignItems: 'center',
					paddingRight: 64
				},
				headerTitleStyle: {
					fontFamily: 'Poppins-SemiBold',
					color: 'white'
				},
			}
    }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(eventsStack);
