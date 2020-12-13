import styled from 'styled-components';

const HeaderContainerDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 2rem 0 2rem 0;
    .container-logo{
        margin:0.5rem;
    }
    .imagem-logo{
        width:0.7rem;
        height:3rem;
        height:1rem;
    }
    .imagem-logo2{
        width:1rem;
        height:1.7rem;
        margin-left:0.5rem;
    }
    .container-info{
        display:flex;
    }
    .container-links{
        display:flex;
        margin-left:4rem;
    }
    .container-button-request{
        padding:1rem;
        cursor:pointer;
    }
    .container-button-request:hover{
        background-color:#fffff2;
        border-radius:2rem;
    }
    .container-button-img{
        padding:1rem;
        display:flex;
        align-items:center;
        cursor:pointer;

        border-radius:2rem;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    }
    .container-button-img:hover{
        background-color:#fffff2;
        border-radius:2rem;
    }
    .container-button-img-logo{
        margin-left:0.5rem;
        color:#cb51db;
    }

`

export default HeaderContainerDiv;
