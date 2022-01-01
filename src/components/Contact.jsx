import { Box, Center, Container, Heading, SimpleGrid, Link } from "@chakra-ui/react";
import { BsChevronDoubleUp } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import "./ContactButton.css";

export const Contact = ({ aboutRef, contactRef }) => {

    return(
        <Container pt={50} mt={250} mb={200} borderTop='1px solid gray' ref={contactRef}>

            <Center>
                <Heading color='#C668FF' borderBottom='2px solid #6889FF' width={100} alignContent='center'>Contact</Heading>
            </Center>

            <Center mt={10}>
                <SimpleGrid columns={3} spacing={10}>
                    <Link href="https://www.linkedin.com/in/taher-ahmed-bb96b6123/"
                        textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)' 
                        color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="LinkedIn" data-front="LinkedIn">
                            </Link>
                    <Link href="https://github.com/taherahmed14"
                        textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)' 
                        color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="Github" data-front="Github"></Link>
                    <Link href='https://drive.google.com/file/d/1QPlk6vTtf78JH60myCmrP9lRyImnwXRx/view?usp=sharing'
                        textDecoration='none' background='linear-gradient(to bottom right, #6889FF, #C668FF)'
                        color='black' p={8} border='2px solid #6889FF' class="btn-flip" data-back="Resume" data-front="Resume"></Link>
                </SimpleGrid> :
            </Center>

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

        </Container>
    )
};