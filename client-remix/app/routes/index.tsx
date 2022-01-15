import { Button, VStack, Tr, Td, Input } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { useLoaderData, Form, redirect } from 'remix';
import { ActionFunction } from '@remix-run/server-runtime';

import { FormEjecutivo } from '~/components/FormEjecutivo';
import { SimpleTable } from '~/components/Table';

type Ejecutivo = {
  id: Number,
  nombre: string,
  departamento: string,
  disponibilidad: string
}

async function postData(url = '', data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export const loader = async () => {
  return fetch('http://localhost:8080/ejecutivos')
  .then(response => response.json())
  .catch(() => [])
  .then(data => data);
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const nombre = formData.get('nombre') as string;
  const departamento = formData.get('departamento') as string;
  const disponibilidad = formData.get('disponibilidad') as string;
  const id = formData.get('id') as string;

  console.log(nombre);
  console.log(departamento);
  console.log(disponibilidad);
  console.log(id);

  if(id == null)
    await postData('http://localhost:8080/ejecutivos', {
      nombre,
      departamento,
      disponibilidad: disponibilidad == '1' ? true : false
    }).then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

  else await fetch('http://localhost:8080/ejecutivos/' + id, { method: "DELETE" })
  .then(response => response.json())
  .catch(() => console.log('Error al borrar el id'))
  .then(data => data);

  return redirect('/');
}

export default function Index() {
  const data: Array<Ejecutivo> = useLoaderData();

  return (
    <>
      <VStack marginTop={5}>
        <Form  method="post">
          <FormEjecutivo />
        </Form>

        <SimpleTable>
          {data.map(ejecutivo => (
              <Tr key={ejecutivo.id+""}>
                <Td>{ejecutivo.id}</Td>
                <Td>{ejecutivo.nombre}</Td>
                <Td>{ejecutivo.departamento}</Td>
                <Td>{ejecutivo.disponibilidad}</Td>
                <Td>
                  <Form method='post'>
                    <Input name="id" type='text' defaultValue={`${ejecutivo.id}`} display='none' />
                    <Button colorScheme='red' variant='solid' type='submit'>
                      <DeleteIcon />
                    </Button>
                  </Form>
                </Td>
              </Tr>
            ))}
        </SimpleTable>
      </VStack>
    </>
  );
}
