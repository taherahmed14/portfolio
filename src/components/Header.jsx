import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

export const Header = ({ aboutRef, skillsRef, projectRef, blogRef, contactRef }) => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

    return (
        <Center height={60} pos='sticky' top='0'>
            {isLargerThan600 ?
                <SimpleGrid columns={5} spacing={10}>
                    <Box color='#C668FF' _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            aboutRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>About</Box>
                    <Box color='#C668FF' _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            skillsRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>Skills</Box>
                    <Box color='#C668FF' _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            projectRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>Projects</Box>
                    <Box color='#C668FF' _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            blogRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>Blogs</Box>
                    <Box color='#C668FF' _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            contactRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>Contact</Box>
                </SimpleGrid> :
                <SimpleGrid columns={0} />
            }
            
        </Center>
    );
}

// 'linear-gradient(to bottom right, #6889FF, #C668FF)'

