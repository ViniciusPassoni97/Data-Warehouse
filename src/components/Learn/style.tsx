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
        transition:0.7s;
    }
    .learn-div-info-button:hover{
        background-color:#cb51a0;
    }
    .learn-div{
        display:flex;
    }
    .learn-div-image-logo{
        width:30rem;
        height:27rem;
    }
    .learn-div-info-title{
        font-weight:bold;
        font-size:3rem;
    }
    .learn-div-info-paramns{
        margin-top:4rem;
        font-size:1.1rem;
    }
    .learn-div-info-button{
        margin-top:2rem;
    }
    @media(max-width: 1100px){
        .learn-div-image-logo{
            width:25rem;
            height:23rem;
        }
        .learn-div-info-title{
            font-size:2rem;
        }
        .learn-div-info-paramns{
            font-size:0.9rem;
        }
    }
    @media(max-width: 900px){
        .learn-div-image-logo{
            width:20rem;
            height:20rem;
        }
        .learn-div-info-title{
            font-size:1.8rem;
        }
        .learn-div-info-paramns{
            font-size:0.8rem;
        }
    }
    @media(max-width: 900px){
        .learn-div-image-logo{
            width:20rem;
            height:20rem;
        }
        .learn-div-info-title{
            font-size:1.8rem;
        }
        .learn-div-info-paramns{
            font-size:0.8rem;
        }
    }
    @media(max-width: 600px){
        .learn-div-image{
            display:none;
        }
        .learn-div{
            width:80%;
            margin-left:auto;
            margin-right:auto;
            text-align:center
        }
        .learn-div-info-button{
            margin-left:auto;
            margin-right:auto;
        }
        .learn-div-image-logo{
        }
        .learn-div-info-title{
        }
        .learn-div-info-paramns{
        }
    }
`;

export default LearnDiv;