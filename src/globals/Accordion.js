export const Accordion = {
    slug: 'accordion',
    labels: {
        singular: 'Accordion Block',
        plural: 'Accordion Blocks'
    },
    fields: [
        {
            name: 'anchor',
            label: 'Anchor',
            type: 'text',
        },
        {
            name: 'items',
            label: 'Items',
            type: 'array',
            fields: [
                {
                    name: 'id',
                    label: 'ID',
                    type: 'number',
                },
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
                },
                {
                    name: 'wysiwyg',
                    label: 'WYSIWYG',
                    type: 'textarea',
                },
            ],
        },
    ],
}
