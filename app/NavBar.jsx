'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  FormControl,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { UserButton, useUser } from "@clerk/nextjs";


const Links = ['Home']

const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: "gray.200",
      }}
      href={'/'}>
      {children}
    </Box>
  )
}

export default function NavBar() {
    const { isLoaded, isSignedIn, user } = useUser();

  return (
    <>
      <Box bg={'gray.100'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            
          </HStack>
          {isLoaded && isSignedIn && <UserButton afterSignOutUrl="/"/>}

        </Flex>

      </Box>
    </>
  )
}