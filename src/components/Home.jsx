import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

const { data : blogs , isLoading, error } = useFetch("http://localhost:8000/blogs");
  
  return (
    <div className="home">
      {error && <h1> {error} </h1>}
      {isLoading && <h1>Loading.....</h1>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'Mano')} title = "Mano's blogs" /> */}
    </div>
  );
};

export default Home;
