import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';

export default function components({event}) {

  return (
    <View style={styles.container}>
        <Image source={{uri:event.event_photo}} style={styles.img} />
        <Text style={styles.label}>{event.event_name}</Text>
        <Text style={styles.label}>More things</Text>
        <TouchableOpacity   style={styles.btnEvent}
                            onPress={() => Linking.openURL(`${event.instagram_link}`)}>
            <Text style={styles.btnText}>Go to Instagram</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: 20,
    },

    img: {
        width: '100%',
        height: 335,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    label: { 
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 16,
    },
    btnEvent: {
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