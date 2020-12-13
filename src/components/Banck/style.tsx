import styled from 'styled-components';

const BanckDiv = styled.div`
    padding:2rem;
    .banck-div-motion{
        display:flex;
        justify-content:space-between;
        margin-top:2rem;
        background-color:#f5d4e6;
        border-radius:2rem;
    }
    .banck-image{
        width:20rem;
        height:17rem;
    }
    .banck-div-info{
        padding:2rem 1rem 2rem 1rem;
        text-align:center;
    }
    .banck-div-info-title{
        font-weight:bold;
        font-size:32px;
    }
    .banck-div-info-info{
        padding:2rem;
        font-size:12px;
    }
    @media(max-width:800px){
        margin-top:2rem;
        padding:0.5rem;
        .banck-image{
            width:16rem;
            height:14rem;
        }
        .banck-div-info-title{
            font-size:27px;
        }
        .banck-div-info-info{
            font-size:10px;
        }
    }
    @media(max-width:600px){
        .banck-image{
            display:none;
        }
        .banck-div-info-title{
            text-align:center;
            font-size:30px;
        }
        .banck-div-info-info{
            text-align:center;
            font-size:13px;
        }
    }
    .banck-div-logo{
     
    }
    .banck-div-info{
     
    }
`;

export default BanckDiv;