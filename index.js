// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


// Create a component
const App = () => (
    <Header headerText="Albuns!"/>
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