import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import Navigator from './src/navigation';
import store from './src/store';

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
