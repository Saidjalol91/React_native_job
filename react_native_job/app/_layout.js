import {Stack} from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout = () => {
    const [fontsLoaded] = useFonts({
        BMBold:require('../assets/fonts/DMSans-Bold.ttf'),
        BMMedium:require('../assets/fonts/DMSans-Medium.ttf'),
        BMRegular:require('../assets/fonts/DMSans-Regular.ttf'),
    });

    if(!fontsLoaded){
        return null;
    } 

    return (
    <Stack initialRouteName="home">
        <Stack.Screen name="home"/>
    </Stack>)
}

export default Layout;