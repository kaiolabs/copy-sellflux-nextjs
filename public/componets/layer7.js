import styled from "styled-components";
import Image from "next/image";
import { BiRightArrowCircle } from 'react-icons/bi'

const Container = styled.section`
    background: linear-gradient(180deg , #02071E, #000107, #02071E);
    padding: 50px 0px 10px 9px;
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
    font-family: 'Roboto', sans-serif;

    h2{
        font-weight: 600;
        font-size: 17px;
        line-height: 17px;
        margin-top: 150px;
        margin-bottom: 35px;
    }

    h4{
        margin-top: 150px;
        font-weight: 600;
        font-size: 45px;
    }

    h5{
        margin-top: -50px;
        margin-bottom: 60px;
        font-weight: 300;
        font-size: 15px;
        color: #bfbaba;
    }

    h6{
        font-weight: 500;
        font-size: 15px;
        line-height: 15px;
    }

    .box{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 auto;
        align-items: center;
        width: 60%;
    }

    .caixaDeTexto{
        margin-left: 120px;
        max-width: 60%;
        text-align: start;
    }

    .caixaDeTexto p{
        color: #aaa2a2;
    }

    .box h6{
        margin-bottom: -130px;
        font-weight: 400;
        font-size: 11px;
        color: #298795;
    }

    .box h2{
        font-weight: 600;
        font-size: 48px;
        line-height: 48px;
    }

    .box p{
        font-weight: 400;
        font-size: 15px;
        line-height: 26px;
        color: #aaa2a2;
    }

    .blocoDeTextos{
        margin-top: 50px;
        margin-bottom: 150px;
        text-align: start;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        margin: 0 auto;
        width: 80%;
    }

    .blocoDeTextos h3{
        font-size: 18px;
        margin-top: 50px;
        margin: 0 auto;
    }

    .blocoDeTextos p{
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 26px;
        color: #aaa2a2;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .rodape{
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 10.5px;
        line-height: 19px;
        color: #ababab;
        width: 75%;
        white-space: normal;
        margin: 0 auto;
    }

    svg{
        margin-bottom: -6px;
        font-size: 25px;
    }

    @media screen and (max-width: 695px) {

        
    }

    @media screen and (max-width: 1200px) {
        
    }

    @media screen and (max-width: 420px) {

    }


`;

export default function Layer7() {
    return (
        <Container>
            <section>
                <div>
                    <div className="box">
                        <div>
                            <Image src={'/img/check.webp'} alt="SellFlux picture" width={218} height={218} priority />
                        </div>
                        <div className="caixaDeTexto">
                            <h6>GARANTIA INCONDICIONAL</h6>
                            <h2>7 dias de garantia</h2>
                            <p>N??s temos o compromisso com o seu resultado e por isso oferecemos a voc?? garantia total de satisfa????o ou seu investimento de volta. At?? 7 dias ap??s o pagamento, voc?? pode solicitar o cancelamento por qualquer motivo e devolvemos todo valor, sem qualquer complica????o.</p>
                        </div>
                    </div>
                    <h4>FAQ</h4>
                    <h5>Tire suas d??vidas sobre SellFlux!</h5>
                    <div className="blocoDeTextos">
                        <h3><BiRightArrowCircle/> COMO A SELLFLUX VAI SOLUCIONAR OS PROBLEMAS DA MINHA EMPRESA?</h3>
                        <p>A SellFlux te ajuda a otimizar suas convers??es de vendas por meio de a????es personalizadas via Liga????o, WhatsApp ou SMS. Com esta ferramenta voc?? pode automatizar as suas vendas em um s?? lugar, personalizando cada a????o, e por consequ??ncia trazendo um grande retorno para a sua empresa. </p>

                        <h3><BiRightArrowCircle/> COMO POSSO ALTERAR DADOS CADASTRADOS?</h3>
                        <p>Para alterar os dados cadastrais, entre em contato com o suporte da SellFlux atrav??s do ??cone do WhatsApp que est?? localizado no lado direito da tela, no canto inferior.</p>

                        <h3><BiRightArrowCircle/> ?? F??CIL CONFIGURAR A SELLFLUX?</h3>
                        <p>Sim! Em poucos passos voc?? vai conseguir realizar a instala????o e ativa????o do produto. Nosso sistema foi cuidadosamente planejado de uma forma did??tica para que voc?? consiga fazer todas as configura????es necess??rias.</p>

                        <h3><BiRightArrowCircle/> OS MEUS DADOS E DOS MEUS LEADS EST??O PROTEGIDOS?</h3>
                        <p>Sim, n??s nos preocupamos e muito com a seguran??a da informa????o, seguimos <br/> todos os protocolos para tornar seguro a sua utiliza????o e seus dados.</p>
                    </div>
                    <h2>?? Copyright 2021 SellFlux Todos os direitos reservados</h2>
                    <h6>Termos de uso</h6>
                    <h6>Pol??ticas de Privacidade</h6>
                    <div className="rodape">
                        <p>ESTE SITE N??O ?? do FACEBOOK: Este site n??o faz parte do site do Facebook ou do Facebook Inc. Al??m disso, este site N??O ?? endossado pelo Facebook de nenhuma maneira. FACEBOOK ?? uma marca comercial independente da FACEBOOK, Inc.</p>
                        <p>N??s temos o objetivo de ajudar pessoas a obterem resultados financeiros utilizando o poder da internet. N??o reivindicamos ou declaramos que ao usar o m??todo, voc?? ganhar?? dinheiro ou recuperar?? seu dinheiro. Os depoimentos mostrados s??o neg??cios e v??o variar com base no seu esfor??o, no conhecimento que voc?? adquirir e nas for??as do mercado que est??o al??m do controle de qualquer pessoa.</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}