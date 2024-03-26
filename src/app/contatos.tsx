import { StatusBar } from 'expo-status-bar';
import {Text, View, Image } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';
export default function App() {
  return (
    <View style={styles.container}>
       <Text style={styles.texto}>Pagina sobre contatos</Text>
      <Link style={styles.btn} href={"/"}>inicio</Link>
      <Link style={styles.btn2} href={"/sobre"}>sobre</Link>
      <Image style={styles.img}
       source = {require("../../assets/lana.jpg")} />
      <StatusBar style="auto" />
    </View>
  );
}
