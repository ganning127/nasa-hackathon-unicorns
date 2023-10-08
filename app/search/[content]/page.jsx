"use client" 
import { Heading, Text, Box, Button, Container, HStack, Link, IconButton } from '@chakra-ui/react';
import { useState, useEffect } from "react";
import { ArrowBackIcon } from '@chakra-ui/icons'
import NavBar from "../../NavBar.jsx";

export default function Page({ params })
{
    const content = decodeURIComponent(params.content);

    const [res, setRes] = useState([]);
    useEffect(() =>
    {
        const fetchData = async () =>
        {
            let desc = content;

            const resp = await fetch('/api/get_matches', {
                method: "GET",
                headers: {
                    numMatches: 20,
                    description: desc
                }
            });

            const data = await resp.json();

            if (data.status == 200)
            {
                let everyOther = data.body.filter((element, index) => {
                    return index % 2 === 0;
                  })
                  
                setRes(everyOther);
                console.log(everyOther)
            }
        };

        fetchData();

    }, [])


    return (
        <>
        <NavBar />
        <Container maxW='container.md' mt={4}>
            <Heading>Top Search Results</Heading>
            <Text fontStyle="italic" noOfLines={5} my={4}><Text as='span' fontWeight='bold'>searching for</Text>: &quot;{content}&quot;</Text>
            {
                res.map((result, i) =>
                {
                    return (
                        <Link href={`/project/${encodeURIComponent(result.content)}`} _hover={{color: "blue.300"}} key={i} my={2}>
                            <Box shadow="md" rounded='lg' p={4} bg='white' transition="all .2s" >
                                <HStack justifyContent='space-between'>
                                    <Heading fontSize='lg'>{result.content}</Heading>
                                    <Text>{Math.ceil(result.similarity * 100)}% match</Text>
                                </HStack>
                                {/* <Text noOfLines={3} mt={4}>{e.descrip}</Text>

                                <Text mt={4} fontStyle='italic'><Text as='span' fontWeight='bold'>Sponsored by</Text>: {e.sponsor}</Text> */}
                            </Box>
                        </Link>
                    )
                })
            }

        </Container>
        </>
    );
}