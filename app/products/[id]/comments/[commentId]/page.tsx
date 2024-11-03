import { notFound } from "next/navigation";

export default function ProdutsComments({
    params
}:{
    params: {
        id : string;
        commentId : string
    }
})
{
    if(parseInt(params.id) > 50){
            notFound(); 
    }
    return (
        <h1>Comment {params.commentId} for product {params.id} </h1>
    )
}