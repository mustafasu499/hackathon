import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';
import pasta from '../assets/pasta-removebg-preview.png';
import fastfood from '../assets/fastfood.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.hotelName}>Maplewood Suites</Text>
          <TouchableOpacity style={styles.deliveryIcon}>
           <MaterialIcons name = 'delivery-dining' size= {25}/>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Your order?"
            placeholderTextColor="#bbb"
          />
        </View>

        {/* Categories Section */}
        <Text style={{marginLeft: 15, fontSize: 15}}>Categories</Text>
        <View style={{textAlign: 'center', width: '100%', marginBottom: 10}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}>
            <TouchableOpacity style={styles.categoryCard}>
              <Image
                source={require('../assets/burger.jpeg')}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>Burgers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryCard}>
              <Image
                source={require('../assets/dessert.png')}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>Dessert</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryCard}>
              <Image
                source={require('../assets/mexican.png')}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>Mexican</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryCard}>
              <Image
                source={require('../assets/sushi.png')}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>Sushi</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Offer Section */}
        <View>
          <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.card}>
                <View style={{width: 200}}>
                  <Text style={styles.discountText}>30% OFF</Text>
                  <Text style={styles.description}>
                    Discover discounts in your favorite local restaurants
                  </Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Order Now</Text>
                  </TouchableOpacity>
                </View>
                <View style={{paddingTop: 50}}>
                  <Image
                    style={styles.image_1}
                    source={pasta} // replace with your image URL
                  />
                </View>
              </View>
              <View style={styles.card}>
                <View style={{width: 200}}>
                  <Text style={styles.discountText}>30% OFF</Text>
                  <Text style={styles.description}>
                    Discover discounts in your favorite local restaurants
                  </Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Order Now</Text>
                  </TouchableOpacity>
                </View>
                <View style={{paddingTop: 50}}>
                  <Image
                    style={styles.image_1}
                    source={pasta} // replace with your image URL
                  />
                </View>
              </View>
              <View style={styles.card}>
                <View style={{width: 200}}>
                  <Text style={styles.discountText}>30% OFF</Text>
                  <Text style={styles.description}>
                    Discover discounts in your favorite local restaurants
                  </Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Order Now</Text>
                  </TouchableOpacity>
                </View>
                <View style={{paddingTop: 50}}>
                  <Image
                    style={styles.image_1}
                    source={pasta} // replace with your image URL
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <Text style={{marginLeft: 20, margin: 25, fontSize: 15}}>
          Fastest near you
        </Text>
        <View style={styles.card_2}>
          <Image
            style={styles.image_2}
            source={fastfood} // replace with your image URL
          />
          <Text style={styles.discountText}>30% OFF</Text>
          <Text style={styles.description}>
            Discover discounts in your favorite local restaurants
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card_2}>
          <Image
            style={styles.image_2}
            source={fastfood} // replace with your image URL
          />
          <Text style={styles.discountText}>30% OFF</Text>
          <Text style={styles.description}>
            Discover discounts in your favorite local restaurants
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card_2}>
          <Image
            style={styles.image_2}
            source={fastfood} // replace with your image URL
          />
          <Text style={styles.discountText}>30% OFF</Text>
          <Text style={styles.description}>
            Discover discounts in your favorite local restaurants
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101030',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  hotelName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  deliveryIcon: {
    // Add your icon styles
  },
  searchBarContainer: {
    padding: 20,
  },
  searchBar: {
    backgroundColor: '#2a2a4e',
    borderRadius: 10,
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  categoriesContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryCard: {
    alignItems: 'center',
    backgroundColor: '#101030',
    marginHorizontal: 15,
  },
  categoryImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  categoryText: {
    color: '#fff',
    marginTop: 5,
  },
  offerSection: {
    backgroundColor: '#2a2a4e',
    borderRadius: 15,
    marginHorizontal: 20,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  offerText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  offerSubText: {
    color: '#aaa',
    marginTop: 10,
    textAlign: 'center',
  },
  orderNowButton: {
    backgroundColor: '#4a4aff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  orderNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#1a1a3a',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
  },
  card: {
    backgroundColor: '#121212',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    width: 320,
    marginHorizontal: 10,
    height: '200',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    gap: 5,
    flexDirection: 'row',
  },
  card_2: {
    backgroundColor: '#121212',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    gap: 5,
    marginBottom: 20,
  },
  discountText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  image_1: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  image_2: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0091FF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
