
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Style';
import { NavigationActions, SafeAreaView, StackActions } from 'react-navigation';
import { ScrollView, Text, View, Image, Share, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Helper, BasicStyles, Color } from 'common';
import Config from 'src/config.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCopy, faSignOutAlt, faTimes, faUserCircle, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient'
import { Dimensions } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin'
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class Slider2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    }
  }
  navigateToScreen = (route, page) => {
    if (route == 'share') {
      this.onShare()
      return
    }
    if (route === 'drawerStack') {
      this.props.navigation.toggleDrawer();
      this.navigate('Homepage')
      return
    }
    this.props.navigation.toggleDrawer();
    this.props.navigation.navigate(route, {page: page});
  }

  navigate = (item) => {
    if (item.payload === 'drawer') {
      this.props.navigation.toggleDrawer();
      const navigateAction = NavigationActions.navigate({
        routeName: 'drawerStack',
        action: StackActions.reset({
          index: 0,
          key: null,
          actions: [
            NavigationActions.navigate({
              routeName: item.route, params: {
                initialRouteName: item.route,
                index: 0
              }
            }),
          ]
        })
      });
      this.props.navigation.dispatch(navigateAction);
    } else if (item.payload === 'drawerStack') {
      this.props.navigation.navigate(item.route);
      this.props.navigation.toggleDrawer();
    } else {
      this.onShare()
    }
  }

  onShare = async () => {
    const { user } = this.props.state;
    if (user == null) {
      return
    }
    try {
      const result = await Share.share({
        message: `https://gladtithings.com/profile/${user?.id}/${user?.code}`
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

  redirect(route) {
    this.props.navigation.navigate(route);
    this.props.navigation.toggleDrawer();
  }

  logoutAction() {

    //clear storage
    const { logout, setActiveRoute } = this.props;
    logout();

    //logout from google
    try {
      GoogleSignin.signOut();
    } catch (error) {
      console.log('SIGNOUT', error);
    }

    // setActiveRoute(null)
    this.props.navigation.navigate('loginStack');
  }

  render() {
    const { user, theme } = this.props.state;
    console.log(user, '---');
    const { colors } = this.state
    return (
      <LinearGradient
        colors={theme && theme.gradient !== undefined && theme.gradient !== null ? theme.gradient : Color.gradient}
        locations={[0, 0.5, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          height: '100%',
          width: width
        }}
      >
        <View style={{
          flexDirection: 'row',
          height: '100%'
        }}>
          <View
            style={{
              height: '100%',
              width: '100%'
            }}>
            <TouchableOpacity style={{
              marginTop: '2%',
              marginLeft: 10
            }}
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <FontAwesomeIcon
                color={Color.white}
                icon={faTimes}
                size={BasicStyles.iconSize}
              />
            </TouchableOpacity>
          </View>
          {
            user !== null ? (
              <View style={{ marginTop: '7%', position: 'absolute', right: 10, width: '75%' }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    position: 'absolute',
                    right: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Text numberOfLines={1} style={{
                    color: Color.white,
                    fontFamily: 'Poppins-SemiBold',
                    marginRight: 10,
                    width: '80%',
                    fontSize: 16,
                    textAlign: 'right'
                  }}>
                    {user?.account_information?.first_name ? user?.account_information.first_name + ' ' + user?.account_information.last_name : user?.username}
                  </Text>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('profileStack')}>
                    {user?.account_profile?.url ? <Image
                      source={{ uri: Config.BACKEND_URL + user?.account_profile.url }}
                      style={[BasicStyles.profileImageSize, {
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: Color.warning
                      }]} /> :
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        size={50}
                        style={{
                          color: Color.white
                        }}
                      />
                    }
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <Text style={[styles.sectionHeadingStyle, {
                paddingTop: 150,
                backgroundColor: theme ? theme.primary : Color.primary
              }]}>
                Welcome to {Helper.company}!
              </Text>
            )
          }

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              marginTop: height / 3.7,
              position: 'absolute',
              right: 0,
              height: '47%',
            }}>
            <View style={{
              alignItems: 'flex-end',
              height: '100%'
            }}>
              {Helper.DrawerMenu.length > 0 &&
                Helper.DrawerMenu.map((item, index) => {
                  return (
                    <TouchableOpacity style={[
                      styles.navSectionStyle, {
                        flexDirection: 'row-reverse',
                        width: '200%',
                        paddingBottom: 5
                      }
                    ]}
                      key={index}
                      onPress={() =>
                        this.navigateToScreen(item.route, item.title)
                      }>
                      <View style={styles.inActiveDrawer}>
                        <FontAwesomeIcon style={{
                          padding: 10,
                          color: Color.secondary
                        }} icon={item.icon} size={BasicStyles.iconSize}></FontAwesomeIcon>
                        <Text style={styles.BottomText}>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </ScrollView>
        </View>
        <View style={[styles.navSectionStyle, { borderBottomWidth: 0, flex: 1, position: 'absolute', bottom: 15, borderTopWidth: 1, width: width, borderColor: 'white', paddingRight: 10 }]}>
          {Helper.DrawerMenu1.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => { this.navigateToScreen(item.route, item.title) }} style={{ flexDirection: 'row-reverse', paddingTop: 10 }}>
                <FontAwesomeIcon style={[
                  styles.navItemStyle, {
                    color: Color.secondary,
                    marginRight: 10,
                    fontSize: 16
                  }]} icon={item.icon} size={BasicStyles.iconSize}></FontAwesomeIcon>
                <Text style={styles.BottomText}>{item.title}</Text>
              </TouchableOpacity>
            )
          })}
          <TouchableOpacity onPress={() => { this.logoutAction() }} style={{ flexDirection: 'row-reverse', paddingTop: 10 }}>
            <FontAwesomeIcon style={[
              styles.navItemStyle, {
                color: Color.secondary,
                marginRight: 10,
                fontSize: 16
              }]} icon={faSignOutAlt} size={BasicStyles.iconSize}></FontAwesomeIcon>
            <Text style={styles.BottomText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

Slider2.propTypes = {
  navigation: PropTypes.object
};

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux');
  return {
    logout: () => dispatch(actions.logout()),
    setActiveRoute: (route) => dispatch(actions.setActiveRoute(route))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider2);
