import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Stars from '../../components/Stars';
import FavoriteIcon from '../../assets/favorite.svg';
import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';

import { Container,Scroller,PageBody,LoadinIcon,
        FakeSwiper,SwipeDot,SwipeItem,SwipeImage,BackButton,
        UserAvatar,UserInfo,UserInfoName,UserFavButton,UserInfoArea,
        ServiceArea,ServicesTitle,ServiceItem,ServiceInfo,ServiceName,ServicePrice,ServiceChooseButton,ServiceChooseBtnText,
        TestimonialArea,TestimonialItem,TestimonialInfo,TestimonialName,TestimonialBody
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

                    {loading &&
                        <LoadinIcon size="large" color="#000" />
                    }

                    {barberInfo.services &&
                        <ServiceArea>
                            <ServicesTitle>Lista de Serviços</ServicesTitle>
                            {barberInfo.services.map((item, key)=>(
                                <ServiceItem key={key}>
                                    <ServiceInfo>
                                        <ServiceName>{item.name}</ServiceName>
                                        <ServicePrice>R$ {item.price}</ServicePrice>
                                    </ServiceInfo>
                                    <ServiceChooseButton>
                                        <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
                                    </ServiceChooseButton>
                                </ServiceItem>
                            ))}
                        </ServiceArea>
                    }

                    {barberInfo.testimonials && barberInfo.testimonials.length > 0 &&
                        <TestimonialArea>
                            <Swiper
                                style={{height: 110}}
                                showsPagination={false}
                                showsButtons={true}
                                prevButton={<NavPrevIcon width="35" height="35" fill="#000"/>}
                                nextButton={<NavNextIcon width="35" height="35" fill="#000"/>}
                            >
                                {barberInfo.testimonials.map((item, key)=>(
                                    <TestimonialItem key={key}>
                                        <TestimonialInfo>
                                            <TestimonialName>{item.name}</TestimonialName>
                                            <Stars stars={item.rate} showNumber={false}/>
                                        </TestimonialInfo>
                                        <TestimonialBody>{item.body}</TestimonialBody>
                                    </TestimonialItem>
                                ))}
                            </Swiper>
                        </TestimonialArea>                    
                    }

                </PageBody>
            </Scroller>
            
            {/*O botão pode ir em qualquer lugar porque será usado a POSITION: Absolute; em sua estilização*/}
            <BackButton onPress={handleBackButton}>
                <BackIcon width="44" height="44" fill="#FFF"/>
            </BackButton>

        </Container>
    );
}