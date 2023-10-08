"use client";

import { Heading, Text, Box, HStack, FormControl, Button, Input, VStack, Container, SimpleGrid, Link, Divider, Textarea } from '@chakra-ui/react';
import NavBar from "./NavBar.jsx"
import combinedData from "../public/combined.json";
import { SearchBox } from "./SearchBox"
export default function Home()
{
    const combinedDataArr = combinedData.projects;
    return (

        <>
        <NavBar />
        <Container maxW='container.xl'>
            <Box h={12} />


            <Heading mb={4}>Search Projects</Heading>
            <SearchBox />

            <Heading mt={16}>All Open Source Projects</Heading>


            <SimpleGrid mt={4} columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {
                    combinedDataArr.map((e, i) =>
                    {
                        return (
                            <Box key={i}>
                                <Link href={`/project/${encodeURIComponent(e.title)}`} _hover={{}}>
                                    <Box shadow="md" rounded='lg' p={4} bg='white' transition="all .2s" _hover={{
                                        transform: 'scale(1.1)'

                                    }}>
                                        <Heading fontSize='lg'>{e.title}</Heading>
                                        <Divider border="2px solid red" mt={2} />
                                        <Text noOfLines={3} mt={4}>{e.descrip}</Text>
                                        <Link as='span'>see more</Link>

                                        <Text mt={4} fontStyle='italic'><Text as='span' fontWeight='bold'>Sponsored by</Text>: {e.sponsor}</Text>
                                    </Box>
                                </Link>
                            </Box>
                        );
                    })
                }
            </SimpleGrid>




      
        </Container>
        </>
    );
}
