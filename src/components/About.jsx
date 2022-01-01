import { Box, Center, SimpleGrid, Image, Text } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import "./DownArrow.css";

export const AboutMe = ({ skillsRef, aboutRef }) => {
    const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

    return (
        <Center mt={60} ref={aboutRef}>

            {isLargerThan900 ? 
            <SimpleGrid columns={2} spacing={0}>
                <Box>
                    <Image 
                        boxSize='500px'
                        objectFit='cover'
                        borderRadius='20% 70% / 30% 50%'
                        ml={100}
                        src="Taher-Profile-Pic.jpg" alt='Taher Ahmed' />
                </Box>
                <Box color='white' mr={200} mt={150} minW={500}>
                    <Text fontFamily='helvetica'>
                        Hi I'm<strong style={{fontSize: "50px", color:"#6889FF"}}> Taher Ahmed</strong>
                    </Text>
                    
                    <Text fontSize='20px'>
                        <strong style={{color:"#6889FF"}}>Full Stack Web Developer</strong> who focuses on writting clean, elegant and efficient code.</Text>
                </Box>
            </SimpleGrid> :
            <SimpleGrid columns={1} spacing={0}>
            <Box>
                <Image 
                    boxSize='500px'
                    objectFit='cover'
                    borderRadius='80% 30% / 40% 50%'
                    src="Taher-Profile-Pic.jpg" alt='Taher Ahmed' />
            </Box>
            <Box color='white'minW={500}>
                <Text fontFamily='helvetica'>
                    Hi I'm<strong style={{fontSize: "50px"}}> Taher Ahmed</strong>
                </Text>
                
                <Text fontSize='20px'>
                    <strong>Full Stack Web Developer</strong> who focuses on writting clean, elegant and efficient code.</Text>
            </Box>
        </SimpleGrid>
            }
            <Box mt={600} pos="absolute">
                <BsChevronDoubleDown 
                    color='#C668FF'    
                    size={40} 
                    cursor='pointer' 
                    className='bounce'
                    onClick={() => {
                        skillsRef.current.scrollIntoView(
                            {
                                behavior: "smooth",
                            }
                        )
                    }}
                />
            </Box>

        </Center>
    );
};

