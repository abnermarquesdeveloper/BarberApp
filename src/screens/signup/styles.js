import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
     background-color: #63C2D1;
     flex: 1;
     justify-content: center;
     align-items: center;
`;

export const InputArea = styled.View`
     padding: 40px;
     width:100%;
`;

export const CustomButton = styled.TouchableOpacity`
     height:50px;
     background-color:#268596;
     border-radius:30px;
     justify-content:center;
     align-items:center;
`;
export const CustomButtonText = styled.Text`
     font-size:18px;
     color:#FFF;
`;

export const SignMessageButton = styled.TouchableOpacity`
     flex-direction: row;
     justify-content:center;
     margin-top:50px;
     margin-bottom:20px;
     background-color: #63C2D1;
`;
export const SignMessageButtonText = styled.Text`
     font-size:16px;
     
`;
export const SignMessageButtonTextBold = styled.Text`
     font-size:16px;
     font-weight:bold;
     margin-left:5px;
`;