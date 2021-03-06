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
export const FooterDivData = styled.div`
    margin-top:6rem;
    display:flex;
    .dataWarehouseTitleInfo{
        display:flex;
        align-items:center;
        .dataWarehouseTitleLogo{
            height:20px;
            width:15px;
        }
        .dataWarehouseTitleLogo1{
            margin-left:0.3rem;
            height:30px;
            width:15px;
        }
        .dataWarehouseTitleText{
            font-size:20px;
            margin-left:1rem;
            font-weight:bold;
        }
    }
    .dataWarehouseTitle{
        .dataWarehouseTitleTexts{
            margin-top:4rem;
            .dataWarehouseTitleTexts1{
                font-size:20px;
            }
            .dataWarehouseTitleTexts2{
                margin-top:2rem;
                color: #c5c3c3;
                font-size:17px;
            }
        }
    }
    .about{
        margin-left:5rem;
        p{  
            padding:0.6rem;
            font-size:20px;
        }
        .aboutTitle{
            font-size:23px;
            font-weight:bold;
        }
        .aboutProfile{
            margin-top:3rem;
        }
    }
    .help{
        margin-left:3rem;
        p{  
            padding:0.6rem;
            font-size:20px;
        }
        .helpSupport{
            font-size:23px;
            font-weight:bold;
        }
        .helpSign{
            margin-top:3rem;
        }
    }
    .socialMedia{
         margin-left:5rem;
    }
    .socialMediaText{
        margin-top:1rem;
    }
    .socialMediaTextTitle {
        font-size:23px;
        font-weight:bold;
    }
    .socialMediaIconsImage{
        display:flex;
        margin-top:3rem;
    }
    .socialMediaIconsImageImg{
        padding:0.6rem;
        width:3rem;
        height:3rem;
    }
    @media(max-width: 1000px){
        .socialMediaIconsImage{
            display:block;
        }
    }
    @media(max-width: 800px){
        .about{
            margin-left:1rem;
        }
        .help{
            margin-left:1rem;
        }
        .socialMedia{
            margin-left:2rem;
        }
    }
    @media(max-width: 750px){
        display:block;
        text-align:center;
        align-items:center;
        .dataWarehouseTitleInfo{
            margin-left:10rem;
        }
        .about{
            margin-top:3rem;
            .aboutProfile{
                margin-top:0px;
            }
        }
        .help{
            margin-left:3rem;
            .helpSupport{
                margin-top:3rem;
            }
            .helpSign{
                margin-top:0;
            }
        }
        .socialMedia{
            margin-top:3rem;
        }
    }
`;