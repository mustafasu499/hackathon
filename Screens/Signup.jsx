import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {BASE_URI} from '../config/index.js';

export const Signup = () => {
  const [name, setname] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const handleSignup = async () => {
    if (name && email && password) {
      const data = {
        name,
        userName,
        email,
        password,
      };
      await axios
        .post(`${BASE_URI}/signup/api`, data)
        .then(async res => {
          await console.log(res.data);
          if (res.data.status == false) {
            Alert.alert('worng email or password');
          } else {
            navigation.navigate('Login');
          }
        })
        .catch(err => console.log(err));
    }
  };

  const navigate_login = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <LinearGradient
        colors={['#04021C', '#310647', '#090642', '#150326', '#000B0D']} // Gradient colors
        start={{x: 0.23, y: 0}} // Start point (similar to 29 degrees)
        end={{x: 1, y: 1}} // End point (diagonal gradient)
        style={styles.container} // Apply the gradient to the container
      >
        <View style={styles.logoContainer}>
          <Image
            source={{uri: 'https://example.com/logo.png'}} // Replace with your logo URL
            style={styles.logo}
          />
          <Text style={styles.title}>FOODIE</Text>
        </View>

        <Text style={styles.subtitle}>Deliver Favourite Food</Text>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Signup</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#aaa"
              onChangeText={newText => setname(newText)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="UserName"
              placeholderTextColor="#aaa"
              onChangeText={newText => setUserName(newText)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
              placeholderTextColor="#aaa"
              onChangeText={newText => setemail(newText)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry={showPassword}
              onChangeText={newText => setpassword(newText)}
            />
            <TouchableOpacity
              style={{position: 'absolute', right: 20, top: 15}}
              onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Feather name="eye" size={20} color="#aaa" />
              ) : (
                <Feather name="eye-off" size={20} color="#aaa" />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigate_login}>
            <Text style={styles.alreadyText}>Already have an account?</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#b3b3b3',
    fontSize: 18,
    marginBottom: 30,
  },
  formContainer: {
    width: '85%',
    backgroundColor: '#1f2235',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  formTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputContainer: {
    marginBottom: 15,
    position: 'relative',
  },
  input: {
    backgroundColor: '#2a2d42',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#444',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alreadyText: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 15,
  },
  signupText: {
    color: '#007bff',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default Signup;
