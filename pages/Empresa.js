import Navbar from "./components/Navbar"
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Empresa() {

  const PageContainer = styled.div`
  margin-top: -80px;
  `;

  const PageHeader = styled.div`
  width: 100%;
  height: 60vh;
  background: #2c73c5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #26D0CE, #1A2980);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #26D0CE, #1A2980); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;
  > h4{
      font-weight: 300;
      font-size: 2em;
      color: #fff;
      text-align: center;
      justify-content: center;
      padding-top: 100px;
  }
  `;

  const PageSection = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  `;

    const PageBox1 = styled.div`
    width: 80%;
    height: 40vh;
    margin: 20px;
    display: flex;
    > h3 {
      color: gray;
      font-weight: 300;
  }
    `;

    const PageBox2 = styled.div`
    width: 80%;
    height: 40vh;
    margin: 20px;
    display: flex;
    > h3 {
      color: gray;
      font-weight: 300;
  }
    `;

  const PageFooter = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #191d31ec;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  color: rgb(187, 182, 182);
  text-align: justify;
  `;

  const FooterList1 = styled.div`
  align-items: center;
  justify-content: center;
  list-style: none;
  
  `;

  const FooterList2 = styled.div`
  align-items: center;
  justify-content: center;
  list-style: none;
  `;

  const FooterList3 = styled.div`
  align-items: center;
  justify-content: center;
  `;

  const FooterCopy = styled.div`
  width: 100%;
  height: 5vh;
  text-align: center;
  color: gray;
  background: #191d31ec;
  margin-top: -21px;
  `;

  const PageText = styled.div`
  >h2{
      text-align: center;
      color: gray;
      font-weight: 300;
  }
  `;
  
  return (
    <>
    <Navbar />
    <PageContainer>

<PageHeader>
  <h4>Somos uma Startup Angolana formada por tecnicos ambiciosos com foco em soluções tecnologicas afim de crescer no mercado Angolano e futuramente no mercado internacional, temos como objetivo tornar a tecnologia
      mais acessivel e ajudando na resolução de problemas do dia a dia.  
  </h4>
</PageHeader>

<PageText>
    <h2>Equipe</h2>
  </PageText>
<PageSection>
    <PageBox1>
    <Image src="/../public/images/clementino.png" width={200} height={200} alt="Clementino image"></Image>
        <h3><strong>Clementino Chieque</strong> <br/>
          Fundador <br/>
          Administrador de Redes <br/>
          Tecnico CCTV
        </h3>
        
    </PageBox1>
    <PageBox2>
    <Image src="/../public/images/edmauro.png" width={200} height={200} alt="Edmauro image"></Image>
    <h3><strong>Edmauro Goma</strong><br/>
          Co-Fundador <br/>
          CTO <br/>
          Desenvolvidor Web e Mobile Fullstack <br/>
          Gestor de Projetos Tecnologicos
        </h3>
    </PageBox2>
</PageSection>

<Footer />
</PageContainer>
    
    </>
  )
}
