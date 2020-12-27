import styled from 'styled-components';

export const ScrowDiv = styled.div`
    margin-top:7rem;
    width:90%;
    margin:9rem auto;
    border-radius:2.5rem;
    height:30rem;
    background: #9C69E2;
`;
export const ScrowDivTitle = styled.p`
    margin-top:3rem;
    margin-left:5rem;
    font-size:2rem;
    font-weight:bold;
    color:#ffffff;
`;
export const ScrowDivTitleCard = styled.div`
    margin-top:2rem;    
    text-align: center;
    overflow: hidden;
    display:flex;
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
    .ScrowDivTitleCardDiv{
        padding:1rem;
    }
`;
export const ScrowDivTitleLink = styled.div`
    display:flex;
    .slide-1{
        margin-left:0.3rem;
        color:#ffffff;
        transition:0.5s;
    }
    .slide-1:hover{
        color:#F063B8;
    }
`