import React, { useEffect } from 'react';
import { KeyboardAvoidingView, AsyncStorage, View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import firebase from 'firebase'

import logo from '../assets/logo.png'

export default function Events({ navigation }) {
    const [login, setLogin] = React.useState({
        email: '',
        password: ''
    })

    const currentUser = async () => {
        const user = await AsyncStorage.getItem('userID')
        return user ? navigation.navigate('Events') : ''
    }

    useEffect(() => {
        //Verificar qual há Usuário Logado
        currentUser()
    }, [])

    
    //Login with firebase
    const loginWithEmailAndPassword = () => {
        const { password, email } = login
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(async function (result) {
                alert('Autenticado ' + email);
                let _id = firebase.auth().currentUser.uid

                // colocar o UID no AsyncStorage
                await AsyncStorage.setItem('userID', _id)
                navigation.navigate('Events');
            })
            .catch(function (error) {
                alert('Email or password invalid!')
            });

    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image style={styles.img} source={logo} />
            <Text style={styles.labels}>Email:</Text>
            <TextInput
                style={styles.textInput}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={text => setLogin({ ...login, email: text })}
                placeholder=" Email"
                keyboardType="email-address"
            />
            <Text style={styles.labels}>Password:</Text>
            <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
                maxLength={15}
                placeholder=" Password"
                onChangeText={text => setLogin({ ...login, password: text })}
            />
            <View style={styles.btnsContainer}>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={loginWithEmailAndPassword}
                >
                    <Text style={styles.btnText}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonRegister}
                >
                    <Text style={styles.btnText}> Register </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginHorizontal: 20
    },
    btnsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    img: {
        alignSelf: 'center'
    },
    labels: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 16,

    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,

    },
    buttonLogin: {
        flex: 1,
        height: 40,
        justifyContent: "center",
        backgroundColor: '#0B0B61',


    },
    buttonRegister: {
        flex: 1,
        height: 40,
        justifyContent: "center",
        backgroundColor: '#FF8000',

    },
    btnText: {
        color: '#FFFFFF',
        alignSelf: 'center',
        fontWeight: 'bold'
    }

})