import { Box, Center, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react';
import "./DownArrow.css";

export const Skills = ({ skillsRef }) => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

    return(
        <Container mt={250} ref={skillsRef}>
            
            <Center>
                <Heading color='#C668FF' borderBottom='2px solid #6889FF' width={100} alignContent='center'>Skills</Heading>
            </Center>

            <Center>
                <Heading color='White'>Front End</Heading>
            </Center>
            
            {isLargerThan600 ? 
                <Center>
                    <SimpleGrid columns={4} spacing={10} minW={600}>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>HTML 5</Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>CSS 3</Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Javascript</Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>React</Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Redux</Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Npm</Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Tailwind</Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Chart js</Box>
                    </SimpleGrid>
                </Center> :
                <Center>
                    <SimpleGrid columns={1} spacing={10}>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>HTML 5</Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>CSS 3</Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Javascript</Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>React</Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Redux</Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Npm</Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Tailwind</Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Chart js</Box>
                    </SimpleGrid>
                </Center> }
            

            <Center mt={20}>
                <Heading color='White'>Back End</Heading>
            </Center>
            
            {isLargerThan600 ? 
            <Center>
                <SimpleGrid columns={4} spacing={10} minW={600}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Node Js</Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Express Js</Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>MongoDb</Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Postman</Box>
                </SimpleGrid>
            </Center> :
            <Center>
                <SimpleGrid columns={1} spacing={10}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Node Js</Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Express Js</Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>MongoDb</Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Postman</Box>
                </SimpleGrid>
            </Center> }

            <Center mt={20}>
                <Heading color='White'>Hosting Platform</Heading>
            </Center>

            {isLargerThan600 ? 
            <Center>
                <SimpleGrid columns={2} spacing={10} minW={100}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Heroku</Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Github Pages</Box>
                </SimpleGrid>
            </Center> :
            <Center>
                <SimpleGrid columns={1} spacing={10}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Heroku</Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>Github Pages</Box>
                </SimpleGrid>
            </Center> }

            <Center mt={20}>
                <Heading color='White'>Version Control</Heading>
            </Center>

            <Center>
                <SimpleGrid columns={1} spacing={10} minW={100}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' p={8} border='2px solid #6889FF'>GIT</Box>
                </SimpleGrid>
            </Center>
            
        </Container>
    )
};