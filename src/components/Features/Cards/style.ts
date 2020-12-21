import styled from 'styled-components';

export const CardsFeatures = styled.div`
    display:flex;
    text-align:center;
    margin-top:7rem;
    margin:auto;
    width:20rem;
    height:16rem;
    border-radius:2rem;
    .card-image-img{
        margin-top:3rem;
        margin-left:-4rem;
        width:9rem;
        height:9rem;
    }
    .card-info{
        padding:1.3rem;
        z-index:10px;
    }
    .card-info-title{
        font-size:1.5rem;
        font-weight:600;
    }
    .card-info-info{
        margin-top:1rem;
        font-size:0.9rem;
        font-weight:400;
    }
    .card-info-elipse{
        position:absolute;
        margin:auto;
        margin-top:4rem;
        left:20rem;
        height:10rem;
        width:15rem;
        opacity:30%;
    }
    .card-info-button-img{
        background:#d1f3ee;
        font-size:0.9rem;
        font-weight:400;
        margin-top:2rem;
        align-items:center;
        
    }
    .card-info-button-img-logo{
        color:#cb51db;
        margin-left:0.5rem;
        width:2rem;
    }
`;