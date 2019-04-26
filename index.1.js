// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <Viwe>
        <Header headerText="Albuns!"/>
        <AlbumList />
    </Viwe>
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