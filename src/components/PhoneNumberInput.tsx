import { Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

// Define the type for your component's props
type PhoneNumberInputProps = {
    getData: (data: string) => void; // Assuming getData is a function that takes a string parameter
};

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ getData }) => {
    const [number, setNumber] = useState('')
    const handlePhoneChange = (phone: string) => {
        setNumber(phone);
        getData(phone); // Send the updated phone number to the parent component
    };
    return (
        <Box w='100%' >
            <PhoneInput
                country={'in'}
                value={number}
                onChange={handlePhoneChange} // Call handlePhoneChange instead of setNumber directly
                inputStyle={{ width: '100%' }} // Set the width of the PhoneInput to 100%

            />
        </Box>

    )
}

export default PhoneNumberInput