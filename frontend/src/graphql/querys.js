import { gql } from '@apollo/client';

export const GET_ALL_CLIENTS = gql`
  query allClient {
    allClient {
      nombre
      cedula
      edad
      email
      id_pais {
        nombre
      }
      password
    }
  }
`;
