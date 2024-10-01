import React from 'react';
import { Dimensions, Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {
    return (
        <ImageBackground style={styles.bgLogin} source={require('../images/bg_login.jpg')}>
            <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ width: '100%', height: '100%' }}>
                    <View style={styles.logoContainer}>
                        <View style={styles.logoBackground}>
                            <Image style={styles.logo} source={require('../images/logo1.jpg')} />
                        </View>
                    </View>
                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcomeText}>Welcome to Cà Phê Fpoly !!</Text>
                        <Text style={styles.loginText}>Đăng Nhập Để Tiếp Tục</Text>
                    </View>
                    <View style={styles.boxInput}>
                        <View style={styles.fieldLogin}>
                            <TextInput style={styles.emailInput} placeholder='Email Address' />
                        </View>
                        <View style={styles.fieldLogin}>
                            <TextInput style={styles.passwordInput} placeholder='Password' secureTextEntry={true} />
                            <TouchableOpacity style={{ height: '100%', width: 30, position: 'absolute', right: 30, top: 0 }}>
                                <Image style={{ height: '100%', width: '100%' }} resizeMode='contain' source={require('../icons/ic_visibility.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.signInField}>
                        <TouchableOpacity style={styles.loginButton}
                            onPress={() => {
                                navigation.navigate('Home')
                            }}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.googleButton}>
                            <Text style={styles.buttonText}>Sign in with Google</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.RegisterField}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 15,
                                fontWeight: 'bold',
                                marginEnd: 5
                            }}>Don't have account? Click</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Register')
                            }}>
                                <Text style={{ color: 'cyan', fontSize: 15, fontWeight: 'bold' }}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default Login;

const styles = StyleSheet.create({
    bgLogin: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    boxInput: {
        width: '100%',
        height: '20%',
        marginTop: 0.09 * deviceHeight,
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 0.09 * deviceHeight,
    },
    logoBackground: {
        width: 125,
        height: 125,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1FFFF',
        borderRadius: 100,
        opacity: 0.8,
    },
    logo: {
        width: 140,
        height: 140,
        borderRadius: 15,
    },
    fieldLogin: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    emailInput: {
        backgroundColor: '#fff',
        height: 55,
        width: '97%',
        borderWidth: 1,
        borderColor: '#7a7d82',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    passwordInput: {
        backgroundColor: '#fff',
        height: 55,
        width: '97%',
        borderWidth: 1,
        borderColor: '#7a7d82',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontFamily: 'FS Harabara',
    },
    loginText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 20,
        marginTop: 5,
    },
    signInField: {
        width: '100%',
        height: '20%',
        marginTop: 0.03 * deviceHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        width: '85%',
        height: '30%',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b56bbf',
    },
    googleButton: {
        marginTop: 20,
        width: '85%',
        height: '30%',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    RegisterField: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',

    }
});
