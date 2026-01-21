export default {
name:"car",
type:"document",
title:"Car",
 fields: [
    {   
            name: "title",  
            type: "string", 
            title: "Title", 
            validation: rule => rule.required(),
        },  
 ]
}