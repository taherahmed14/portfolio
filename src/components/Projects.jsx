import { Center, Container, Heading, Box, SimpleGrid, Image, Link } from "@chakra-ui/react";
import "./DownArrow.css";
import { useMediaQuery } from '@chakra-ui/react';

export const Projects = ({ projectRef }) => {
    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');

    return(
        <Container mt={150} mb={150} ref={projectRef}>
            <Center>
                <Heading color='#C668FF' borderBottom='2px solid #6889FF' width={100} alignContent='center'>Projects</Heading>
            </Center>

            {isLargerThan1200 ? 
            <Center mt={60}>
                <SimpleGrid columns={3} spacing={30}>
                    <Container minW={300}>
                        <Box>
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="adidas-project.png" alt="adidas-project" />
                        </Box>
                        <Box mt={-5} display='flex' p={30} borderRadius='0px 0px 20px 20px' className="projectButton">
                                <Link href="https://github.com/taherahmed14/adidas-Front-end-project" textDecoration='none' minW={100} ml={15} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://taherahmed14.github.io/adidas-Front-end-project/Project%20Files/adidas_home_page.html" textDecoration='none' minW={100} ml={40} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Demo
                                </Link>
                        </Box>
                    </Container>

                    <Container minW={300}>
                        <Box>
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="groww-project.png" alt="adidas-project" />
                        </Box>
                        <Box mt={-5} display='flex' p={30} borderRadius='0px 0px 20px 20px' className="projectButton">
                                <Link href="https://github.com/taherahmed14/Groww_Full-Stack_Project" textDecoration='none' minW={100} ml={15} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://github.com/taherahmed14/Groww_Full-Stack_Project" textDecoration='none' minW={100} ml={40} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Demo
                                </Link>
                        </Box>
                    </Container>

                    <Container minW={300}>
                        <Box>
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="adidas-project.png" alt="adidas-project" />
                        </Box>
                        <Box mt={-5} display='flex' p={30} borderRadius='0px 0px 20px 20px' className="projectButton">
                                <Link href="https://github.com/taherahmed14/adidas_project" textDecoration='none' minW={100} ml={15} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://taherahmed14.github.io/adidas_project/Project%20Files/adidas_home_page.html" textDecoration='none' minW={100} ml={40} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Demo
                                </Link>
                        </Box>
                    </Container>
            
                </SimpleGrid>
                </Center>:
                <Center mt={60}>
                <SimpleGrid columns={1} spacing={30}>
                    <Container minW={300}>
                        <Box>
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="adidas-project.png" alt="adidas-project" />
                        </Box>
                        <Box mt={-5} display='flex' p={30} borderRadius='0px 0px 20px 20px' className="projectButton">
                                <Link href="https://github.com/taherahmed14/adidas_project" textDecoration='none' minW={100} ml={15} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://taherahmed14.github.io/adidas_project/Project%20Files/adidas_home_page.html" textDecoration='none' minW={100} ml={40} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Demo
                                </Link>
                        </Box>
                    </Container>

                    <Container minW={300}>
                        <Box>
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="groww-project.png" alt="adidas-project" />
                        </Box>
                        <Box mt={-5} display='flex' p={30} borderRadius='0px 0px 20px 20px' className="projectButton">
                                <Link href="https://github.com/taherahmed14/Groww_Full-Stack_Project" textDecoration='none' minW={100} ml={15} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://github.com/taherahmed14/Groww_Full-Stack_Project" textDecoration='none' minW={100} ml={40} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Demo
                                </Link>
                        </Box>
                    </Container>

                <Container minW={300}>
                    <Box>
                        <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="adidas-project.png" alt="adidas-project" />
                    </Box>
                    <Box mt={-5} display='flex' p={30} borderRadius='0px 0px 20px 20px' className="projectButton">
                            <Link href="https://github.com/taherahmed14/adidas_project" textDecoration='none' minW={100} ml={15} color='#C668FF' p={8} 
                                border='2px solid #C668FF'
                                _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                >Code
                            </Link>
                            <Link href="https://taherahmed14.github.io/adidas_project/Project%20Files/adidas_home_page.html" textDecoration='none' minW={100} ml={40} color='#C668FF' p={8} 
                                border='2px solid #C668FF'
                                _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                >Demo
                            </Link>
                    </Box>
                </Container>
        
            </SimpleGrid>
            </Center>}
                
        </Container>
    )
};