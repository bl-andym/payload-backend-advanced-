import { Block } from 'payload/types';

export const SimpleRichText: Block = {
    slug: 'simpleRichText',
    labels: {
        singular: 'Simple Rich Text',
        plural: 'Simple Rich Text',
    },
    fields: [
        {
            name: 'body',
            label: 'Body',
            type: 'richText',
        }
    ]
};
