import styled from "styled-components";
import Image from "next/image";
import SubimitButton from "./itens/SubmitButton";
import { useState, useEffect } from "react";

const Container = styled.div`
    padding: 40px 0px 0px 0px;
    background: linear-gradient(220deg , #00131A, #000000);
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;

    .box{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .caixaDeTexto{
        margin-left: 140px;
        max-width: 550px;
        width: auto;
    }

    .img{
        margin-left: 10px;
        display: flex;
        justify-content: center;
        max-width: 540px;
        max-height: 533px;
    }

    h4{
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        color: #645ef6;
        font-size: 24px;
        line-height: 20px;
        font-style: normal;
    }

    h2{
        font-weight: 600;
        font-size: 31px;
        line-height: 30px;
        font-style: normal;
        width: 66%;
    }

    p{
        font-weight: 200;
        font-size: 19px;
        line-height: 32px;
        font-style: normal;
        color: #d6d6d6;
    }
    

    .alinhar{
        margin-top: 30px;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    @media screen and (max-width: 695px) {

        .caixaDeTexto{
            max-width: 350px;
            margin-left: 0px;
        }
        
    }

    @media screen and (max-width: 1200px) {

        .img{
            max-width: 340px;
            max-height: 333px;
        }

        .box{
            align-items: center;
        }
        
    }

    @media screen and (max-width: 420px) {

        .img{
            max-width: 340px;
            max-height: 333px;
        }

        .caixaDeTexto{
            max-width: 350px;
            margin-left: 0px;
            
        }
    }

   [data-image]{
    opacity: 0;
    transform: translate3d(0, 650px, 0);
   }
   [data-text]{
    opacity: 0;
    transform: translate3d(780px, 0, 0);
   }


   [data-image = "start"], [data-text = "start"]{
    opacity: 1;
    transition: 1.5s;
    animation-timing-function: ease;
    transform: translate3d(0, 0, 0);
   }

`;


export default function Layer3() {

    const [animat, setAnimat] = useState('')

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)){
                setAnimat("start");
            }
        });
        intersectionObserver.observe(document.querySelector('#layer3'))
        return () => intersectionObserver.disconnect();
    }, []);

    return (
        <Container>
            <div>
                <div className="box" id='layer3'>
                    <div className="img" data-image = {animat}>
                        <Image src={'/img/processo.webp'} alt="SellFlux picture" width={540} height={533}/>
                    </div>
                    <div className="caixaDeTexto" data-text = {animat}>
                        <h4>Criador avançado</h4>
                        <h2>Automatize tudo e deixe as vendas explodirem</h2>
                        <p>Ok, você conhece o termo “sequências”, mas já imaginou ter uma sequência automática de Mensagens no WhatsApp, Ligação e SMS em um só lugar? Chega de utilizar 10 ferramentas para automatizar as vendas do seu produto. </p>
                        <p>Tenha os 3 maiores pontos de comunicação em uma só plataforma criando um fluxo de sequências avançadas, gatilhos de respostas e ações. Monte suas sequências e deixe o resto com o nosso programa!</p>
                        <div className="alinhar">
                            <SubimitButton text="Começar agora!" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}