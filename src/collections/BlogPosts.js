
export const BlogPosts = {
    slug: 'blogPosts',
    labels: {
        singular: 'Blog Post',
        plural: 'Blog Posts',
    },
    access: {
        // by default payload only allows users to see collections if logged in
        // override: set access roles read to true for all users 
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true,
        },
        {
            name: 'body',
            label: 'Body',
            type: 'richText',
        },
    ]
}