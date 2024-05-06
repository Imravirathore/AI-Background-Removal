import React, { useState } from 'react'

import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    Box,
    useToast
} from '@chakra-ui/react'
import PhoneNumberInput from './PhoneNumberInput'

const Login: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const toast = useToast()
    // submitPhoneNumber
    function submitPhoneNumber() {
        if (phoneNumber.length < 12) {
            toast({
                title: 'Phone Number is Invalid',
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top',
              })
        }
        else{
            toast({
                title: 'OTP Sent.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: 'top',

              })
        }

    }
    // Callback function to handle phone number data
    function handlePhoneNumberData(data: string) {
        setPhoneNumber(data); // Update the phoneNumber state with the received data
    }
    return (
        <>
    

            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bgGradient='linear(to-l, #000000, #923CB5)'
                className='test'
            >

                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    bg={useColorModeValue('white', 'gray.700')}

                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={7}
                    my={12}>
                    <Heading as='h2' lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} className='heading-login'>
                        Let's Start with your Number
                    </Heading>
                    <Text
                        fontSize={{ base: 'sm', sm: 'md' }}
                        color={useColorModeValue('gray.800', 'gray.400')}>
                        You&apos;ll get an OTP on your device        </Text>
                    <FormControl id="email">
                        <PhoneNumberInput getData={handlePhoneNumberData} />
                    </FormControl>
                    <Stack spacing={6}>
                        <Button
                                            bgGradient='linear(to-l, #000000, #923CB5)'

                            color={'white'}
                            _hover={{
                                bg: '#923CB5',
                            }}
                            onClick={submitPhoneNumber}
                        >

                            Send Code via SMS
                        </Button>
                    </Stack>
                </Stack>
            </Flex>

        </>
    )
}

export default Login