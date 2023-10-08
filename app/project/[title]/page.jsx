"use client" 
import combinedData from "../../../public/combined.json";
import { Heading, Text, Box, Button, Container, SimpleGrid, Link, IconButton } from '@chakra-ui/react';

import { ArrowBackIcon } from '@chakra-ui/icons'

export default function Page({ params })
{
    const combinedDataArr = combinedData.projects;
    const title = decodeURIComponent(params.title);
    console.log(title);

    const projectWeWant = combinedDataArr.filter(e =>
    {
        if (e.title == title)
        {
            return true;
        }
        return false;
    })[0];



    return (
        <Container maxW='container.md' mt={4}>

            <Button leftIcon={<ArrowBackIcon />} colorScheme='teal' variant='solid' my={8} as='a' href={document.referrer}>
                Back
            </Button>
            <Heading fontSize='3xl'>{projectWeWant.title}</Heading>
            <Text mt={4}>{projectWeWant.descrip}</Text>

            <Text mt={4} fontStyle='italic'><Text as='span' fontWeight='bold'>Sponsored by</Text>: {projectWeWant.sponsor}</Text>

            <Text mt={2}><Text as='span' fontWeight='bold'>Share</Text>: <Link color='blue.400' href={`http://${window.location.host}/project/${params.title}`}>{`http://${window.location.host}/project/${params.title}`}</Link></Text>


        </Container>
    );
}