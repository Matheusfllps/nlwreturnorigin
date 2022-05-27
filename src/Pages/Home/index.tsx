import {Container} from './styles'
import {Button} from './styles'
import {Title} from './styles'
import {Title3} from './styles'
import {Title4} from './styles'
import{Paragraph} from './styles'
import{ParagraphStat} from './styles'
import {ContainerHeader} from './styles'
import whatsapp from '../../assets/whatsapp.svg'
import Foto from '../../assets/Foto.png'
import { Stats } from './styles'
import { Stat } from './styles'
export function Home() {
 

  return (
    <>
    <Container>
      <ContainerHeader >
      <Title4>BOAS-VINDAS A DOCTORCARE 👋</Title4>
      <Title>Assistência médica simplificada para todos</Title>
      <Paragraph>Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</Paragraph>
       <Button> <img src={whatsapp} alt="ícone do whatsapp " />  Agende sua consulta</Button>

       <img className='FotoMulher' src={Foto} alt="Mulher negra vestindo moletom verde e sorrindo" />



       <Stats>

       <Stat>
         <Title3>+3.500</Title3>
         < ParagraphStat>Pacientes atendidos</ ParagraphStat>
       </Stat>

       <Stat>
         <Title3>+15</Title3>
         < ParagraphStat>Especialistas disponíveis</ ParagraphStat>
       </Stat>
       
       <Stat>
         <Title3>+10</Title3>
         < ParagraphStat>Anos no mercado</ ParagraphStat>
       </Stat>

       </Stats>
       </ContainerHeader>
    </Container>
    
    </>
  )
}


