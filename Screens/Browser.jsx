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
import Browser from '../assets/Browser.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import Card from '../component/Card';
import {useNavigation} from '@react-navigation/native';
import {BASE_URI} from '../config';
import {data} from '../Data.js';

const Browse = () => {
  const [data, setData] = useState([]);

  const cardData = async () => {
    await axios
      .get(`${BASE_URI}/food`)
      .then(res => {
        const FetchData = res.data;
        setData(FetchData.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    cardData();
  }, []);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <LinearGradient
        colors={['rgba(2,0,36,1)', 'rgba(47,49,120,1)', 'rgba(0,0,0 ,1)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.container}>
        <ImageBackground source={Browser} style={{height: 250, width: '100%'}}>
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
          <View style={styles.heroDivOne}>
            <Text style={{fontSize: 26}}>Kinka Izakaya</Text>
            <Text style={{fontSize: 16}}>2972 Westheimer Rd. Santa Ana</Text>
          </View>
          <View style={styles.heroDivTwo}>
            <View>
              <Text style={{color: '#919191'}}>Delivery fee</Text>
              <Text style={{fontSize: 16}}>$3.99</Text>
            </View>
            <View>
              <Text style={{color: '#919191'}}>Delivery fee</Text>
              <Text style={{fontSize: 16}}>$3.99</Text>
            </View>
            <View>
              <Text style={{color: '#919191'}}>Delivery fee</Text>
              <Text style={{fontSize: 16}}>$3.99</Text>
            </View>
          </View>
        </LinearGradient>

        <Text
          style={{
            paddingHorizontal: 20,
            marginTop: 10,
            fontSize: 22,
            marginBottom: 20,
          }}>
          Feature Items
        </Text>
        {data.map((e, i) => {
          return (
            <View key={i}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Carts', {data: e})}>
                <Card title={e.name} desc={e.description} price={e.price} />
              </TouchableOpacity>
            </View>
          );
        })}
      </LinearGradient>
    </ScrollView>
  );
};

export default Browse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 160,
    width: '90%',
    borderRadius: 20,
    marginHorizontal: 'auto',
    marginTop: -70,
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
  },
  OrderDetail: {
    height: 150,
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
