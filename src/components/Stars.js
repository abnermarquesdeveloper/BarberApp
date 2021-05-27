import React from 'react';
import styled from 'styled-components/native';

import StarFull from '../assets/star.svg';
import StarHalf from '../assets/star_half.svg';
import StarEmpty from '../assets/star_empty';

const StarArea = styled.View`
    flex-direction: row;
`;

const StarView = styled.View``;

const StarText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #737373;
    margin-left: 5px;
`;

export default ({stars, showNumber}) => {

    let s = [0, 0, 0, 0, 0]; // 0 = Estrela vazia, 1 = meia estrela, 2 = estrela cheia.
    let floor = Math.floor(stars); // Pega só os "inteiros das notas"
    let left = stars - floor; // total das estrelas "5" menos a nota "de 0 a 5" temos o restante para definir a "meia estrela".

    for(var i = 0; i < floor; i++){ //este FOR preenche o array com as estrelas "cheias".
        s[i] = 2;
    }
    if(left > 0){ // se houver notas "não inteiras" adiciona logo depois das "estrelas inteiras" uma "meia estrela".
        s[i] = 1;
    }

    return(
        <StarArea>
            {s.map((item, k)=>(
                <StarView key={k}>
                    {item === 0 && <StarEmpty width="18" height="18" fill="#FF9200"/>}
                    {item === 1 && <StarHalf width="18" height="18" fill="#FF9200"/>}
                    {item === 2 && <StarFull width="18" height="18" fill="#FF9200"/>}
                </StarView>
            ))}
            {showNumber && <StarText>{stars}</StarText>}
        </StarArea>
    );
}