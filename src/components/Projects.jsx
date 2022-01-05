import { Center, Container, Heading, Box, SimpleGrid, Image, Link, Text, AspectRatio  } from "@chakra-ui/react";
import "./DownArrow.css";
import { useMediaQuery } from '@chakra-ui/react';
import demo from "./demo.mp4";
import "./Video.css";
import { useState } from "react";
import { DemoVideoOne, DemoVideoTwo, DemoVideoThree } from "./DemoVideo";

export const Projects = ({ projectRef }) => {
    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
    const [showVideoOne, setShowVideoOne] = useState(false);
    const [showVideoTwo, setShowVideoTwo] = useState(false);
    const [showVideoThree, setShowVideoThree] = useState(false);

    const closeDemoVideoOne = () => {
        setShowVideoOne(false);
    }

    const closeDemoVideoTwo = () => {
        setShowVideoTwo(false);
    }

    const closeDemoVideoThree = () => {
        setShowVideoThree(false);
    }

    return(
        <> 
            {isLargerThan1200 ? 
            <Container mt={150} mb={150} ref={projectRef}>
            <Center>
                <Heading color='#C668FF' borderBottom='2px solid #6889FF' width={100} alignContent='center'>Projects</Heading>
            </Center>
            <Center mt={60} isDisabled>
                <SimpleGrid columns={3} spacing={30}>
                    <Container minW={300} borderRadius='20px' _hover={{ boxShadow: '0 0 8px #6889FF' }}>
                        <Box borderRadius='20px'>
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="groww-project.png" alt="groww-project" />
                        </Box>
                        <Box mt={-5} display='flex' p={10} className="projectButton">
                                <Link href="https://github.com/taherahmed14/Groww_Full-Stack_Project" textDecoration='none' w={70} ml={33} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' position='static'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://groww-project.herokuapp.com/home" textDecoration='none' w={70} ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Website
                                </Link>    
                                <Link textDecoration='none' w={70} ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    onClick={() => setShowVideoOne(true)}>
                                    Demo
                                </Link>
                        </Box>
                        {showVideoOne ? <DemoVideoOne closeDemoVideoOne={closeDemoVideoOne} /> : null}
                        <Box border='1px solid #1E1B32' borderRadius='0px 0px 20px 20px' className="techStackBox" display='flex' justifyContent='center'>
                            <Text className="techStack" ml={0}>HTML</Text>
                            <Text className="techStack">CSS</Text>
                            <Text className="techStack">JS</Text>
                            <Text className="techStack">Node</Text>
                            <Text className="techStack" minW={50}>MongoDb</Text>
                        </Box>
                    </Container>

                    <Container minW={300} borderRadius='20px' _hover={{ boxShadow: '0 0 8px #6889FF' }}>
                        <Box borderRadius='20px'>
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="groww-project.png" alt="adidas-project" />
                        </Box>
                        <Box mt={-5} display='flex' p={10} className="projectButton">
                                <Link href="https://github.com/taherahmed14/Groww_Full-Stack_Project" textDecoration='none' w={70} ml={33} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://groww-project.herokuapp.com/home" textDecoration='none' w={70} ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Website
                                </Link>
                                <Link textDecoration='none' w={70} ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    onClick={() => setShowVideoTwo(true)}
                                    >Demo
                                </Link>
                        </Box>
                        {showVideoTwo ? <DemoVideoTwo closeDemoVideoTwo={closeDemoVideoTwo} /> : null}
                        <Box border='1px solid #1E1B32' borderRadius='0px 0px 20px 20px' className="techStackBox" display='flex' justifyContent='center'>
                            <Text className="techStack" ml={0}>HTML</Text>
                            <Text className="techStack">CSS</Text>
                            <Text className="techStack">JS</Text>
                            <Text className="techStack">Node</Text>
                            <Text className="techStack" minW={50}>MongoDb</Text>
                        </Box>
                    </Container>

                    <Container minW={300} borderRadius='20px' _hover={{ boxShadow: '0 0 8px #6889FF' }}>
                        <Box borderRadius='20px'> 
                            <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="adidas-project.png" alt="adidas-project" />
                        </Box>
                        <Box mt={-5} display='flex' p={10} className="projectButton">
                                <Link href="https://github.com/taherahmed14/adidas-Front-end-project" textDecoration='none' w={70} ml={33} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://taherahmed14.github.io/adidas-Front-end-project/Project%20Files/adidas_home_page.html" textDecoration='none' w={70} ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Website
                                </Link>    
                                <Link textDecoration='none' w={70} ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    onClick={() => setShowVideoThree(true)}
                                    >Demo
                                </Link>
                        </Box>
                        {showVideoThree ? <DemoVideoThree closeDemoVideoThree={closeDemoVideoThree} /> : null}
                        <Box border='1px solid #1E1B32' borderRadius='0px 0px 20px 20px' className="techStackBox" display='flex' justifyContent='center'>
                        <Text className="techStack" ml={0}>HTML</Text>
                            <Text className="techStack">CSS</Text>
                            <Text className="techStack">JS</Text>
                        </Box>
                    </Container>
            
                </SimpleGrid>
                </Center>
                </Container>
                :
                <Container mt={150} mb={150} ref={projectRef}>
                <Center>
                    <Heading color='#C668FF' borderBottom='2px solid #6889FF' width={100} alignContent='center'>Projects</Heading>
                </Center>
                <Center mt={60} isDisabled>
                    <SimpleGrid columns={1} spacing={30}>
                        <Container minW={300} borderRadius='20px' _hover={{ boxShadow: '0 0 8px #6889FF' }}>
                            <Box borderRadius='20px'>
                                <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="groww-project.png" alt="groww-project" />
                            </Box>
                            <Box mt={-5} display='flex' p={10} className="projectButton">
                                    <Link href="https://github.com/taherahmed14/Groww_Full-Stack_Project" textDecoration='none' w={70} ml={80} color='#C668FF' p={8} 
                                        border='2px solid #C668FF' position='static'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Code
                                    </Link>
                                    <Link href="https://github.com/taherahmed14/Groww_Full-Stack_Project" textDecoration='none' w={70} ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Website
                                    </Link>    
                                    {/* <Link textDecoration='none' minW={50} ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        onClick={() => setShowVideoOne(true)}>
                                        Demo
                                    </Link> */}
                            </Box>
                            {/* {showVideoOne ? <DemoVideoOne closeDemoVideoOne={closeDemoVideoOne} /> : null} */}
                            <Box border='1px solid #1E1B32' borderRadius='0px 0px 20px 20px' className="techStackBox" display='flex' justifyContent='center'>
                                <Text className="techStack" ml={0}>HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                                <Text className="techStack">Node</Text>
                                <Text className="techStack" minW={50}>MongoDb</Text>
                            </Box>
                        </Container>
    
                        <Container minW={300} borderRadius='20px' _hover={{ boxShadow: '0 0 8px #6889FF' }}>
                            <Box borderRadius='20px'>
                                <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="groww-project.png" alt="adidas-project" />
                            </Box>
                            <Box mt={-5} display='flex' p={10} className="projectButton">
                                    <Link href="https://github.com/taherahmed14/Groww_Full-Stack_Project" textDecoration='none' w={70} ml={80} color='#C668FF' p={8} 
                                        border='2px solid #C668FF'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Code
                                    </Link>
                                    <Link href="https://github.com/taherahmed14/Groww_Full-Stack_Project" textDecoration='none' w={70} ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Website
                                    </Link>
                                    {/* <Link textDecoration='none' minW={50} ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        onClick={() => setShowVideoTwo(true)}
                                        >Demo
                                    </Link> */}
                            </Box>
                            {/* {showVideoTwo ? <DemoVideoTwo closeDemoVideoTwo={closeDemoVideoTwo} /> : null} */}
                            <Box border='1px solid #1E1B32' borderRadius='0px 0px 20px 20px' className="techStackBox" display='flex' justifyContent='center'>
                                <Text className="techStack" ml={0}>HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                                <Text className="techStack">Node</Text>
                                <Text className="techStack" minW={50}>MongoDb</Text>
                            </Box>
                        </Container>
    
                        <Container minW={300} borderRadius='20px' _hover={{ boxShadow: '0 0 8px #6889FF' }}>
                            <Box borderRadius='20px'> 
                                <Image borderRadius='20px 20px 0px 0px' minW={300} height={300} src="adidas-project.png" alt="adidas-project" />
                            </Box>
                            <Box mt={-5} display='flex' p={10} className="projectButton">
                                    <Link href="https://github.com/taherahmed14/adidas-Front-end-project" textDecoration='none' w={70} ml={80} color='#C668FF' p={8} 
                                        border='2px solid #C668FF'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Code
                                    </Link>
                                    <Link href="https://taherahmed14.github.io/adidas-Front-end-project/Project%20Files/adidas_home_page.html" textDecoration='none' w={70} ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Website
                                    </Link>    
                                    {/* <Link textDecoration='none' minW={50} ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        onClick={() => setShowVideoThree(true)}
                                        >Demo
                                    </Link> */}
                            </Box>
                            {showVideoThree ? <DemoVideoThree closeDemoVideoThree={closeDemoVideoThree} /> : null}
                            <Box border='1px solid #1E1B32' borderRadius='0px 0px 20px 20px' className="techStackBox" display='flex' justifyContent='center'>
                            <Text className="techStack" ml={0}>HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                            </Box>
                        </Container>
                
                    </SimpleGrid>
                    </Center>
                    </Container> 
                }
        </>
    )
};