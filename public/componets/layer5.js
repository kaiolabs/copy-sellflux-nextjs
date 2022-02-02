import styled from "styled-components";
import { BsCheckCircle } from 'react-icons/bs';

const Container = styled.section`

    font-family: 'Roboto', sans-serif;
    background-color: #000000;
    padding: 70px 0px 70px 0px;
    display: flex;
    justify-content: center;
    color: white;
    text-align: center;
    flex-wrap: wrap;

    h2{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 61px;
        line-height: 71px;
        font-style: normal;
        margin: 0;
    }

    p{
        font-weight: 400;
        font-style: normal;
        color: #b1b1b1;
        font-size: 17px;
        line-height: 29px;
        padding-bottom: 30px;
    }

    span{
        padding-top: 40px;
        font-weight: 300;
        font-size: 24px;
        line-height: 34px;
        color: #b1b1b1;
        font-style: normal;
        width: 170px;
    }

    .caixaDeConteudo{
        display: flex;
        justify-content: center;
        font-family: "Roboto", Sans-serif;
        text-align: center;
        flex-wrap: wrap;
    }

    .card{
        padding: 45px;
        border-radius: 15px;
        border: 1px solid white;
        justify-content: center;
        display: flex;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        flex-direction: column;
        max-height: 200;

        width: 200px;
        margin: 10px;
    }

    .card p{
        width: 189px;
    }

    .checkCard{
        border: 2px solid #00A2FF;
        border-radius: 10px;
        width: 60px;
        height: 60px;
        justify-content: center;
        display: flex;
        align-items: center;
    }
    
    svg{
        color: #00A2FF;
        font-size: 140%;
    }


    @media screen and (max-width: 835px) {
        h2{
            font-size: 55px;
        }
        p{
            font-size: 14px;
        }
    }

    @media screen and (max-width: 420px) {

        h2{
            font-size: 35px;
        }
        p{
            font-size: 8px;
            line-height: 20px;
        }
    }

`;

export function Card({titulo, texto}) {
    return (
        <div className="card">
            <div className="checkCard">
                <BsCheckCircle />
            </div>
            <span>{titulo}</span>
            <div>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default function Layer5() {
    return (
        <Container>
            <section>
                <div>
                    <div>
                        <h2>Prático e fácil de usar</h2>
                        <p>O SellFlux foi cuidadosamente pensado para tornar o seu dia mais fácil. Com alguns passos você já <br /> consegue automatizar um fluxo completo e fazer seus primeiros envios.</p>
                    </div>
                    <div className="caixaDeConteudo">
                        <Card titulo="Planejamento & Estratégia" texto = "Após assinar o SellFlux escolha qual estratégia irá utilizar para cada tipo de produto, status, formas de pagamento."/>
                        <Card titulo="Integração" texto = "Faça a integração entre o SellFlux e sua plataforma de vendas com apenas um clique."/>
                        <Card titulo="Campanhas Inteligentes" texto = "Crie campanhas personalizadas de SMS, Ligação e WhatsApp com as estratégias definidas anteriormente."/>
                        <Card titulo="Ativar Automação" texto = "Ative as campanhas que você criou, automatize a recuperação das suas vendas e trabalhe melhor seus leads."/>
                    </div>
                </div>
            </section>
        </Container>
    )
}
