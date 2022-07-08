import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {asset} from './assets/constant/asset'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Image source={asset.Main} style={{width:40,height:40,}}/>
      <Text>hello world</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEFE3',
    
  },
});
