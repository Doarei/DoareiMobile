import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const Sobre = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.textTitle}>Sobre nós</Text>
        <Text style={styles.text}>
        Você tem algum Smartphone,Notebook ou computador que não usa mais? Ajude um estudante,assim estará contribuindo para o desenvolvimento do nosso país! "É a educação que faz o futuro parecer um lugar de esperança e transformação!"
        </Text>
        <Text style={styles.textTitle}>Doações</Text>
        <Text style={styles.text}>
        Aceitamos doações de equipamentos ,pessoa física e jurídica,os aparelhos são higienizados ,podem ser entregues diretamente nos pontos Wi-fi ou retirados pelo Motoboy.
        </Text>
        <Text style={styles.textTitle}>Empréstimo de equipamentos</Text>
        <Text style={styles.text}>
        Fazemos o empréstimo de equipamentos para os estudates,poderá ser retirado nos pontos Wi-Fi mediante cadastramento, envio de documentos e comprometimento em devolver após o uso.
        </Text>
        <Text style={styles.textTitle}>Pontos Wi-fi</Text>
        <Text style={styles.text}>
        Em parceria com as prefeituras das cidades que fornecem salas com pontos Wi-fi para os estudantes que não tem acesso á internet ,basta agendar horário e data.
        </Text>
      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  textTitle:{
    alignItems:'center',
    justifyContent:'center',
    padding:12,
    fontSize: 30,
  },
  text: {
    fontSize: 15,
  },
});

export default Sobre;