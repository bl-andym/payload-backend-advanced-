import { CollectionConfig } from 'payload/types';

interface TwoColumnBlock {
    slug: string;
    labels: {
        singular: string;
        plural: string;
    };
    fields: (TextualField | TextAreaField | UploadField | SelectField)[];
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

interface SelectField {
    name: string;
    label: string;
    type: 'select';
    options: {
        label: string;
        value: string;
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