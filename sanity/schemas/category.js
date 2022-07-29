export default {
    name: 'category',
    title:'menu category',
    type: 'document',
    fields:[
        {
            name: 'name',
            title:'category name',
            type:'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            type:'image',
           title:'Image category',
        },
    ],
};