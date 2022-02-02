import styled from "styled-components";
import Image from "next/image";
import SubimitButton from "./itens/SubmitButton";
import { FaCheck } from 'react-icons/fa'
import PurpleButton from "./itens/PurpleButton";

const Container = styled.section`

    background: linear-gradient(180deg , #02071E, #000107);
    padding: 90px 0px 50px 0px;
    font-family: 'Roboto', sans-serif;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    h2{
        font-size: 48px;
        font-weight: 400;
        line-height: 48px;
        width: 67%;
        margin: 0 auto;

    }

    h1{
        font-size: 47px;
        font-weight: 600;
        line-height: 47px;
        width: 67%;
        margin: 0 auto;
        margin-bottom: 40px;
        width: 50%;

    }

    .caixaDeImagens{

        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 90%;
        margin: 0 auto;
        margin-top: 100px;
        margin-bottom: 222px;
    }

    .caixaDeConteudo{
        display: flex;
        justify-content: center;
        font-family: "Roboto", Sans-serif;
        text-align: center;
        flex-wrap: wrap;
        margin-top: 55px;
    }

    [data-tituloP]{
        font-size: 16px;
        font-weight: 600;
        line-height: 17px;
        margin: 0 auto;
        letter-spacing: 4px;
        font-style: normal;
        padding-bottom: 30px;
        padding-top: 130px;
    }

    [data-tituloG]{
        font-size: 44px;
        font-weight: 700;
        line-height: 55px;
        margin: 0 auto;
        letter-spacing: 5px;
        font-style: normal;
        padding-bottom: 15px;
    }

    .card1{
        margin-bottom: 40px;
        margin: 3px;
        border-radius: 10px;
        background-color: white;
        text-align: center;
        width: 373px;
        height: 610px;
        overflow: hidden;
    }

    .card2{
        margin-bottom: 40px;
        margin: 3px;
        border-radius: 10px;
        background-color: white;
        text-align: center;
        width: 373px;
        height: 660px;
        overflow: hidden;
    }

    .card1 h3, .card2 h3{
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-style: normal;
        font-size: 22px;
        line-height: 25px;
    }

    .styleTitulo{
        width: 100%;
        height: 110px;
        background-color: black;
        justify-content: center;
        align-items: center;
        display: flex;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-top: -30px;
    }
    .valorDoProduto{
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        display: flex;
        justify-content: center;
        padding: 30px 30px 4px 30px;
        color: black;

    }

    .typeMoeda{
        font-size: 23px;
        line-height: 23px;
    }

    .valor{
        font-size: 77px;
        line-height: 61px;
    }

    .mes{
       color: #54595f;
       font-family: 'Poppins', sans-serif;
       font-size: 13px;
       font-weight: 500;
    }

    .info{
        margin-top: 10px;
        padding: 10px 10px 0px 20px;
        color: #54595f;
    }

    .info p{
        text-align: start;
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        line-height: 24px;
        font-weight: 400;
        
    }

    svg{
        font-size: 18px;
        margin-right: 12px;
    }

    hr {
        border: 0;
        border-bottom: 1px solid #7a7a7a;
        width: 280px
    }

    .styleHR{
        border: 0;
        border-bottom: 1px solid #7a7a7a;
        width: 30px
    }

    [data-fita = "fita1"]{
        opacity: 0;
    }

    [data-fita = "fita2"]{
        position: relative;
        left: -146px;
        bottom: -19px;
        background-color: #6500E6;
        padding: 2px 5px 2px 5px;
        transform: rotate(-45deg);
        margin: 0;
    }

    .fitaText{
        font-size: 14px;
        line-height: 26px;
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }

    .dowCard{
        margin-top: 25px;
    }

`;

export function Card({typeCard, typeFita, titulo, textCapacidade, valorDaMensalidade}) {
    return (
        <div className={typeCard}>
            <div data-fita={typeFita}>
                <p className="fitaText">POPULAR</p>
            </div>
            <div className="styleTitulo">
                <h3>{titulo}</h3>
            </div>
            <div className="valorDoProduto">
                <span className="typeMoeda">R$</span>
                <span className="valor">{valorDaMensalidade}</span>
            </div>
            <span className="mes">/ MÊS</span>
            <div className="info">
                <p><FaCheck /> +R$0,20 por Ligação</p> <hr />
                <p><FaCheck /> +R$0,16 por SMS</p> <hr />
                <p><FaCheck /> Usuários: ilimitados</p> <hr />
                <p><FaCheck /> Campanhas: ilimitadas</p> <hr />
                <p><FaCheck /> {textCapacidade}</p>
            </div>
            <PurpleButton text={"ASSINAR"} />
        </div>
    )
}

export default function Layer6() {
    return (
        <Container>
            <section>
                <h2>O SellFlux é integrado com as principais plataformas de vendas</h2>
                <div className="caixaDeImagens">
                    <div>
                        <Image src={'/img/hotmart.png'} alt="SellFlux" width={131} height={43} />
                    </div>
                    <div>
                        <Image src={'/img/eduzz.png'} alt="SellFlux" width={111} height={36} />
                    </div>
                    <div>
                        <Image src={'/img/braip.png'} alt="SellFlux" width={104} height={34} />
                    </div>
                    <div>
                        <Image src={'/img/monetizze.png'} alt="SellFlux" width={139} height={20} />
                    </div>
                    <div>
                        <Image src={'/img/ticto.png'} alt="SellFlux" width={139} height={26} />
                    </div>
                </div>
                <h1>Transforme seu negócio em uma máquina de vendas</h1>
                <SubimitButton text="Começar agora!" />

                <h2 data-tituloP>SEM PREÇOS ESCONDIDOS</h2>
                <h2 data-tituloG>VOCÊ NO CONTROLE</h2>
                <hr className="styleHR"/>

                <div className="caixaDeConteudo">
                    <div className="dowCard">
                    <Card typeCard={"card1"} typeFita={"fita1"} titulo={"STARTER"} valorDaMensalidade={"297"} textCapacidade={"Capacidade: 25 mil leads"}/>
                    </div>

                    <Card typeCard={"card2"} typeFita={"fita2"} titulo={"PREMIUM"} valorDaMensalidade={"597"} textCapacidade={"Capacidade: 75 mil leads"}/>

                    <div className="dowCard">
                        <Card typeCard={"card1"} typeFita={"fita1"} titulo={"PROFESSIONAL"} valorDaMensalidade={"997"} textCapacidade={"Capacidade: 150 mil leads"}/>
                    </div>
                </div>
            </section>
        </Container>

    )
}