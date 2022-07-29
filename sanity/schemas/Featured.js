export default {
    name: 'featured',
    title:'Featured New Categories',
    type: 'document',
    fields:[
        {
            name: 'title',
            title:'Featured Category name',
            type:'string',
            validation: (Rule) => Rule.required(),
        },
         {
            name: 'short_description',
            title:'Short description',
            type:'string',
            validation: (Rule) => Rule.max(200),
        },
        {
            name: 'resturants',
            title:'Resturants',
            type:'array',
            of: [{type:"reference",to: [{type:'resturant'}] }],
        },
    
    ]
}