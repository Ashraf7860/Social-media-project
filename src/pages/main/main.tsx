import { getDocs,  collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState,useEffect } from "react";
import { Post } from "./post";

export interface Post {
    id: string;
    userid:string;
    title:string;
    username:string;
    description:string;
}


export const Main=()=>{
    const postRef=collection(db,"posts");
    const [postsList,setPostsLists]=useState<Post[] | null>(null);
    
    const getPosts= async()=>{
     const data = await getDocs(postRef);
     setPostsLists(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
     );
};  

    useEffect(()=>{
        getPosts();
    },[]);
    
    return (
        <div>
             {postsList?.map((post) => (
                <Post post={post} />  
        ))};
        </div>
    );
}