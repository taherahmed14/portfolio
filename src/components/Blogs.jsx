import { Container, Center, SimpleGrid, Box, Image, Link, Heading, Text } from "@chakra-ui/react";
import "./DownArrow.css";
import { useMediaQuery } from '@chakra-ui/react';

export const Blogs = ({ blogRef }) => {
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

    return(
        <Container mt={150} mb={150} ref={blogRef}>
            <Center>
                <Heading color='#C668FF' borderBottom='2px solid #6889FF' width={100} alignContent='center'>Blogs</Heading>
            </Center>

            <Center mt={60}>
                {isLargerThan800 ? 
                    <SimpleGrid columns={2} spacing={30}>
                        <Link minW={300} borderBottom='1px solid gray' cursor='pointer' textDecoration='none'
                            href="https://medium.com/@taherahmed.sj.95/cloning-adidas-com-adidas-page-which-was-not-developed-by-the-adidas-team-85cb705419e5"
                            _hover={{ opacity: '0.5' }}>
                            <Box>
                                <Image borderRadius='20px 20px 0px 0px' minW={300} height={150} src="adidas-blog.png" alt="adidas-project" />
                            </Box>
                            
                            <Box color='white' minW={300}
                                mt={-2} p={0} borderRadius='0px 0px 20px 20px'>
                                <Text width='300px' fontSize='20px' textAlign='left' ml={10}>
                                    First step towards the big goal.
                                </Text>
                                
                                <Text width='250px' fontSize='12px' color='gray' textAlign='left' ml={10}>
                                    Nov, 28 2021
                                </Text>
                            </Box>
                        </Link>
        
                        <Link minW={300} borderBottom='1px solid gray' cursor='pointer' textDecoration='none'
                            href="https://medium.com/@taherahmed.sj.95/cloning-of-groww-webpage-in-5-days-c9794fd4ef63"
                             _hover={{ opacity: '0.5' }}>
                            <Box>
                                <Image borderRadius='20px 20px 0px 0px' minW={350} height={150} src="groww-blog.png" alt="adidas-project" />
                            </Box>
                            
                            <Box color='white' minW={300}
                                mt={-2} p={0} borderRadius='0px 0px 20px 20px'>
                                <Text width='350px' fontSize='20px' textAlign='left' ml={10}>
                                    Another month, another experience - Full Stack Project.
                                </Text>
                                
                                <Text width='250px' fontSize='12px' color='gray' textAlign='left' ml={10}>
                                    Dec, 18 2021
                                </Text>
                            </Box>
                        </Link>
                    </SimpleGrid> 
                    :
                    <SimpleGrid columns={1} spacing={30}>
                        <Link minW={300} borderBottom='1px solid gray' cursor='pointer' textDecoration='none'
                            href="https://medium.com/@taherahmed.sj.95/cloning-adidas-com-adidas-page-which-was-not-developed-by-the-adidas-team-85cb705419e5">
                            <Box>
                                <Image borderRadius='20px 20px 0px 0px' minW={300} height={150} src="adidas-blog.png" alt="adidas-project" />
                            </Box>
                            
                            <Box color='white' minW={300}
                                mt={-2} p={0} borderRadius='0px 0px 20px 20px'>
                                <Text width='300px' fontSize='20px' textAlign='left' ml={10}>
                                    First step towards the big goal.
                                </Text>
                                
                                <Text width='250px' fontSize='12px' color='gray' textAlign='left' ml={10}>
                                    Nov, 28 2021
                                </Text>
                            </Box>
                        </Link>
    
                        <Link minW={300} borderBottom='1px solid gray' cursor='pointer' textDecoration='none'
                            href="https://medium.com/@taherahmed.sj.95/cloning-of-groww-webpage-in-5-days-c9794fd4ef63">
                            <Box>
                                <Image borderRadius='20px 20px 0px 0px' minW={350} height={150} src="groww-blog.png" alt="adidas-project" />
                            </Box>
                            
                            <Box color='white' minW={300}
                                mt={-2} p={0} borderRadius='0px 0px 20px 20px'>
                                <Text width='300px' fontSize='20px' textAlign='left' ml={10}>
                                    Another month another project-Full Stack Project.
                                </Text>
                                
                                <Text width='250px' fontSize='12px' color='gray' textAlign='left' ml={10}>
                                    Dec, 18 2021
                                </Text>
                            </Box>
                        </Link>
                    </SimpleGrid>
                }
        
            </Center>

        </Container>
    );
};

//Adidas Project
//Nov, 28 2021
//