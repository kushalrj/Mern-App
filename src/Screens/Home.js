import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Crousel from '../Components/Crousel'

export default function Home() {

  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();   //ye response ko json file me convert kia/

    setFoodItem(response[0])
    setFoodCat(response[1])



  }
  useEffect(() => {
    loadData()
  }, [])

  // [] here we give dependenciess here it is empty means on first reload the func inside useEffect will run
  return (

    <div>

      <div> <Navbar /> </div>
      <Crousel />
      <div className='container'>
        {
          foodCat.length > 0
            ? foodCat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'> {data.CategoryName}
                  </div>
                  <hr />
                  {
                    // here on first iteration "Rice" cat will there then it filter out foodItem with rice categgory"
                    foodItem.length > 0 ? foodItem.filter((item) => item.CategoryName === data.CategoryName)
                      .map(filterItems => {
                        return(
                          <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                            <Card {...filterItems}/>
                          </div>
                        )
                      })
                      : <div>"No data found"</div>
                  }
                </div>
              )

            })
            : ""

        }


      </div>
      <div> <Footer /> </div>
    </div>
  )
}
