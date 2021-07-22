import "./categories.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Categories() {
  const filterContainer = document.querySelector(".gallery-filter"),
    galleryItems = document.querySelectorAll(".gallery-item");

  if (filterContainer) {
    filterContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("filter-item")) {
        // deactivate existing active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
          if (item.classList.contains(filterValue) || filterValue === "all") {
            item.classList.remove("hide");
            item.classList.add("show");
          } else {
            item.classList.remove("show");
            item.classList.add("hide");
          }
        });
      }
    });
  }

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    fetchCategory();
  }, []);

  return (
    <div className="row">
      <div className="gallery-filter">
        <Link to="/" className="link">
          <span className="filter-item active" data-filter="all">
            all
          </span>
        </Link>
        {categories.map((cat) => (
          <Link to={`/?cat=${cat.name}`} className="link">
            <span className="filter-item" data-filter="shoe">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
