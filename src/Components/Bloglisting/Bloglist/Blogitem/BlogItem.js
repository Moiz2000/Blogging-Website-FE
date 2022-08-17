import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../Common/Chip';
import '../../styles.css';
import img from '../../../../graphic-design-trends.png';
import aut from '../../../../author.jpg';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
const BlogItem = ({

  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  const navigate= useNavigate()
 
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={img} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={aut} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/showblog/${id}`}>
          ➝
        </Link>      
  </footer>
    </div>
  );
};

export default BlogItem;
