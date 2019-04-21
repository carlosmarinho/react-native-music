// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
        <Text>Some Text</Text>
);

// Create a component
/* const App = () => {
    return(
        //JSX is an extension to the Jvascript Language 
        //that is used to write react components
        <Text>Some Text</Text>
    );
}; */




//Render it to the device
AppRegistry.registerComponent('albums', () => App)