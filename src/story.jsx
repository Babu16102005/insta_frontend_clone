import { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';


function Story() {
    const [stories, setStories] = useState([]);
    var total = 0;
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/story")
            .then((data) => data.json())
            .then((data) => {
                setStories(data);
            })
            .catch((err) => console.log(err));
    }, []);
    
    return (
        <div className=' story d-flex '>
            <div className='d-none'>{total = stories.length}</div>
            {stories.length > 0 ?(
                    stories.map((story) => (
                        <div key={story.id} className='story-item' onClick={() => { navigate(`/story/${story.id}/${total}`) }}>
                            <div className='story'>
                                <img className="story-image dp rounded-circle " src={story.profilePic} alt="Story" />
                            </div>
                            <p className='text-truncate' style={{ width: "50px", fontSize: "15px" }}>{story.username}</p>

                        </div>
                    )
                    )
                ):(<p>Loading</p>)
            }
                
        
        </div>
    )
}

export default Story