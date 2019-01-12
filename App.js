import React from 'react';
import { 
          createStackNavigator, 
          createAppContainer
} from 'react-navigation';

import RestrList from './RestrList'
import RestrForm from './RestrForm'
import RestrPage from './RestrPage'

const RootStack = createStackNavigator({
  form: {screen: RestrForm},
  list: {screen: RestrList},
  page: {screen: RestrPage},
});

const App = createAppContainer(RootStack);

export default App;