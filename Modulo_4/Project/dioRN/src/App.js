import React from 'react';
import {View, 
        Image, 
        StyleSheet, 
        SafeAreaView, 
        StatusBar, 
        Text,
        Pressable,
        Linking,
    } from 'react-native';

const colorGitHub = '#010409';
const coloFontGitHub = '#C9D1D9';
const colodarkFontGitHub = '#4F565E';
const imageProfile = 'https://instagram.fcgh11-1.fna.fbcdn.net/v/t51.2885-19/179473489_1399410630440291_2153572939237618649_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcgh11-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=wi1Kga4e_WYAX9If1NU&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT-Bq8AOR1S80tzDxLyhmj9G1fKAF1TUdm61gkiUYiQkVA&oe=62A57B24&_nc_sid=8fd12b';
const linkGitHub = 'https://github.com/Vincius-Genu';

const App = ()=> {
    const handlePressGoToGitHub = async ()=>{
        console.log('Verificando link');
        const res = await Linking.canOpenURL(linkGitHub);        
        if(res){
            console.log('link Aprovado');
            console.log('Abrindo link...');
            await Linking.openURL(linkGitHub);
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle='light-content' />
            <View style={style.content}>
                <Image accessibilityLabel='Vinicius em Toronto em frente ao mar posando para foto' 
                style={style.avatar} 
                source={{uri:imageProfile}}
                /> 
                <Text 
                    accessibilityLabel='Nome: Vinicius Genu Alda' 
                    style={[style.defaultText, style.name]}>
                    Vinicius Genu Alda 
                </Text>
                <Text 
                    accessibilityLabel='Nickname: Vinicius-Genu' 
                    style={[style.defaultText, style.nickname]}>
                    Vinicius-Genu
                </Text>
                <Text 
                    accessibilityLabel='Formado em Enhgenahria civil e atualmente estudante de banco de dados e em projeto de transição de carreira.'
                    style={[style.defaultText, style.description]}>
                    Formado em Enhgenahria civil e atualmente estudante de banco de dados e em projeto de transição de carreira.
                </Text>
                <Pressable onPress={handlePressGoToGitHub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Open in GitHub
                        </Text>
                    </View>            
                </Pressable>
            </View>            
        </SafeAreaView>        
    ); 
};

export default App;

const style = StyleSheet.create({
    container: {
        // Column
        backgroundColor: colorGitHub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row'
    },
    content: {
        alignItems: 'center',
        padding: 20,

    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: coloFontGitHub,

    },
    name: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    nickname:{
        fontSize: 18,
        color: coloFontGitHub,
        color: colodarkFontGitHub,
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold'

    },
    button: {
        backgroundColor: colodarkFontGitHub,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold'
    },
});