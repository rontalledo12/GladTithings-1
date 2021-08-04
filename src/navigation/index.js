import {createStackNavigator} from 'react-navigation-stack';
import Login from 'src/modules/account/Login';
import ForgotPassword from 'src/modules/account/ForgotPassword';
import Register from 'src/modules/account/Register';
import ViewProfileStack from 'src/modules/viewProfile/Drawer';
import ProfileStack from 'src/modules/profile/Drawer';
import Welcome from 'src/modules/account/Landing';
import CommunityStack from 'src/modules/community/Drawer';
import SubscriptionStack from 'src/modules/subscription/Drawer';
import MessagePageStack from 'src/modules/messagePage/Drawer';
import PrivacyStack from 'src/modules/privacy/Drawer';
import TermsAndConditionsStack from 'src/modules/termsAndConditions/Drawer';
import DisplayStack from 'src/modules/display/DisplayDrawer';
import Drawer from './Drawer';

const WelcomeStack = createStackNavigator(
  {
    loginScreen: {screen: Welcome},
  },
  {
    headerMode: 'none',
    navigationOptions: {},
  },
);


// login stack
const LoginStack = createStackNavigator(
  {
    loginScreen: {screen: Login},
  },
  {
    headerMode: 'none',
    navigationOptions: {},
  },
);

// Forgot Password stack
const ForgotPasswordStack = createStackNavigator(
  {
    forgotPasswordScreen: {screen: ForgotPassword},
  },
  {
    headerMode: 'none',
    navigationOptions: {},
  },
);

// Forgot Password stack
const RegisterStack = createStackNavigator(
  {
    registerScreen: {screen: Register},
  },
  {
    headerMode: 'none',
    navigationOptions: {},
  },
);

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    landingStack: {screen: WelcomeStack},
    loginStack: {screen: LoginStack},
    forgotPasswordStack: {screen: ForgotPasswordStack},
    registerStack: {screen: RegisterStack},
    drawerStack: {screen: Drawer},
    profileStack: {screen: ProfileStack},
    viewProfileStack: {screen: ViewProfileStack},
    communityStack: {screen: CommunityStack},
    subscriptionStack: {screen: SubscriptionStack},
    messagePageStack: {screen: MessagePageStack},
    termsAndConditionStack: {screen: TermsAndConditionsStack},
    privacyStack: {screen: PrivacyStack},
    displayStack: {screen: DisplayStack}
  },
  {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'landingStack',
  },
);

export default PrimaryNav;
