import styled from "styled-components";
import Image from "next/image";
import SubimitButton from "./itens/SubmitButton";
import { useEffect, useState } from "react";

const Container = styled.div`

    padding: 90px 0px 70px 0px;
    background: linear-gradient(90deg , #02071E, #02071E);
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;

    .box{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .caixaDeTexto{
        margin-right: 20px;
        max-width: 540px;
    }

    .img{
        margin-left: 10px;
        display: flex;
        justify-content: center;
        max-width: 540px;
        max-height: 533px;
    }

    h3{
        font-weight: 600;
        font-size: 50px;
        line-height: 50px;
        font-style: normal;
    }

    span{
        font-weight: 400;
        font-size: 32px;
        font-style: normal;
    }

    p{
        font-weight: 400;
        font-size: 19px;
        line-height: 32px;
        font-style: normal;
        color: #9e9b9b;
    }

    .alinhar{
        margin-top: 35px;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    @media screen and (max-width: 695px) {

        .caixaDeTexto{
            margin-right: 20px;
            max-width: 400px;
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
        .caixaDeTexto{
            margin-right: 20px;
        }
        
    }

    @media screen and (max-width: 420px) {

        .img{
            max-width: 340px;
            max-height: 333px;
        }

        .caixaDeTexto{
            margin-right: 20px;
            max-width: 350px;
        }

        h3{
            font-size: 35px;
        }
    }

    [data-image]{
        opacity: 0;
        transform: translate3d(850px, 0, 0);
    }

    [data-text]{
        opacity: 0;
        transform: translate3d(-850px, 0, 0);
    }

    [data-image = "start"], [data-text = "start"]{
    opacity: 1;
    transition: 1.5s;
    animation-timing-function: ease;
    transform: translate3d(0, 0, 0);
   }

`;

export default function Layer4() {

    const [animat, setAnimat] = useState('')

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)){
                setAnimat("start");
            }
        });
        intersectionObserver.observe(document.querySelector('#layer4'))
        return () => intersectionObserver.disconnect();
    }, []);

    return (
        <Container>
            <div>
                <div className="box" id='layer4'>
                    <div className="caixaDeTexto" data-text = {animat}>
                        <h3>Etiquetas integradas com o SellFlux</h3>
                        <span>O SellFlux</span>
                        <p>Uma das funcionalidades mais essências do WhatsApp Business na hora do atendimento, é a etiqueta. Pensando nisso, o SellFlux se torna uma ferramenta totalmente integrada, apenas com aplicação e remoção da etiquetas do seu contato, você consegue movimentar ou retirar seu lead do funil.</p>
                        <div className="alinhar">
                            <SubimitButton text="Começar agora!" />
                        </div>
                    </div>
                    <div className="img" data-image = {animat}>
                        <Image src={'/img/etiqueta.webp'} alt="SellFlux picture" width={540} height={533}/>
                    </div>
                </div>
            </div>
        </Container>
    );
}