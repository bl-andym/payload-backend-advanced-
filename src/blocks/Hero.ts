import { CollectionConfig } from 'payload/types';

interface HeroBlock {
    slug: string;
    labels: {
        singular: string;
        plural: string;
    };
    fields: {
        name: string;
        label: string;
        type: string;
        // Additional properties as needed
    }[];
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