import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartAScreen from "./src/screens/StartA";
import StartBScreen from './src/screens/StartB';
import SignUpScreen from './src/screens/SignUp';
import SuccessPaymentScreen from './src/screens/SuccessPayment';
import PickAreaScreen from './src/screens/PickArea';
import PhotoOneScreen from './src/screens/PhotoOne';
import PhotoTwoScreen from './src/screens/PhotoTwo';
import PaymentScreen from './src/screens/PaymentScreen';
import HomeScreen from './src/screens/HomeScreen';
import FailedPaymentScreen from './src/screens/FailedPayment';
import ClaimStartScreen from './src/screens/ClaimStart';
import ClaimantDetailsScreen from './src/screens/ClaimantDetails';
import PhotoDetailsScreen from './src/screens/PhotoDetails';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    StartA: StartAScreen,
    StartB: StartBScreen,
    SignUp: SignUpScreen,
    SuccessPayment: SuccessPaymentScreen,
    PickArea : PickAreaScreen,
    PhotoOne: PhotoOneScreen,
    PhotoTwo: PhotoTwoScreen,
    Payment : PaymentScreen,
    FailedPayment: FailedPaymentScreen,
    ClaimStart : ClaimStartScreen,
    ClaimantDetails : ClaimantDetailsScreen,
    PhotoDetails : PhotoDetailsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "",
      headerShown: false
    }
  }
);

export default createAppContainer(navigator);
