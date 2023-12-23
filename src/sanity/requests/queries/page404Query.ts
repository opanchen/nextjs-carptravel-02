import { groq } from 'next-sanity';

export const page404Query = groq`
*[_type == "page404"][0]
{
    _type,
    heading,
    subtitle,
    tagline,
    promotionText,
    promotionBtnLabel    
}
`;
