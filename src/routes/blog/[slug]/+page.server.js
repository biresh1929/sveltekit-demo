//this only works on the server
export function load({params}){
    return {
        content : `Hello   ${params.slug}`
    }
}

//so this will show content based on the name of the blog 
//this is possible only with slug
//we have made the page dynamic
