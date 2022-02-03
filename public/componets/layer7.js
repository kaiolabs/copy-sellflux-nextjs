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
                            <p>Nós temos o compromisso com o seu resultado e por isso oferecemos a você garantia total de satisfação ou seu investimento de volta. Até 7 dias após o pagamento, você pode solicitar o cancelamento por qualquer motivo e devolvemos todo valor, sem qualquer complicação.</p>
                        </div>
                    </div>
                    <h4>FAQ</h4>
                    <h5>Tire suas dúvidas sobre SellFlux!</h5>
                    <div className="blocoDeTextos">
                        <h3><BiRightArrowCircle/> COMO A SELLFLUX VAI SOLUCIONAR OS PROBLEMAS DA MINHA EMPRESA?</h3>
                        <p>A SellFlux te ajuda a otimizar suas conversões de vendas por meio de ações personalizadas via Ligação, WhatsApp ou SMS. Com esta ferramenta você pode automatizar as suas vendas em um só lugar, personalizando cada ação, e por consequência trazendo um grande retorno para a sua empresa. </p>

                        <h3><BiRightArrowCircle/> COMO POSSO ALTERAR DADOS CADASTRADOS?</h3>
                        <p>Para alterar os dados cadastrais, entre em contato com o suporte da SellFlux através do ícone do WhatsApp que está localizado no lado direito da tela, no canto inferior.</p>

                        <h3><BiRightArrowCircle/> É FÁCIL CONFIGURAR A SELLFLUX?</h3>
                        <p>Sim! Em poucos passos você vai conseguir realizar a instalação e ativação do produto. Nosso sistema foi cuidadosamente planejado de uma forma didática para que você consiga fazer todas as configurações necessárias.</p>

                        <h3><BiRightArrowCircle/> OS MEUS DADOS E DOS MEUS LEADS ESTÃO PROTEGIDOS?</h3>
                        <p>Sim, nós nos preocupamos e muito com a segurança da informação, seguimos <br/> todos os protocolos para tornar seguro a sua utilização e seus dados.</p>
                    </div>
                    <h2>© Copyright 2021 SellFlux Todos os direitos reservados</h2>
                    <h6>Termos de uso</h6>
                    <h6>Políticas de Privacidade</h6>
                    <div className="rodape">
                        <p>ESTE SITE NÃO É do FACEBOOK: Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial independente da FACEBOOK, Inc.</p>
                        <p>Nós temos o objetivo de ajudar pessoas a obterem resultados financeiros utilizando o poder da internet. Não reivindicamos ou declaramos que ao usar o método, você ganhará dinheiro ou recuperará seu dinheiro. Os depoimentos mostrados são negócios e vão variar com base no seu esforço, no conhecimento que você adquirir e nas forças do mercado que estão além do controle de qualquer pessoa.</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}