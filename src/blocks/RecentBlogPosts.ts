export const RecentBlogPosts = {
    slug: 'recentBlogPosts',
    labels: {
        singular: 'Recent Blog Posts',
        plural: 'Recent Blog Posts',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
        }
    ]
}