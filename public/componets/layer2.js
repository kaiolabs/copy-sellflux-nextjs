import styled from "styled-components"
import { FaWhatsapp } from 'react-icons/fa';
import { BsChatLeftText } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { GiSmartphone } from 'react-icons/gi';
import { useEffect, useState } from "react";

const Box = styled.main`

    display: flex;
    justify-content: center;
    background: linear-gradient(150deg , #00000D, #000717);
    padding: 105px 0em 100px 0;
    font-family: "Roboto", Sans-serif;
    text-align: center;
    overflow: hidden;

    h2{
        margin-top: 27px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 40px;
        line-height: 41px;
        color: white;
    }

    p{
        color: #645EF6;
        font-weight: 400;
    }

    .box{
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    .paragrafo{
        padding-top: 20px;
        padding-bottom: 9px;
        font-size: 16px;
        font-weight: 400;
        line-height: 27px;
        color: #d6d6d6;
    }

    .largura{
        width: 647px;
        padding-bottom: 45px;
    }

    .container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 80px;
    }

    .caixaDethales{
        margin: 8px;
        width: 240px;
        height: 340px;
        padding: 0px 10px 0px 10px;
        background-color: #131423;
    }

    .caixaDethales:hover{
        transition: 0.9s;
        background-color: #202259;
    }

    .icons{
        width: 81px;
        height: 81px;
        background-color: #645EF6;
        border-radius: 50%;
        align-items: center;
        text-align: center;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 8%;  
    }

    .icons:hover{
        transform: scale(0.9, 0.9);
        transition: 0.5s;
    }

    .caixaSvg{
        padding-top: 8px;
        width: 100%;
        height: 100px;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    svg{
        font-size: 30px;
        color: white;
    }

    .caixaTexto{
        padding: 10px;
        color: white;
        margin: 0 auto;
    }

    .caixaTexto p{
        padding-top: 15px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #cecece;
    }

    span{
        font-family: 'Rubik', sans-serif;
        font-size: 23px;
        font-weight: 400;
        font-style: normal;
        color: white;
    }

    @media screen and (max-width: 680px) {
        .largura{
            width: 447px;
            padding-bottom: 45px;
        }   
    }

    @media screen and (max-width: 420px) {
        .largura{
            width: 342px;
            padding-bottom: 45px;
        }   
        h2{
            font-size: 30px;
            font-weight: 500;
        }
    }

    [data-anime]{
        opacity: 0;
        transform: translate3d(0, 150px, 0);
    }

    [data-anime="bottom"]{
        opacity: 1;
        transform: translate3d(0, 0, 0);
        animation-timing-function: ease-out;
        transition: 0.6s;
    }
`;


export function Card({ icon, titulo, texto }) {

    return (

        <div className="caixaDethales">
            <div className="caixaSvg">
                <div className="icons">
                    {icon}
                </div>
            </div>
            <div className="caixaTexto">
                <span>{titulo}</span>
                <p>{texto}</p>
            </div>
        </div>
    )
}


export default function Layer2() {

    const [animat, setAnimat] = useState('')

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)){
                setAnimat("bottom");
            }
        });
        intersectionObserver.observe(document.querySelector('#layer1'))
        return () => intersectionObserver.disconnect();
    }, []);


    return (
        <Box>
            <main>
                <div className="box">
                    <div>
                        <p>EXCLUSIVIDADE</p>
                        <h2>Faça suas vendas <br /> decolarem!</h2>
                        <div className="largura">
                            <p className="paragrafo">Monte a melhor estratégia e veja o poder que a automação tem para recuperar 3x mais vendas. + Conversão, + retenção, + contato com o cliente = TUDO em um lugar só!</p>
                        </div>
                    </div>
                </div>
                <div className="container" id='layer1' data-anime = {animat}>

                    <Card icon={<FaWhatsapp />} titulo={"WhatsApp"} texto={"Gerencie tags, grupos e envie centenas de mensagens através de gatilhos totalmente personalizados dentro do seu funil, diretamente para o seu cliente."} />
                    <Card icon={<BsChatLeftText />} titulo={"SMS"} texto={"Configure respostas automáticas comuns e condicionais dentro do fluxo de automação utilizando SMS, ideal para atrair mais clientes para seu negócio."} />
                    <Card icon={<AiOutlineMail />} titulo={"E-mail"} texto={"Faça disparos ilimitados de e-mails com automações beaseadas em ações do seu lead de maneira fácil e integrada com todas as funcionalidades do SellFlux."} />
                    <Card icon={<GiSmartphone />} titulo={"Ligação"} texto={"Contando com a melhor tecnologia VOIP do mercado, potencialize ainda mais suas conversões e recuperações de clientes através de chamadas de voz."} />
                </div>
            </main>
        </Box>
    )
} 