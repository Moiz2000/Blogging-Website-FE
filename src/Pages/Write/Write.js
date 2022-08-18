import "./Write.css";
import Topbar from '../../Components/Topbar/Topbar';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Write() {
  const navigate = useNavigate()
  const [tags, setTags] = useState([]);
  const [Title, setTitle] = useState('');
  const [Text, setText] = useState('');
  const [ImageName, setImageName] = useState(null);
  const [cat, setCat] = useState('')
  const user = localStorage.getItem('user');
  useEffect(() => {
    const FetchTag = async () => {
      const result = await axios.get("http://https://blogbuzz-team4.herokuapp.com/tag")
      //console.log(result.data);
      setTags(result.data);
    }
    FetchTag();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("I am in handle submit")
    const newData = {
      Title,
      Text,

    }
    if (ImageName) {
      const data = new FormData();
      const filename = ImageName.name;
      console.log(filename);
      data.append("name", filename);
      data.append("file", ImageName);
      newData.ImageName = filename;
      console.log(newData);

    }
    const token = localStorage.getItem('token');
    try {
      await axios.post("http://https://blogbuzz-team4.herokuapp.com/user/blog", newData, {
        headers: ({
          Authorization: 'Bearer ' + token
        })
      });
      console.log('Yes i am here')
      navigate('/homepage')
    }
    catch (err) {

    }


  }
  return (

    <div>
      <Topbar />
      <div>

      </div>
      <div class="listpgWraper">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div class="formpanel" >
                <h5>Add Information</h5>
                <div class="row">
                  <div class="col-md-12">
                    <div class="formrow">
                      <input type="text" name="title" id="title" class="form-control" placeholder="Add Title"
                        onChange={e => setTitle(e.target.value)} />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="formrow">
                      <select class="form-control" name="tag">
                        <option>Select Catgory</option>
                        {
                          tags.map((t) => (
                            <option>{t.name}</option>
                          ))
                        }
                      </select>
                    </div>
                  </div>
                  {/* <div class="col-md-12">
                    <div class="formrow">
                      <div class="uploadphotobx"> <i class="fa fa-upload" aria-hidden="true"></i>
                        <h4>Add photo</h4>
                        <label class="uploadBox">Click here to Upload
                          <input type="file" name="upload" onChange={(e) => setImageName(e.target.files[0])} />
                        </label>
                      </div>
                    </div>
                  </div> */}
                  <div class="col-md-12">
                    <div class="formrow">
                      <textarea class="form-control" name="text" placeholder="What's in your mind...."
                        onChange={e => setText(e.target.value)}></textarea>
                    </div>
                  </div>
                </div>
                <br />
                <button type="submit" class="btn" value="Post" onClick={handleSubmit}>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}