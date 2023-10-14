import React, { useState } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Login(props){
    const [message, setMessage] = useState('');

    const sayHello = (name) => {
        setMessage(`Hello ${name}`);
    }

    return(
        <View style={styles.login}>
            <Text>This is the Login Screen</Text>
            <Button title="Login" onPress={() => sayHello('John')}></Button>
            <Text>{message}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '12%',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        
      },
})
