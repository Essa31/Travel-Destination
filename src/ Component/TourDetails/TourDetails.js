
import {useParams} from "react-router-dom"


import "./TourDetails.css"
let data =require("../../data/data.json")

function TourDetails() {
 
     let {id}= useParams();
     let result=data.filter(data => data.id === id )
     console.log(useParams().id)
     
    return (
      <>
       
     
      <p>TourDetails</p>
     <div  key ={result[0].id}>
        <img src={result[0].image} alt={result[0].name}/>
        <ul >
            <li>Name :{result[0].name} </li>
          
            <li>Price :{result[0].price} </li>
            <li className="information">information about the city :{result[0].info}</li>
            

        </ul>
    </div> 

      </>
    );
  }
  
  export default TourDetails;