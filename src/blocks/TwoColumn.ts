import { CollectionConfig } from 'payload/types';

interface TwoColumnBlock {
    slug: string;
    labels: {
        singular: string;
        plural: string;
    };
    fields: Field[];
}

interface Field {
    name: string;
    label: string;
    type: 'text' | 'textarea' | 'upload' | 'select';
    relationTo?: string; // Optional, for 'upload' type
    options?: { label: string; value: string }[]; // Optional, for 'select' type
}

export const TwoColumn: TwoColumnBlock = {
    slug: 'twoColumn',
    labels: {
        singular: 'Two Column Block',
        plural: 'Two Column Blocks'
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
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'direction',
            label: 'Direction',
            type: 'select',
            options: [
                {
                    label: 'Default',
                    value: 'default'
                },
                {
                    label: 'Reverse',
                    value: 'reverse'
                },
            ],
        }
    ],
}