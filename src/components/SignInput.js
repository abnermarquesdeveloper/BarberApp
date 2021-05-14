import React from 'react';
import styled from 'styled-components/native';


const InputArea = styled.View`
    width: 100%;
    height: 50px;
    background-color: #83D6E3;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 20px;
    align-items: center;
    margin-bottom: 15px;
`;

const Input = styled.TextInput`
    flex: 1;
    color: #268596;
    font-size: 16px;
    margin-left: 8px;
`;

export default (props) => {
    return(
        <InputArea>
            <props.IconSvg width="24" height="24" fill="#268596"/>
            <Input
                placeholder={props.placeholder}
                placeholderTextColor="#268596"
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.password}
            />
        </InputArea>
    );
}