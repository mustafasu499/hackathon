import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { primary_color } from '../utils/app_theme.js'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

export const Login_SignUp_Button = () => {
  const navigation = useNavigation()

  const go_to_login_screen = () => {
    navigation.navigate('Login')
  }
  const go_to_signup_screen = () => {
    navigation.navigate('Signup')
  }
  return (
    <View style={{ backgroundColor: 'white', flex: 1, paddingVertical: 20, paddingHorizontal: 20 }}>
      <Image resizeMode='cover' height={350} source={{ uri: 'https://img.freepik.com/premium-vector/useful-tips-abstract-concept-vector-illustration_107173-29003.jpg?w=740' }} />




      <View style={{ alignItems: 'center' }}>
        <View style={{ gap: 30, maxWidth: 250 }}>
          <View>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'black', fontSize: 25 }}>
            Welcome to ShopEase!
            </Text>
            <Text style={{ textAlign: 'center', color: 'black', fontSize: 15 }}>
            Discover the best deals and manage your orders effortlessly. Log in or sign up to start shopping with us today.
            </Text>
          </View>


          <View style={{ gap: 15 }}>
            <TouchableOpacity onPress={go_to_login_screen} style={{ backgroundColor: primary_color, paddingVertical: 15, borderRadius: 30 }}>
              <Text style={{ textAlign: 'center', color: 'white', flexWeight: 'bold' }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={go_to_signup_screen} style={{ borderColor: primary_color, borderWidth: 2, paddingVertical: 15, borderRadius: 30 }}>
              <Text style={{ textAlign: 'center', color: primary_color, flexWeight: 'bold' }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>




          <View style={{gap:15}}>
            <Text style={{textAlign:'center', color : 'black'}}>
              Signup using
            </Text>

            <View style={{flexDirection:'row', gap:10, justifyContent:'center'}}>
              <TouchableOpacity>
                <Entypo color={primary_color} size={35} name="facebook-with-circle" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome color='red' size={35} name="google-plus-circle" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo color={primary_color} size={35} name="linkedin-with-circle" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>


    </View>
  )
}
