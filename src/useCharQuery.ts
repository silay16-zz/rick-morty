import {gql} from '@apollo/client';

export const CHARACTERS_QUERY = gql`
query getCharacters(
    $page: Int,
    $name: String,   
  ) {
    characters(
      page: $page,
      filter: {
        name: $name,  
      }) 
    {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        location{
          name
        }
      }
    }
  }
`;