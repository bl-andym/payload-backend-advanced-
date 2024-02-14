import { CollectionConfig } from 'payload/types';

interface HeroBlock {
    slug: string;
    labels: {
        singular: string;
        plural: string;
    };
    fields: (TextualField | TextAreaField | UploadField)[];
}

interface TextualField {
    name: string;
    label: string;
    type: 'text';
}

interface TextAreaField {
    name: string;
    label: string;
    type: 'textarea';
}

interface UploadField {
    name: string;
    label: string;
    type: 'upload';
    relationTo: string;
}


export const Hero: HeroBlock = {
    slug: 'hero',
    labels: {
        singular: 'Hero Block',
        plural: 'Hero Blocks'
    },
    fields: [
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
        },
        {
            name: 'text',
            label: 'Text',
            type: 'textarea',
        },
        {
            name: 'backgroundImage',
            label: 'Background Image',
            type: 'upload',
            relationTo: 'media',
        },
    ],
}