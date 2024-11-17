// import { View, Text } from 'react-native';
// import React from 'react';

// const Carts = ({ route }) => {
//   // Get the data passed from the previous screen
//   const { id, data } = route.params;

//   return (
//     <View>
//       <Text>Carts</Text>
//       {/* Displaying the data */}
//       <Text>ID: {id}</Text>
//       <Text>Title: {data.title}</Text>
//       <Text>Description: {data.desc}</Text>
//       <Text>Price: {data.Price}</Text>
//     </View>
//   );
// };

// export default Carts;
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import carts from '../assets/carts.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import Card from '../component/Card';
import {useNavigation} from '@react-navigation/native';

const Carts = ({route}) => {
  const {data} = route.params;
  const navigation = useNavigation();
  return (
    <ScrollView>
      <LinearGradient
        colors={['rgba(2,0,36,1)', 'rgba(47,49,120,1)', 'rgba(0,0,0 ,1)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.container}>
        <ImageBackground source={carts} style={{height: 250, width: '100%'}}>
          <View style={styles.header}>
            <View style={styles.iconBox}>
              <Ionicons name="arrow-back" size={22} />
            </View>
            <View style={{flexDirection: 'row', gap: 20}}>
              <View style={styles.iconBox}>
                <AntDesign name="heart" size={22} />
              </View>
              <View style={styles.iconBox}>
                <Entypo name="dots-three-horizontal" size={22} />
              </View>
            </View>
          </View>
        </ImageBackground>
        <LinearGradient
          colors={[
            'rgba(0,0,0,0.2896185028419066)',
            ' rgba(0,0,0,0.6154611994711201)  ',
          ]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.heroDiv}>
          {data ? (
            <View>
              <View style={styles.heroDivOne}>
                <Text style={{fontSize: 26}}>title</Text>
                <Text style={{fontSize: 16}}>10,00$</Text>
              </View>
              <View style={styles.heroDivTwo}>
                <Text>description</Text>
              </View>
            </View>
          ) : (
            <View>
              <View style={styles.heroDivOne}>
                <Text style={{fontSize: 26}}>{data.name}</Text>
                <Text style={{fontSize: 16}}>{data.price}</Text>
              </View>
              <View style={styles.heroDivTwo}>
                <Text>{data.description}</Text>
              </View>
            </View>
          )}
        </LinearGradient>

        <View></View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Carts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 720,
  },
  header: {
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '100%',
    marginTop: 10,
  },
  iconBox: {
    height: 40,
    width: 40,
    borderColor: '#999B9E',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  heroDiv: {
    height: 200,
    width: '90%',
    borderRadius: 20,
    marginHorizontal: 'auto',
    marginTop: -90,
    paddingHorizontal: 20,
  },
  heroDivOne: {
    flex: 1,
    justifyContent: 'center',
  },
  heroDivTwo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -50,
  },
  OrderDetail: {
    height: 100,
    width: '90%',
    backgroundColor: '#919191',
    marginHorizontal: 'auto',
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row',
    padding: 15,
  },
  orderImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  OrderImg: {
    height: 150,
    width: 150,
  },
});
