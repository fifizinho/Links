import { StatusBar } from 'expo-status-bar';
import {Text, View,Image } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pagina Inicial</Text>
      <Link style={styles.btn} href={"/sobre"}>sobre</Link>
      <Link style={styles.btn2} href={"/contatos"}>contatos</Link>
       <Image style={styles.img}
       source = {require("../../assets/mitski.jpg")} />
      <StatusBar style="auto" />
    </View>
  );
}
