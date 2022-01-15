import { Button, RadioGroup, Radio, Input, Stack, VStack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import React from 'react';

export const FormEjecutivo = () => {

    const [value, setValue] = React.useState('1');

    return (
        <VStack>
            <Input name="nombre" placeholder='Nombre del ejecutivo' />
            <Input name="departamento" placeholder='Departamento' />
            <RadioGroup name="disponibilidad" onChange={setValue} value={value}>
                <Stack direction='row'>
                <Radio value='1'>Disponible</Radio>
                <Radio value='2'>Ocupado</Radio>
                <Button type='submit' leftIcon={<AddIcon />} colorScheme='pink' variant='solid'>
                    Agregar ejecutivo
                </Button>
                </Stack>
            </RadioGroup>
        </VStack>
    )
}
