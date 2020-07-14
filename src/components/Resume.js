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
          <h3>{info.basic.role}</h3>
  <a href="tel:6303930796">{info.basic.phone}</a><br></br>
        <a href="mailto:suprajagurlinka5725@gmail.com">{info.basic.email}</a>
</div>
              </div>
                </div>
                <div className="col-lg-8 m-2">
                <div className="card">
              <div className="card-body">
                  <b><h2 className="h2">career objective :</h2></b>
      <p className="p">{info.basic.career}</p><br></br>
        <b><h2 className="h2">educationalqualification :</h2></b>
        <table id="customers" >
          <tr>
          <th>Degree</th>
            <th>institiute</th>
            
            <th>year-of-pass</th>
            <th>percentile</th>
          </tr>
          <tr>
          <td>{info.basic.degree}</td>
            <td>
              {info.basic.institute}
            </td>
       
        <td>{info.basic.passoutyear}</td>
        <td>{info.basic.percentile}</td>
          </tr>
          <tr>
          <td>{info.basic.degree1}</td>
            <td>
              {info.basic.institute1}
            </td>
        
        <td>{info.basic.passoutyear1}</td>
        <td>{info.basic.percentile1}</td>
          </tr>
          <tr>
          <td>{info.basic.degree2}</td>
            <td>
              {info.basic.institute2}
            </td>
        
        <td>{info.basic.passoutyear2}</td>
        <td>{info.basic.percentile2}</td>
          </tr>
          </table><br></br>
          <h2 className="h2">Certifications and Projects</h2><br></br>
          <ul>
            <li className="h4">
            {info.basic.certificate}
            </li>
            <li className="h4">
            {info.basic.certificate1}
            </li>
            <li className="h4">
            {info.basic.certificate2}
            </li>
            <li className="h4">
            {info.basic.certificate3}
            </li>
            <li className="h4">
            {info.basic.certificate4}
            </li>
            <li className="h4">
            {info.basic.certificate5}
            </li>
            <li className="h4">
            {info.basic.certificate6}
            </li>
            <li className="h4">
            {info.basic.certificate7}
            </li>
            
          </ul>
              </div>
            </div>
            </div>
            </div>
        )
}
