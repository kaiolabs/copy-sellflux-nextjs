import styled from "styled-components";
import Image from "next/image";
import SubimitButton from "./itens/SubmitButton";

const Container = styled.section`

    background: linear-gradient(180deg , #02071E, #000107);
    padding: 90px 0px 90px 0px;
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

    [data-tituloP]{
        font-size: 17px;
        font-weight: 600;
        line-height: 17px;
        margin: 0 auto;
        letter-spacing: 5px;
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
        padding-bottom: 30px;
    }
`;

export function Card({titulo, texto}) {
    return (
        <div className="card">
            <div>
                
            </div>
            <span>{titulo}</span>
            <div>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default function Layer6(){
    return(
        <Container>
            <section>
                <h2>O SellFlux é integrado com as principais plataformas de vendas</h2>
                <div className="caixaDeImagens">
                    <div>
                    <Image src={'/img/hotmart.png'} alt="SellFlux picture" width={131} height={43} />
                    </div>
                    <div>
                    <Image src={'/img/eduzz.png'} alt="SellFlux picture" width={111} height={36} />
                    </div>
                    <div>
                    <Image src={'/img/braip.png'} alt="SellFlux picture" width={104} height={34} />
                    </div>
                    <div>
                    <Image src={'/img/monetizze.png'} alt="SellFlux picture" width={139} height={20} />
                    </div>
                    <div>
                    <Image src={'/img/ticto.png'} alt="SellFlux picture" width={139} height={26} />
                    </div>
                </div>
                <h1>Transforme seu negócio em uma máquina de vendas</h1>
                <SubimitButton text="Começar agora!" />

                <h2 data-tituloP>SEM PREÇOS ESCONDIDOS</h2>
                <h2 data-tituloG>VOCÊ NO CONTROLE</h2>

                <div className="caixaDeConteudo">
                    <Card/>
                </div>
            </section>
        </Container>

    )
}