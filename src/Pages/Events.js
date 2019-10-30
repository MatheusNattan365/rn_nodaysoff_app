import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';

import firebase from 'firebase'
import axios from '../services/axios'

import EventComponent from '../components/Event'

export default function Events({ navigation }) {
  const [events, setEvents] = useState([])

  const takeEvents = async () => {
    let arrayFinal = []
    const eventos = await axios.get("/events.json")
      .then(res => {
        const { data } = res
        for (let x in data) {
          arrayFinal.push(data[x])
        }
      })
      setEvents(arrayFinal)
  }

  useEffect(() => {
    takeEvents()
  }, [])

  const singOut = async () => {
    firebase
      .auth()
      .signOut()
      .then(async function () {
        alert('Você se deslogou');
        await AsyncStorage.setItem('userID', '')
        navigation.navigate('Login');

      }, function (error) {
        console.error(error);
      });
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        {events.map(evento => {
          return <EventComponent  key={evento.event_name} event={evento} />
        })}
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={singOut}
        >
          <Text style={styles.btnText}> Logout </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,

  },
  component: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonLogin: {
    height: 40,
    justifyContent: "center",
    backgroundColor: '#0B0B61',


  },

  btnText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: 'bold'
  }

})