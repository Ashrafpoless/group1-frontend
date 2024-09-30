import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import moment from 'moment';
import Swal from 'sweetalert2';
import SERVER_URL from '../../server';

import './CreatePost.css';

const CreatePost = () => {
    const state = useLocation().state;
    const [content, setContent] = useState(state?.content || '');
    const [title, setTitle] = useState(state?.title || '');
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || '');
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    const uid = currentUser.id;

    const upload = async () => {
        if (!file) return '';
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await axios.post(SERVER_URL + 'api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return res.data.url; // Cloudinary URL from the backend
        } catch (err) {
            console.log(err);
        }
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const imgUrl = await upload();
        try {
            if (!title || !content || !cat || !imgUrl) {
                return Swal.fire({
                    title: 'Please Fill All The fields',
                    text: `SomeThing Missing`,
                    icon: 'warning'
                });
            }
            state
                ? await axios.put(SERVER_URL + `api/posts/${state.id}`, {
                      title,
                      content,
                      cat,
                      img: imgUrl
                  })
                : await axios.post(SERVER_URL + `api/posts/`, {
                      title,
                      content,
                      img: imgUrl,
                      cat,
                      uid,
                      date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
                  });
            navigate(`/myposts/${uid}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container add">
            <div className="create_content">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className="editorContainer">
                    <ReactQuill
                        className="editor"
                        theme="snow"
                        value={content || ''}
                        onChange={setContent}
                    />
                </div>
            </div>
            <div className="category_menu">
                <div className="category_item_list">
                    <h1>Categories</h1>
                    <div className="cat_list">
                        <input
                            type="radio"
                            checked={cat === 'art'}
                            name="cat"
                            value={'art'}
                            id="art"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="art">Art</label>
                    </div>
                    <div className="cat_list">
                        <input
                            type="radio"
                            checked={cat === 'science'}
                            name="cat"
                            value={'science'}
                            id="science"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="science">Science</label>
                    </div>
                    <div className="cat_list">
                        <input
                            type="radio"
                            checked={cat === 'technology'}
                            name="cat"
                            value={'technology'}
                            id="technology"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="technology">Technology</label>
                    </div>
                    <div className="cat_list">
                        <input
                            type="radio"
                            checked={cat === 'cinema'}
                            name="cat"
                            value={'cinema'}
                            id="cinema"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="cinema">Cinema</label>
                    </div>
                    <div className="cat_list">
                        <input
                            type="radio"
                            checked={cat === 'design'}
                            name="cat"
                            value={'design'}
                            id="design"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="design">Design</label>
                    </div>
                    <div className="cat_list">
                        <input
                            type="radio"
                            checked={cat === 'food'}
                            name="cat"
                            value={'food'}
                            id="food"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="food">Food</label>
                    </div>
                    <div className="cat_list">
                        <input
                            type="radio"
                            checked={cat === 'general'}
                            name="cat"
                            value={'general'}
                            id="general"
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="general">general</label>
                    </div>
                </div>
                <div className="category_item">
                    <input
                        style={{ display: 'none' }}
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label className="file" htmlFor="file">
                        Upload Image
                    </label>
                    <div className="create_buttons">
                        <Link to={'/posts'} className='cancel-create'>Cancel</Link>
                        <button onClick={handleClick}>Publish</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CreatePost.propTypes = {};

export default CreatePost;
