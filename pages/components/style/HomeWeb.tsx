import { Box, Text, Grid, GridItem, Center, Button, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import Logo from '../../assets/Proffy.png'
import Heart from '../../assets/heart.png'
import Vector from '../../assets/Vector.png'
import Ilustra from '../../assets/Ilustra.png'
import Estudar from '../../assets/Estudar.png'

export function HomeWeb() {
  return (
    <Box bg='#8257E5' w='full' h='100vh' alignItems='center' justifyContent='center'>
      <HStack m={10} overflow='hidden' alignItems='center' justifyContent='space-between'  >
        <Box alignItems='center' justifyContent='flex-start' w='10cm' overflow='hidden'>
          <Image src={Logo} alt='logo' />
          <Text>
            Sua plataforma de estudos online{'\n'}
            <Text>Com os professores de grandes empresas</Text>
          </Text>
        </Box>

        <Box ml={10} w='16cm' overflow='hidden'>
          <Image src={Ilustra} alt='logo'/>
        </Box>
      </HStack>


      <HStack m={10} h='40%' overflow='hidden' alignItems='center' justifyContent='space-between'  >
        <Box alignItems='center' justifyContent='flex-start'>
          <Button
            leftIcon={<Image src={Estudar} alt='estudar' />}
            w='20rem' h='5rem' bg='#9871F5' m={10} alignItems='center' justifyContent='center'>
            <Text color='white' textAlign='center'>Estudar</Text>
          </Button>
          <Button
            leftIcon={<Image src={Vector} alt='estudar' />}
            w='20rem' h='5rem' bg='#04D361' m={10}>
            <Text color='white' textAlign='center'>Dar Aula</Text>
          </Button>
        </Box>
        <Text color='#fff' fontSize='3mm' alignItems='center' opacity={0.7}>Total de 500 conexõs <Image w='3mm' src={Heart} alt='coreação' />
        </Text>

      </HStack>
      <Text>&copy; starmax</Text>
    </Box>
  )
}