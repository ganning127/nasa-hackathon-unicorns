import { Heading, Text, Box, HStack, FormControl, Button, Input, VStack, Container, SimpleGrid, Link, Divider, Textarea } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const SearchBox = () => {
    const [searchContent, setSearchContent] = useState("");

    return (
        <VStack>
            <FormControl>
                <Textarea placeholder='Vector Search Description' minW='300px' onChange={
                    (e) => setSearchContent(e.target.value)
                }
                value={searchContent}
                />
            </FormControl>
            <Button bg='red.200' as='a' href={`/search/${searchContent}`} minW='200px'>Search</Button>
        </VStack>
    )
}