import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const App = () =>  {
  return (
    <LinearGradient 
    style={styles.container}
    colors={['#0B60B0', '#000000']}
    start ={{x: 0, y: 0}}
    end={{x: 0, y :0.55 }}>
   
    <View style = {styles.container}>
      
      <Text style = {styles.textMain}>Hola Mundo</Text>
      <Text style = {styles.textSub}>Me llamo Gabriel</Text>
      <Text style = {styles.text}>Esta es la clase de desarrollo movil</Text>      

    </View>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textMain: {
    color: '#F0EDCF',
    fontWeight: 'bold',
    fontSize: 55

  },

  textSub: {
    color: '#40A2D8',
    fontWeight: 'bold',
    fontSize: 34

  },

  text: {
    color: '#0B60B0',
    fontWeight: 'bold',
    fontSize: 13

  }
});

export default App;
