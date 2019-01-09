import React from 'react';
import { 
          createStackNavigator, 
          createAppContainer
} from 'react-navigation';

import RestrList from './RestrList'
import RestrForm from './RestrForm';

const RootStack = createStackNavigator({
  form: {screen: RestrForm},
  list: {screen: RestrList},
});

const App = createAppContainer(RootStack);

//     screen: RestrForm,
//     navigationOptions: () => ({
//       title: 'Lookup restraunts in your area',
//     }),
//   },
//   list: {
//     screen: RestrList,
//     navigationOptions: () => ({
//       title: 'Restraunts in your area',
//     }),
//   },
// });

export default App;