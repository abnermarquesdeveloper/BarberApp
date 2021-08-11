import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Stars from '../../components/Stars';
import FavoriteIcon from '../../assets/favorite.svg';
import BackIcon from '../../assets/back.svg';
import {
    Container,
    Scroller,
    FakeSwiper,
    SwipeDot,
    SwipeItem,
    SwipeImage,
    PageBody,
    UserInfoArea,
    ServiceArea,
    TestimonialArea,
    UserAvatar,
    UserInfo,
    UserInfoName,
    UserFavButton,
    BackButton
    } from './styles';

import Api from '../../Api';
//import UserContext from '../../contexts/UserContext';

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

    const handleBackButton = () => {
        navigation.goBack();
    }

    return(
        <Container>
            <Scroller>
                {barberInfo.photos && barberInfo.photos.length > 0 ?
                    <Swiper
                        style={{height: 240}}
                        dot={<SwipeDot active={false}/>}
                        activeDot={<SwipeDot active={true}/>}
                        paginationStyle={{top: 15, right: 15, bottom: null, left:null}}
                        autoplay={true}
                    >
                        {barberInfo.photos.map((item, key)=>(
                            <SwipeItem key={key}>
                                <SwipeImage source={{uri:item.url}} resizeMode="cover"/>
                            </SwipeItem>
                        ))}
                    </Swiper>
                    :
                    <FakeSwiper>

                    </FakeSwiper>
                }
                <PageBody>
                    <UserInfoArea>
                        <UserAvatar source={{uri:barberInfo.avatar}}/>
                        <UserInfo>
                            <UserInfoName>{barberInfo.name}</UserInfoName>
                            <Stars stars={barberInfo.stars} showNumber/>
                        </UserInfo>
                        <UserFavButton>
                            <FavoriteIcon width="24" height="24" fill="#FF0000"/>
                        </UserFavButton>
                    </UserInfoArea>
                    <ServiceArea>

                    </ServiceArea>
                    <TestimonialArea>

                    </TestimonialArea>
                </PageBody>
            </Scroller>
            
            {/*O botão pode ir em qualquer lugar porque será usado a POSITION: Absolute; em sua estilização*/}
            <BackButton onPress={handleBackButton}>
                <BackIcon width="44" height="44" fill="#FFF"/>
            </BackButton>

        </Container>
    );
}