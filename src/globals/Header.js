export const Header = {
    slug: 'header',
    labels: {
        singular: 'Header',
        plural: 'Headers',
    },
    access: {
        read: () => true, // public access
    },
    fields: [
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: 'navLinks',
            label: 'Nav links',
            type: 'array',
            fields: [
                {
                    name: 'label',
                    label: 'Label',
                    type: 'text',
                },
                {
                    name: 'link',
                    label: 'Link',
                    type: 'text',
                },
            ]
        }
    ]
}