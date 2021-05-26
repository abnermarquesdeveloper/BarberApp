import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import Api from '../../Api';

import {
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    SearchButton,

    LocationArea,
    LocationInput,
    LocationFinder,

    LoadingIcon

    } from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () =>{

    const navigation = useNavigation();

    const [locationText, setLocationText] = useState();
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [listBarbers, setListBarbers] = useState([]);

    const handleLocationFinder = async () => {

        setCoords(null);
        let result = await request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if(result == 'granted'){
            setLoading(true);
            setLocationText('');
            setListBarbers([]);

            Geolocation.getCurrentPosition((info)=>{
                setCoords(info.coords);
                getBarbers();
            });
        }
    }

    const getBarbers = async () => {
        setLoading(true);
        setListBarbers([]);
        
        let res = await Api.getBarbers();
        console.log(res);
        if(res.error == ''){
            setListBarbers(res.data);
        }else{
            alert('Error: '+res.error);
        }
        setLoading(false);

    }

    useEffect(()=>{
        getBarbers();
    },[]);

    return(
        <Container>
            <Scroller>

                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o seu barbeiro favorito</HeaderTitle>
                    <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#FFF"/>
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput 
                        placeholder="Onde você está?"
                        placeholderTextColor="white"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#FFF"/>
                    </LocationFinder>
                </LocationArea>

                {loading &&
                    <LoadingIcon size="large" color="#FFF"/>
                }

            </Scroller>
        </Container>
    );
}