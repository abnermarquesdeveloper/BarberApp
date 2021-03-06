import AsyncStorage from '@react-native-community/async-storage';

const BASE_API = "https://api.b7web.com.br/devbarber/api";
//const BASE_API = "http://127.0.0.1:8000/api";


export default {

    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        return req.json();
    },

    signIn: async (email, password) => {
        const req = await fetch(`${BASE_API}/auth/login`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        return req.json();
    },

    signUp: async (name, email, password) => {
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        return req.json();
    },

    logOut: async () => {
        let token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/auth/logout`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        return req.json();
    },

    getBarbers: async (lat=null, lng=null, address=null) => {
        const token = await AsyncStorage.getItem('token');

        console.log("LAT", lat);
        console.log("LNG", lng);
        console.log("Address", address);

        const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`);
        return req.json();
    },

    getBarber: async (id) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/barber/${id}?token=${token}`);
        const json = req.json();
        console.log(json);
        return json;
    }

};