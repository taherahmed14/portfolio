import { Box, Center, Container, Heading, SimpleGrid, Link, Text } from "@chakra-ui/react";
import { BsChevronDoubleUp } from 'react-icons/bs';
import { useMediaQuery } from '@chakra-ui/react';
import "./ContactButton.css";

export const Contact = ({ aboutRef, contactRef }) => {
    const [isLargerThan700] = useMediaQuery('(min-width: 700px)');

    return(
        <Container pt={50} mt={250} borderTop='1px solid gray' ref={contactRef}>

            <Center>
                <Heading color='#C668FF' borderBottom='2px solid #6889FF' width={100} alignContent='center'>Contact</Heading>
            </Center>
            
            <Center mt={10}>
                {isLargerThan700 ? 
                    <SimpleGrid columns={4} spacing={10}> 
                        <Link href="Taher-Ahmed-Resume.pdf" download="Taher-Ahmed-Resume.pdf"
                            textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)'
                            color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="Resume" data-front="Resume">  
                            </Link>
                        <Link href="https://www.linkedin.com/in/taher-ahmed-bb96b6123/"
                            textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)' 
                            color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="LinkedIn" data-front="LinkedIn">
                                </Link>
                        <Link href="https://github.com/taherahmed14"
                            textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)' 
                            color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="Github" data-front="Github"></Link>
                        <Link href='https://medium.com/@taherahmed.sj.95'
                            textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)'
                            color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="Medium" data-front="Medium"></Link>
                    </SimpleGrid>
                    :
                    <SimpleGrid columns={2} spacing={10}>
                        <Link href="Taher-Ahmed-Resume.pdf" download="Taher-Ahmed-Resume.pdf"
                            textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)'
                            color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="Resume" data-front="Resume">  
                            </Link>
                        <Link href="https://www.linkedin.com/in/taher-ahmed-bb96b6123/"
                            textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)' 
                            color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="LinkedIn" data-front="LinkedIn">
                                </Link>
                        <Link href="https://github.com/taherahmed14"
                            textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)' 
                            color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="Github" data-front="Github"></Link>
                        <Link href='https://medium.com/@taherahmed.sj.95'
                            textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)'
                            color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="Medium" data-front="Medium"></Link>
                    </SimpleGrid>
                }

            </Center>
            
            {isLargerThan700 ? 
            <Box ml='49%' mt={-180} pos="absolute">
                <BsChevronDoubleUp 
                    color='#C668FF'    
                    size={40} 
                    cursor='pointer' 
                    className='bounce'
                    onClick={() => {
                        aboutRef.current.scrollIntoView(
                            {
                                behavior: "smooth",
                            }
                        )
                    }}
                />
            </Box>
            :
            <Box ml='46%' mt={-230} pos="absolute">
                <BsChevronDoubleUp 
                    color='#C668FF'    
                    size={40} 
                    cursor='pointer' 
                    className='bounce'
                    onClick={() => {
                        aboutRef.current.scrollIntoView(
                            {
                                behavior: "smooth",
                            }
                        )
                    }}
                />
            </Box>
            }
            
            <Text color='white' fontSize={12} mt={150}>Created by <strong color='#C668FF'>Taher Ahmed</strong></Text>

        </Container>
    )
};