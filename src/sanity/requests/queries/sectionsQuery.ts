import { groq } from 'next-sanity';

export const sectionsQuery = groq`
   *[_type == "page"][0]
    {
        pageBuilder[element == "section"]{
           "name":_type
        }
    }
`;
