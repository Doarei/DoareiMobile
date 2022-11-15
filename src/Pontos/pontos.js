import React from "react";
import {
  View, Text, StyleSheet, Image, SafeAreaView,
  ScrollView, TouchableOpacity
} from "react-native";

import ponto1 from '../../assets/ponto1.png';
import ponto2 from '../../assets/ponto2.png';
import ponto3 from '../../assets/ponto3.png';

import { Card } from "react-native-paper";

function Pontos() {

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Text style={styles.text}>Pontos wi-fi.</Text>

            <Text>{'\n'}</Text>

            <Card>
              <View style={styles.content}>
                <Image style={styles.logo} source={ponto1} />
                <Text style={styles.texto}> </Text>
                <TouchableOpacity style={styles.btnSubmit}>
                  <Text style={styles.submitText}>Clique</Text>

                </TouchableOpacity>
                <Text>{'\n'}</Text>
              </View>
            </Card>
            <Text>{'\n'}</Text>
            <Card>
              <View style={styles.content}>
                <Image style={styles.logo} source={ponto2} />
                <Text style={styles.texto}> </Text>
                <TouchableOpacity style={styles.btnSubmit}>
                  <Text style={styles.submitText}>Clique</Text>

                </TouchableOpacity>
                <Text>{'\n'}</Text>
              </View>
            </Card>
            <Text>{'\n'}</Text>
            <Card>
              <View style={styles.content}>
                <Image style={styles.logo} source={ponto3} />
                <Text style={styles.texto}></Text>
                <TouchableOpacity style={styles.btnSubmit}>
                  <Text style={styles.submitText}>Clique</Text></TouchableOpacity>
                <Text>{'\n'}</Text>
              </View>
            </Card>
            
            <Text>{'\n'}</Text>
            
           
            <Text>{'\n'}</Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    resizeMode: 'contain',
  },
  text: {
    color: 'black',
    fontSize: 32,
  },
  texto: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bolde',
  },
  logo: {
    flex: 1,
    margin: 20,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
    resizeMode: 'stretch',
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: '98%',
    height: 50,
    marginBottom: 15,
    color: '#222',
    fontSize: 14,
    borderRadius: 7
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '40%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 7
  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  },
})

export default Pontos;