import React from 'react'
import data from "../data/data.json";
import Img from "../image1.svg";

export default function Resume(props) {
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(res=>res.json())
    .then(data=>console.log(data))

    let info=data.profiles[props.location.profilesData.i]
    console.log(info.basic)
        return (
            <div className="row justify-contentcenter">
                <div className="col-lg-3 m-2">
                <div className="card">
              <div className="card-body">
                <img src={Img} alt="profile" style={{width:"10em"}}></img>
          <h2>{info.basic.name}</h2>
              </div>
              </div>
                </div>
                <div className="col-lg-8 m-2">
                <div className="card">
              <div className="card-body">
                  <h2>career objective</h2>
        <p>{info.basic.career}</p>
              </div>
            </div>
            </div>
            </div>
        )
}
