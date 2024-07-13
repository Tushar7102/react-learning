import { useEffect, useState } from "react";
// import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "../Component/CountriesCard";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";

function Countries() { 
  const[country,setcountry]=useState([]);
  const[loading,setloading]=useState(false)
  const[page,setpage]=useState(1)
const [total,setotal]=useState(1)
  // const[country,setcountry]=useState[0]

  function run(){
    setloading(true)
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?limit=10&page=${page}`)
    .then((response) => response.json())
    .then((res) => 
    // setcountry(data)
{  
  // console.log(res.totalPages)
  setotal(res.totalPages)
  setloading(false)
     setcountry(res.data)}
  )
  .catch((error) => console.log(error))
  }
  useEffect(()=>{
    run()
  },[page])

  const onChange=(value)=>{
    setpage(value)
  }


  // return <LoadingIndicator />;

  return loading ? <LoadingIndicator /> : (
    <div>
      <h1 data-testid="countries-header" style={{textAlign:"center"}}>Countries List</h1>
      <div data-testid="countries-container" style={{display:"grid", gridTemplateColumns: "repeat(4,1fr)",}}>
        {/* Countries Card */}
        { country.map(el => (
            <CountriesCard key={el.id} country={el.country} population={el.population} Rank={el.Rank}  />
          ))}
      </div>
      <div>
        {/* Pagination */}
        <Pagination  onChange={onChange} current={page}  total={total}  />
      </div>
    </div>
  );
}

export default Countries;
