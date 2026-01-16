import React, { useState, useEffect } from 'react'

function Post() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/post")
            .then((data) => data.json())
            .then((data) => {
                setPosts(data)
            })
            .catch((err) => console.log(err))
    }, []);
        const handleFollow = (id) => {
        setPosts(posts =>
            posts.map(post =>
                post.id === id ? { ...post, followed: !post.followed } : post
            )
        );
    };

    return (
        <>
            <div>
                {posts.length > 0 ? (
                    <div className='post-body'>

                        {/* {console.log(posts.length)} */}
                        {posts.map((post) => (
                            <div key={post.id} >   {/*to access the unique  */}
                                <div className='d-flex align-items-center gap-2 p-2'>
                                    <img className=" dp rounded-circle " src={post.profilePic} alt="Profile" />
                                    <h6>{post.username}</h6>
                                    <button className='follow' onClick={() => handleFollow(post.id)}>{post.followed ? "Following" : "Follow"}</button>
                                </div>
                                <div className="">
                                    <img className='post_image' src={post.image} alt="" />
                                </div>
                                <div className='res-com d-flex align-items-center gap-4 p-3'>
                                    <i className="resheart res bi bi-heart"></i>
                                    <i className="res bi bi-chat"></i>
                                    <i className="res bi bi-send"></i>
                                </div>
                                <div className='res-com px-3'>
                                    {post.likes > 0 &&  
                                        <h6>{post.likes} likes</h6>
                                    }
                                    <p>{post.caption}</p>
                                </div>
                                
                            </div>
                        ))}

                    </div>) : (
                    <div>
                        <h1>No Posts Available</h1>
                    </div>
                )
                }
            </div>


        </>
    )
}

export default Post