import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


function Profile() {

    const [profile, setProfile] = useState()
    const [followers, setfollowers] = useState([])
    const [unfollow,setunfollow]=useState()

    useEffect(() => {
        axios.get("http://localhost:3000/profile")
            .then(data => { setProfile(data.data); console.log(data) })

        axios.get("http://localhost:3000/Followers")
            .then(data => { setfollowers(data.data); console.log(data) })


    }, [unfollow])                      //the "unfollow " is trigger the page to refresh

    function HandleOnChange(e) {        //this is update the new value by already existing
        setProfile(prev => ({           //the prev variable is may able any variable is able to assign
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleUpdate = () => {
        axios.put("http://localhost:3000/profile", profile)  //"CRUD opertion" profile update
            .then(console.log("updated"))
    }
    const handleunfollow=(id)=>{
        axios.delete(`http://localhost:3000/Followers/${id}`)  //"CRUD opertion" unfollow which is using "delete"
        .then(setunfollow(!unfollow))
    }

    return (
        <div>
            <div className='profile-image'>
                {profile ? (
                    <div >
                        <img className="d-flex p-5" src={profile.profilePic} />
                        <h3 className="d-flex  mx-4"><p>username</p>:{profile.username}</h3>
                        <div className='d-flex gap-3'>
                            {followers.length > 0 ?         
                                <div>
                                    <h3>{followers.length}</h3>
                                    <h5>Followers</h5>
                                </div>
                                :(
                                    <h5>0</h5>
                                )
                            }
                            <div>
                                <h3>{profile.following}</h3>
                                <h5>Following</h5>
                            </div>
                            <div>
                                <h3>{profile.posts}</h3>
                                <h5>posts</h5>
                            </div>
                        </div>
                        <div className='edit-option '>
                            <p>New Username</p>
                            <input type="text"
                                value={profile.username}
                                name="username"
                                className='d-flex'
                                onChange={HandleOnChange} /><br />
                            <p>Profile Image url</p>
                            <input type="text"
                                value={profile.profilePic}
                                name="profilePic"
                                className='d-flex'
                                onChange={HandleOnChange} /><br />
                            <button onClick={handleUpdate} className='btn btn-primary'>
                                Update
                            </button>
                        </div>

                        <h4>follower</h4>
                        {followers.length > 0 ?
                            followers.map(follower => (
                                <div className=' '>
                                    <div className='d-flex my-2 ' key={follower.id}>
                                        <img className=" dp rounded-circle ms-auto  " src={follower.profilePic} alt="Profile" />
                                        <h >{follower.username}</h>
                                        <button onClick={()=>{handleunfollow(follower.id)}} className='btn btn-primary ms-auto '>unfollow</button>
                                    </div>
                                </div>))
                            :
                            (
                                <h2>loading </h2>
                            )}

                    </div>

                ) : (
                    <div>
                        <h3>loading</h3>
                    </div>
                )}

            </div>

        </div>

    )
}

export default Profile