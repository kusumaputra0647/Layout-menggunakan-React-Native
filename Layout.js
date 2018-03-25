
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
//import tulisan from './src/isi/tulisan/tulisan';


export default class layout extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.boxOne}>
           <Text style={styles.textHeader}> Pendidkan Teknik Informatika </Text>
        </View>
        <View style={styles.boxTwo}>
           <Text style={styles.textSlider}> Slider </Text>
        </View>
        <View style={styles.boxTree}>
        <View style={styles.boxFour}>
              <View style={styles.ContainerChildBox}>
                            <View style={styles.insideChildBox}>
                            <Text  style={styles.textChildBox1}> 1 </Text>
                            </View>
                            <View style={styles.insideChildBox}>
                            <Text  style={styles.textChildBox1}> 2 </Text>
                            </View>
                            <View style={styles.insideChildBox}>
                            <Text  style={styles.textChildBox1}> 3 </Text>
                            </View>
                            <View style={styles.insideChildBox}>
                            <Text  style={styles.textChildBox1}> 4 </Text>
                            </View>
              </View>
              <View style={styles.ContainerChildBox}>
                            <View style={styles.insideChildBox}>
                            <Text  style={styles.textChildBox1}> 1 </Text>
                            </View>
                            <View style={styles.insideChildBox}>
                            <Text  style={styles.textChildBox1}> 2 </Text>
                            </View>
                            <View style={styles.insideChildBox}>
                            <Text  style={styles.textChildBox1}> 3 </Text>
                            </View>
                            <View style={styles.insideChildBox}>
                            <Text  style={styles.textChildBox1}> 4 </Text>
                            </View>
              </View>
        </View>
        <View style={styles.boxFive}>
            <Text> #JaenKuliahdiPTI </Text>
         </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',

  },
  textHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
    color: 'white'

  },
  textSlider: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textfooter: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
    color: 'white'

  },
  boxOne:{
    flex: 1,
    backgroundColor: '#0040a5'
  },
  boxTwo: {
    flex: 3,
    backgroundColor:'#2f7df9'
  },
  boxTree: {
    flex: 4,
    backgroundColor: '#b5d1ff'
  },
  boxFour: {
    flex: 3,
    backgroundColor: '#93a1ba',
    marginLeft: 10,
    marginRight: 10,
    marginTop : 14,
    marginBottom: 15
  },
  boxFive: {
    flex: 1,
    backgroundColor: '#0040a5',
    marginLeft: 10,
    marginRight: 10,
    marginTop : 14,
    marginBottom: 13
  },
//childBox atau box kecil
  ContainerChildBox: {
    flex: 1,
    flexDirection: 'row',
  },
  insideChildBox: {
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 13,
    marginRight: 13,
    marginTop : 14,
    marginBottom: 15
  },
  textChildBox1: {
    flex: 3,
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },

});
