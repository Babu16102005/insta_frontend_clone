import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Storyview() {

  const { id, total } = useParams()      //useparams is custom url

  const [story, setstory] = useState([]);

  const Navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then(data => data.json())
      .then(data => setstory(data))
      .catch(err => console.log(err))
  }, [id])
  if (id > total || id <= 0) {
    Navigate("/")   //home page
  }
  return (
    <div >
      {story && story.image ?
        <div className='d-flex justify-content-center align-items-center'>
          <Link to={`/story/${Number(id) - 1}/${total}`}><i className="bi bi-arrow-left-circle "></i></Link>
          <img className="vh-100" src={story.image} alt="story" />
          <Link to={`/story/${Number(id) + 1}/${total}`}><i className="bi bi-arrow-right-circle"></i></Link>
        </div>
        :
        <h4>no story</h4>
      }
    </div>
  )
}

export default Storyview