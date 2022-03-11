import React, {Component} from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import api_sa from './src/services/api.js';
import Consultas from './src/Consultas/index.js';

class App extends Component{
  constructor(props){
    super(props);

    this.state = ({
      consultas: []
    })
  }

  async componentDidUpdate(){
    const response = await api_sa.get('agendamentos?chave_api=36g6yCk!Q0c1816yC-43u0Cyq!Sob5&id_cliente=3520&data_inicial=2022-01-01&data_final=2022-05-20');
 
    console.log(response.data)
    this.setState({
      consultas: response.data
    })
  }

render(){
  console.log(this.state.consultas)
  return(
    <View style={styles.container}>
      <FlatList
      data={this.state.consultas}
      keyExtractor= {item => item.id_empresa()}
      renderItem={ ({item}) => <Consultas data={item} />}
      />
    </View>
  )
}

}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:50
  },
});
/*
import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  return(
    <View style={styles.container}>
      <Text>Você clicou {count} vez(es)</Text>
      <Button
        title="Clique Aqui"
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
*/