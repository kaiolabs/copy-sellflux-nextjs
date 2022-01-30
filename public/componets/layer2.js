import styled from "styled-components"
import { FaWhatsapp } from 'react-icons/fa';
import { BsChatLeftText } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { GiSmartphone } from 'react-icons/gi';

const Box = styled.main`

    display: flex;
    justify-content: center;
    background: linear-gradient(150deg , #00000D, #000717);
    padding: 105px 0em 100px 0;
    font-family: "Roboto", Sans-serif;
    text-align: center;

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

    .caixaDethales2{
        margin: 8px;
        width: 245px;
        height: 320px;
        padding: 0px 10px 0px 10px;
        background-color: #131423;
        position: relative;
    }

    .caixaDethales:hover, .caixaDethales2:hover{
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
        margin: 0 auto;
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

    svg{
        font-size: 30px;
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

`;

export default function Layer2() {
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
                <div className="container">

                    <div className="caixaDethales">
                        <div className="caixaSvg">
                        <div className="icons">
                            <FaWhatsapp />
                        </div>
                        </div>
                        <div className="caixaTexto">
                            <span>WhatsApp</span>
                            <p>Gerencie tags, grupos e envie centenas de mensagens através de gatilhos totalmente personalizados dentro do seu funil, diretamente para o seu cliente.</p>
                        </div>
                    </div>

                    <div className="caixaDethales2">
                        <div className="caixaSvg">
                        <div className="icons">
                            <BsChatLeftText />
                        </div>
                        </div>
                        <div className="caixaTexto">
                            <span>SMS</span>
                            <p>Configure respostas automáticas comuns e condicionais dentro do fluxo de automação utilizando SMS, ideal para atrair mais clientes para seu negócio.</p>
                        </div>
                    </div>

                    <div className="caixaDethales2">
                        <div className="caixaSvg">
                        <div className="icons">
                            <AiOutlineMail />
                        </div>
                        </div>
                        <div className="caixaTexto">
                            <span>E-mail</span>
                            <p>Faça disparos ilimitados de e-mails com automações beaseadas em ações do seu lead de maneira fácil e integrada com todas as funcionalidades do SellFlux.</p>
                        </div>
                    </div>

                    <div className="caixaDethales">
                        <div className="caixaSvg">
                        <div className="icons">
                            <GiSmartphone />
                        </div>
                        </div>
                        <div className="caixaTexto">
                            <span>Ligação</span>
                            <p>Contando com a melhor tecnologia VOIP do mercado, potencialize ainda mais suas conversões e recuperações de clientes através de chamadas de voz.</p>
                        </div>
                    </div>
                    
                </div>
            </main>
        </Box>
    )
} 