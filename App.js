import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ConfirmEmail from './src/Screens/ConfirmEmailScreen/ConfirmEmail';
import ForgotPassword from './src/Screens/ForgotPasswordScreen/ForgotPassword';
import NewPassword from './src/Screens/NewPasswordScreen/NewPassword';
import SignInScreen from './src/Screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen/SignUpScreen';
import Navigation from './src/Components/Navigation';


export default function App() {
  return (
    <SafeAreaView style={styles.root}>
    <Navigation/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  }
});

