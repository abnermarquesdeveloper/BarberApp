import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import {Text} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Api from '../../Api';

export default () =>{

    const navigation = useNavigation();
    const route = useRoute();

    const [barberInfo, setBarberInfo] = useState({
        id: route.params.id,
        avatar: route.params.avatar,
        name: route.params.name,
        stars: route.params.stars
    });

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getBarberInfo = async () => {
            setLoading(true);
            let json = await Api.getBarber(barberInfo.id);
            if(json.error == ''){
                setBarberInfo(json.data);
            }else{
                alert("error: " +json.error);
            }
            setLoading(false);
        }
        getBarberInfo();
    },[]);

    return(
        <Container>
            <Text>Barbeiro: {barberInfo.name}</Text>
        </Container>
    );
}