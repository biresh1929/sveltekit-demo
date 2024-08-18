//this only works on the server

import {sql} from "@vercel/postgres"

export async function load({params,locals}) {
    return {
        names: await sql`SELECT * from NAMES where user_id='${locals.user}'`
    }
}

//so this will show content based on the name of the blog 
//this is possible only with slug
//we have made the page dynamic
