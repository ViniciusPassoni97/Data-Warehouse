import styled from 'styled-components';

const LearnDiv = styled.div`
    margin-top:5rem;
    .learn-div-info-button{
        padding:1rem;
        display:flex;
        align-items:center;
        border-radius:2rem;
        background-color:#cb51db;
        color:#ffffff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    }
    .learn-div{
        display:flex;
    }
    .learn-div-image-logo{
        width:30rem;
        height:23rem;
    }
    .learn-div-info-title{
        font-weight:bold;
        font-size:3rem;
    }
    .learn-div-info-paramns{
        margin-top:4rem;
        font-size:1.1rem;
    }
`;

export default LearnDiv;