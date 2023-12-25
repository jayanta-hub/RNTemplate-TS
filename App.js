import React, { useState, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './src/Infrastructure/utils/context';
// import SplashComponent from './src/Infrastructure/component/SplashScreen/SplashScreen';
import AuthNavigator from './src/Infrastructure/navigation/AuthNavigator';
import DrawerNavigator from './src/Infrastructure/navigation/DrawerNavigator';
import store from './src/application/store';
// import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';

const App = () => {
  const [userToken, setUserToken] = useState(false);
  const [splashTime, setSplashTime] = useState(true);

  const authContext = useMemo(
    () => ({
      signIn: () => {
        setUserToken(true);
      },
      signOut: () => {
        setUserToken(false);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;
