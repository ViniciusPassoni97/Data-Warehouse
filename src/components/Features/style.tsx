import styled from 'styled-components';

const FeaturesDiv = styled.div`
    margin-top:4rem;
    text-align:center;
    .features-div-header-title{
        font-size:36px;
        font-weight:bold;
    }
    .features-div-cards{
        margin-top:6rem;
    }
    .features-div-header-info{
        padding:0 12rem 0 12rem;
        margin-top:3rem;
        font-size:17px;
    }
    .features-div-cards-container:nth-child(2){
        margin-left:5rem;
    }
    .features-div-cards-div{
        margin-left:7rem;
        display:flex;
    }
    .features-div-cards-container{
        display:flex;
        margin:1rem;
    }
    .features-div-cards{
    }
    @media(max-width:1000px){
        .features-div-cards-div{
            margin-left:0;
            display:block;
        }
        .features-div-cards-container{
            display:block;
            margin-top:2rem;
        }
        .features-div-cards-container:nth-child(1){
            margin-left:5rem;
        }
    }
`;

export default FeaturesDiv;