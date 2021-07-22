import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <Link to={`/post/${post._id}`} className="link">
      <div className="post">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((cat) => (
              <span className="postCat">{cat}</span>
            ))}
          </div>
          <span className="postTitle">{post.title}</span>
          <p className="postDescription">{post.desc}</p>
          <br />
          <div className="postLink">
            read more <i className="fas fa-arrow-circle-right"></i>
          </div>
        </div>
      </div>
    </Link>
  );
}
