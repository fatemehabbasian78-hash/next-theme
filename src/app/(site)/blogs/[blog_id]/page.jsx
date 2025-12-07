'use client'

import { useParams } from "next/navigation"


export default function BlogDetail(){
    const {blog_id} = useParams()
    //console.log(params.blog_id);
    return <>
        <h1>
            blog details ({blog_id})
        </h1>
        <h3>
            lsadfjlk lsajfals 
        </h3>
    </>
}