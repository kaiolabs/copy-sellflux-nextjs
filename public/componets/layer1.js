import Image from 'next/image'
import mockup from '../img/mockup.webp'
import logo from '../img/Logo.webp'
import SubimitButton from './itens/SubmitButton';
import styled from 'styled-components'

const Container = styled.div`

    background-image: url("./img/Bg2.webp");
    background-size: cover;
    height: 1150px;
    text-align: center;
    color: #ffffff;
    align-items: center;
    font-family: "Roboto", Sans-serif;

    h2{
        margin: 0;
        padding: 0.8em 18% 1em 18%;
        line-height: 51px;
        font-size: 49px;
        font-style: normal;
        font-weight: 500;
    }

    p{
        margin-top: -30px;
        line-height: 32px;
        color: #ffffff;
        font-size: 19px;
        font-style: normal;
        font-weight: 100;
    }

    @keyframes animate {
        from {opacity: 0;}
        to {opacity: 1;}  
    }

    .anime{
        animation-name: animate;
        animation-duration: 2s;
    }

    @media screen and (max-width: 695px) {

        h2{
            line-height: 25px;
            padding: 0.8em 3% 2em 3%;
            font-size: 30px;
            font-weight: 500;
        }
        
    }

    @media screen and (max-width: 1200px) {

        height: 850px;

        h2{
            line-height: 25px;
            padding: 0.8em 18% 2em 18%;
            font-size: 30px;
            font-weight: 500;
        }
        
    }

    @media screen and (max-width: 420px) {

        height: 650px;

        h2{
            line-height: 25px;
            padding: 0.8em 3% 3em 3%;
            font-size: 18px;
            font-weight: 500;
        }
        p{
            line-height: 25px;
            font-size: 14px;
        }
    }
`;

const Box = styled.div`
    padding-top: 35px;
    padding-bottom: 20px;
`;


export default function Layer1(){
    return(
        <Container>
            <div>
                
                <Box>
                    <div>
                    <Image src={logo} alt="SellFlux Logo" width={248} height={61}/>
                    </div>
                </Box>

                <h2>Aumente em mais de 3x suas conversões de vendas com uma plataforma que tem tudo!</h2>
                <p>A ferramenta mais completa de conversão de vendas <br/> e recuperação de clientes do mercado</p>
                <SubimitButton text="Começar agora!"/>

                <Image className='anime' src={mockup} alt="SellFlux picture" width={1000} height={570}/>
            </div>
        </Container>
    )
}