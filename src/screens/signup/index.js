import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
 } from './styles';

import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/barber.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleMassageButtonClick = () =>{
        navigation.reset({
            routes:[{name: 'SignIn'}]
        });
    }

    return(
        <Container>
            <BarberLogo width='100%' height='160px'/>
            
            <InputArea>
                
                <SignInput
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

                <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu E-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}   
                />

                <CustomButton>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMassageButtonClick}>
                <SignMessageButtonText>Já tem uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça o Login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}