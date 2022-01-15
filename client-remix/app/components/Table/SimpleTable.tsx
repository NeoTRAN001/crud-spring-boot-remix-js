import { Table, Thead, Tr, Th, Tbody } from '@chakra-ui/react';

export const SimpleTable = ({ children } : any) => {
    return (
        <div>
            <Table size='sm'>
                <Thead>
                    <Tr>
                    <Th>Id</Th>
                    <Th>Nombre</Th>
                    <Th>Departamento</Th>
                    <Th>Disponibilidad</Th>
                    <Th>Eliminar</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {children}
                </Tbody>
            </Table>
        </div>
    )
}
