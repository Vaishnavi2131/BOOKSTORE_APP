import React from 'react'
import Cards from "./Cards"
import list from "../../public/list.json"
import {Link} from "react-router-dom"
function Course() {
  return (
    
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">

        <h1 className="text-2xl md:text-4xl">We're Delighted to have you {" "}
            <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12">
        Books are timeless companions that transport us to different worlds, broaden our perspectives, and enrich our minds. They are windows to the past, guides for the present, and blueprints for the future. Through their pages, we explore new ideas, experience untold adventures, and gain wisdom from voices across time and space. Books are not just collections of words; they are gateways to knowledge, imagination, and the boundless possibilities of the human spirit.
        </p>
        <Link to ="/">
        <button className=" btn  bg-pink-500 mt-6 btn-secondary  hover:bg-pink-700 duration-300">Back</button>
        </Link>

      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
            list.map((item)=>(
                <Cards key = {item.id} item={item}/>
            ))
        }
      </div>
    </div>
  )
}

export default Course;
