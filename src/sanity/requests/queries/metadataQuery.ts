import { groq } from 'next-sanity';

export const metadataQuery = groq`
    *[_type == "metadata"][0] 
    {
        title,
        description,
        keywords
    }
`;
