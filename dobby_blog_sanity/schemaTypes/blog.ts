export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        title: 'Title of the blog',
        type:'string'
      },
      {
        name: 'subTitle',
        title: 'Sub Title of the blog',
        type:'string'
      },
      {
        name: "slug",
        type:"slug",
        title: "Slug of the blog",
        options:{
            source: "title",
            maxLength: 96,
        }
      },{
        name:"titleImage",
        type:"image",
        title:"Title Image"
      },{
        name:"body",
        type:"text",
        title:"Body"
      },{
        name:"content",
        type:"array",
        title:"Content",
        of:[{type:"block"}]
      }
      ,{
        name:"authorImage",
        type:"image",
        title:"Author Image"
      },
      {
        name: 'authorName',
        title: 'author of the blog',
        type:'string'
      },
    ]
}