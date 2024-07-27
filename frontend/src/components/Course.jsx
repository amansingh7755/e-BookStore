import Cards from "./Cards";
import list from "../../public/list.json"
import { Link } from "react-router-dom";
const Course = () => {
  return <>
  <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
            We are delighted to have you <span className="text-pink-500">here!:</span> 
        </h1>
        <p className="mt-12">Welcome to our e-BookStore, 
            your one-stop destination for a diverse 
            collection of digital books. Whether you are 
            a voracious reader looking for the latest 
            bestsellers, a student searching for academic 
            texts, or simply someone who enjoys discovering 
            new authors and genres, our e-BookStore has something 
            for everyone.
        </p>
        <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-900 duration-300 mt-6" > 
              Back
            </button>
        </Link>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))  
        }
    </div>
  </div>
  </>
}

export default Course;