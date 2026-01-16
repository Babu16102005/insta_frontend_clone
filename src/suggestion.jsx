import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
function Sugg() {
    const [suggestions, setSuggestions] = useState([]);
    const [profile, setProfile] = useState(null);


    useEffect(() => {
        fetch("http://localhost:3000/suggestion")
            .then((data) => data.json())
            .then((data) => {
                setSuggestions(data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/profile")
            .then((data) => data.json())
            .then((data) => {
                setProfile(data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);
    const handleFollow = (id) => {
        setSuggestions(suggestions =>
            suggestions.map(suggestion =>
                suggestion.id === id ? { ...suggestion, followed: !suggestion.followed } : suggestion
            )
        );
    };
    const handleFollowlist = async (id, username, profilePic) => {
        axios.post("http://localhost:3000/Followers", { "id": id, "username": username, "profilePic": profilePic })
    }
    return (
        <>
            <div className='sugg'>
                <div className='user'>
                    <div className=' gap-2 py-4'>
                        {
                            profile ?
                                <div className='pro d-flex align-items-center gap-2 p-2'>
                                    < img className="photo dp rounded-circle " src={profile.profilePic} alt="Profile" />
                                    <h6 className='gap-10 '>{profile.username}</h6>
                                    <p className='switch '>switch</p>

                                </div >
                                : <h6>Loading Profile...</h6>
                        }

                    </div>
                </div >

                {suggestions.length > 0 ? (
                    <div className='suggestion-list'>
                        <b className='p-2 my-2'>Suggested to you</b>
                        {suggestions.map((suggestion) => (

                            <div key={suggestion.id} className='d-flex align-items-center gap-2 p-2'>
                                <img className="sugname dp rounded-circle" src={suggestion.profilePic} alt="Profile" />
                                <h6>{suggestion.username}</h6>
                                <div className='follows d-flex align-items-center gap-2'>
                                    <div className='' onClick={() => { handleFollowlist(suggestion.id, suggestion.username, suggestion.profilePic) }}>
                                        <button className="follow " onClick={() => handleFollow(suggestion.id)}>{suggestion.followed ? "Following" : "Follow"}</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <h1>No Suggestions Available</h1>
                    </div>
                )}


            </div>
        </>
    )
}

export default Sugg;