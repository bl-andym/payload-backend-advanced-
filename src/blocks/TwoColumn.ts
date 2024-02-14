import { CollectionConfig } from 'payload/types';

type Option = {
    label: string;
    value: string;
};

interface TwoColumnBlock {
    slug: string;
    labels: {
        singular: string;
        plural: string;
    };
    fields: {
        name: string;
        label: string;
        type: string;
        relationTo?: string;
        options?: Option[];
    }[];
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