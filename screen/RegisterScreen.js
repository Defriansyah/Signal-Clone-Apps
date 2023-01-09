import { StyleSheet, View } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Input, Button, Text } from '@rneui/base';
import { auth} from '../firebase';


const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back To Login",
        });
    }, [navigation]);

    const register = () => {
        auth
         .createUserWithEmailAndPassword(email, password)
         .then((authUser) => {
            authUser.user.updateProfile({
                displayName : name,
                photoURL : imageUrl || 
                "https://cdn1-production-images-kly.akamaized.net/A6d4Da-waNi9Mcn3RX-309nDbzg=/760x0/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4254610/original/095929600_1670511568-g_8___8_potret_ai_avatar_aktor-aktor_ganteng_tanah_air_jeremy_thomas_keren_banget_-_versi_aming_malah_bikin_ngakak_ai_avatar_aktor_indonesia-20221208-007-non_fotografer_kly.jpg"

            })
         })
         .catch((error) => alert(error.message));
    };
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}   >
        <StatusBar style="light"/>
        
      <Text h3 style={{marginBottom: 30}}>
        Create Signal Account
        </Text>
        <View style={styles.inputContainer}>
            <Input
                placeholder="Full Name"
                autoFocus type="text"
                value={name}
                onChangeText={(text) => setName (text)}
            />
             <Input
                placeholder="Email"
                type="email"
                value={email}
                onChangeText={(text) => setEmail (text)}
            />
            <Input
                placeholder="Password"
                type="password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword (text)}
            />
            <Input
                placeholder="Profile Picture URL (optional)"
                type="text"
                value={imageUrl}
                onChangeText={(text) => setImageUrl (text)}
                oneSubmitEditing={register}
            />
             

        </View>
        <Button 
        containerStyle={styles.button}
        reised 
        onPress={register} 
        title="Register" />
        <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    button:{
        width: 200,
        marginTop: 10,
    },
    inputContainer :{
        width: 300,
    },
    
    
});