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


export const ServiceArea = styled.View``;

export const TestimonialArea = styled.View``;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 5px;
    top: 5px;
    z-index: 9;
`;