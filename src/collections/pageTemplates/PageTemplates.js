import { Hero } from "../../blocks/Hero";
import { SimpleRichText } from "../../blocks/SimpleRichText";
import { TwoColumn } from "../../blocks/TwoColumn";
import getCollectionSchemaHandler from "./handlers/getCollectionSchemaHandler";
import AttributesHelper from "./ui/AttributesHelper";


export const PageTemplates = {
    slug: 'pageTemplates',
    labels: {
        singular: 'Page Template',
        plural: 'Page Templates',
    },
    access: {
        read: () => true,
    },
    endpoints: [
        {
            path: '/getCollectionSchema/:collection',
            method: 'get',
            // custom handler returns the collection (BlogPosts) schema/structure 
            // attribute values returned from the collection are used in the UI
            handler: getCollectionSchemaHandler,
        }
    ],
    fields: [
        {
            name: 'attributesHelper',
            type: 'ui',
            admin: {
                components: {
                    // used in admin UI to display the attributes of the collection
                    // 
                    Field: AttributesHelper,
                }
            }
        },
        {
            name: 'name',
            label: 'Name',
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
            name: 'templateCollection',
            label: 'Collection',
            type: 'select',
            options: [
                // value equals the slug of the collection (BlogPosts.js)
                { label: 'Blog Posts', value: 'blogPosts' }
            ]
        },
        {
            name: 'layout',
            label: 'Layout',
            type: 'blocks',
            blocks: [
                Hero,
                TwoColumn,
                SimpleRichText
            ]
        }
    ]
}