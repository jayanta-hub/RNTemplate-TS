import React, {useState, useEffect, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './src/Infrastructure/utils/context';
import SplashComponent from './src/Infrastructure/component/SplashScreen/SplashScreen';
import AuthNavigator from './src/Infrastructure/navigation/AuthNavigator';
import DrawerNavigator from './src/Infrastructure/navigation/DrawerNavigator';
// import {Provider} from 'react-native-paper';
// import store from './src/application/store';

interface AuthContextProps {
  signIn: () => void;
  signOut: () => void;
}

const App: React.FC = () => {
  const [userToken, setUserToken] = useState<boolean>(false);
  const [splashTime, setSplashTime] = useState<boolean>(true);

  const authContext = useMemo<AuthContextProps>(
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
      setSplashTime(false);
    }, 2000);
  }, []);

  if (splashTime) {
    return (
      <NavigationContainer>
        <SplashComponent />
      </NavigationContainer>
    );
  }

  return (
    <>
      {/* <Provider store={store}> */}
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
      {/* </Provider> */}
    </>
  );
};

export default App;
