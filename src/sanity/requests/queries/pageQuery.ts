import { groq } from 'next-sanity';

export const pageQuery = groq`
*[_type == "page"][0]
{
    pageBuilder[]{
        _type == "hero" => {
            _type,
            heading,
            subtitle,
            tagline,
            excerpt,
            promotionBtnLabel
                
        },
        
        _type == "about" => {
            _type,
            heading,
            tagline,
            text
        },
        
        _type == "services" => {
            _type,
            heading,
            offerList
        },
        
        _type == "career" => {
            _type,
            heading,
            subtitle,
            tagline,
            promotionFormText,
            features
        },
        
        _type == "gallery" => {
            _type,
            heading,
            sliderButtons
        },
        
        _type == "contacts" => {
            _type,
            heading,
            contactInfo
        },
        
        _type == "form" => {
            _type,
            submitBtnLabel,
            fields
        }
    }
}
`;
