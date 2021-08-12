import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFF;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const SwipeDot = styled.View`
    width: 10px;
    height: 10px;
    background-color: ${(props)=> props.active ? "#000" : "#FFF"};
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeItem = styled.View`
    flex: 1;
    background-color: #63C2D1;
`;

export const SwipeImage = styled.Image`
    width: 100%;
    height: 240px;
`;

export const FakeSwiper = styled.View`
    height: 140px;
    background-color: #63C2D1;
`;

export const PageBody = styled.View`
    background-color: #FFF;
    border-top-left-radius: 50px;
    margin-top: -50px;
    min-height: 400px;
`;

export const UserInfoArea = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px;
    margin-top: -50px;
    margin-left: 20px;
    border-radius: 20px;
    border-width: 3px;
    border-color: #DDD;
`;

export const UserInfo = styled.View`
    margin: 5px;
`;

export const UserInfoName = styled.Text`
    align-self: center;
    font-size: 20px;
    color: #000;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const UserFavButton = styled.TouchableOpacity`
    margin-top: -20px;
    width: 40px;
    height: 40px;
    background-color: #FFF;
    border: 2px solid #DDD;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const LoadinIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const ServiceArea = styled.View`
    margin-top: 30px;
`;

export const ServicesTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #268596;
    margin-left: 30px;
    margin-bottom: 20px;
`;

export const ServiceItem = styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-right: 20px;
    border: 1px solid #DDD;
    border-radius: 10px;
    margin-bottom: 10px;
`;
export const ServiceInfo = styled.View`
    flex: 1;
`;

export const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-top: 5px;
    margin-left: 5px;
    color: #268596;
`;

export const ServicePrice = styled.Text`
    font-size: 14px;
    margin-left: 5px;
    color: #268596;
`;

export const ServiceChooseButton = styled.TouchableOpacity`
    background-color: #4EADBE;
    border-radius: 10px;
    padding: 15px 10px;
`;

export const ServiceChooseBtnText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #FFF;
`;


export const TestimonialArea = styled.View``;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 5px;
    top: 5px;
    z-index: 9;
`;