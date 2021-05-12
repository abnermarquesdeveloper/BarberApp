import React from 'react';
import { 
    Container,
    InputArea
 } from './styles';
import BarberLogo from '../../assets/barber.svg';

export default () => {
    return(
        <Container>
            <BarberLogo width='100%' height='160px'/>
            
            <InputArea>
                <SingInput />
                <SingInput />

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton>
                <SignMessageButtonText>Ainda não tem uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}