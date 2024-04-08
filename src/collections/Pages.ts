import { CollectionConfig } from 'payload/types';
import { Hero } from '../blocks/Hero';
import { TwoColumn } from '../blocks/TwoColumn';

export const Pages: CollectionConfig = {
    slug: 'pages', // The slug of the collection (used in routes and queries)
    labels: {
        // Admin labels in the UI
        singular: 'Page',
        plural: 'Pages',
    },
    access: {
        read: () => true,
    },
    // Admin fields in the UI (UI table cols)
    fields: [
        {
            name: 'name',
            label: 'Name', // Label in the admin UI
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            label: 'Slug', // Label in the admin UI
            type: 'text',
            required: true,
        },
        {
            // block field, allows blocks to be added to the page
            name: 'layout',
            label: 'Layout', // Label in the admin UI
            type: 'blocks',
            blocks: [
                Hero,
                TwoColumn,
            ]
        },
    ],
}