import Image from 'next/image'
import mockup from '../img/mockup.png'
import logo from '../img/Logo.png'
import SubimitButton from './itens/SubmitButton';
import styled from 'styled-components'

const Container = styled.div`

    background-image: url(https://sellflux.org/wp-content/uploads/2021/12/Bg2.png);
    background-size: cover;
    height: 1150px;
    text-align: center;
    color: #ffffff;
    align-items: center;
    font-family: "Roboto", Sans-serif;

    h2{
        margin: 0;
        padding: 0.8em 15% 1em 15%;
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

                <Image src={mockup} alt="SellFlux picture" width={1000} height={570} />
            </div>
        </Container>
    )
}