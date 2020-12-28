import styled from 'styled-components';

export const FooterDiv = styled.div`
    border-top:1.6px solid #c5c3c3;
`;
export const FooterDivFree = styled.div`
    margin-top:4rem;
    display:flex;
    justify-content:space-between;
    .footerDivFreeInfo{
        .footerDivFreeInfoTitle{
            font-size:1.6rem;
            font-weight:bold;
        }
        .footerDivFreeInfoTitleWeek{
            margin-top:0.8rem;
            font-size:0.8rem;
        }
    }
    .footerDivFreeButton{
        display:flex;
        .container-button-img{
            margin-right:2rem;
            padding:1rem;
            display:flex;
            align-items:center;
            border-radius:2rem;
            background-color:#ffffff;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
            transition:0.7s;
        }
        .container-button-img-logo{
            color: #cb51db;
            margin-left:0.6rem;
        }
        .container-button-img:hover{
            .container-button-img-logo{
                color: #fff;
            }
            background-color:#cb51db;
            color:#ffffff;
        }
    }
`;