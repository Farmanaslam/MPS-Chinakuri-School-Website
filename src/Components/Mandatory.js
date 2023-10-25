import React, { useEffect } from "react";
import { useState } from "react";
import $ from 'jquery';
const mandatoryData = [
  {
    name: "admission_form",
    title: "Admission Form",
  },
  {
    name: "registration_of_employees",
    title: "Registration of Employees",
  },

  {
    name: "pf",
    title: "Provident Fund Code Number",
  },

  {
    name: "certificate_of_registration_of_societies",
    title: "Certification of Registration of Societies",
  },

  {
    name: "class_details",
    title: "Class Details",
  },

  {
    name: "members",
    title: "Members",
  },

  {
    name: "tc",
    title: "Transfer Certificate",
  },

  {
    name: "NOC",
    title: "Issuance of Permanent No Objection Certificate Cum Certificate of Recognition",
  }
];

export default function Mandatory() {
  const [pdfSrc, setPdfSrc] = useState("admission_form");
  const [pdfTitle, setPdfTitle] = useState("Admission Form");

  function handleButtonClick(event) {
    setPdfSrc(event.target.dataset.name);
    setPdfTitle(event.target.dataset.title);
   
  }
     useEffect(()=>{
      let tabButtons=document.querySelectorAll(".list-group-item");
      tabButtons.forEach(tabButton=>{
        if(tabButton.dataset.name==pdfSrc){
          tabButton.classList.add("active")
        }else{
          tabButton.classList.remove("active")
        }
      })
     },[pdfSrc])

  return (
    <>
        <h2 className='h3 py-2 pt-4 text-center'>Mandatory Disclosure</h2>
      <div className="container my-4 d-flex">
        <div className="tabs col-md-4">
          <ul className="list-group ">
            
            {
              mandatoryData.map((data, index) => (
                <li
                key={index}
                  className="list-group-item"
                  data-name={data.name}
                  data-title={data.title}
                  onClick={handleButtonClick}
                >
                  {data.title}
              </li>
              ))
            }
          </ul>
        </div>
        <div className="col-md-8 mx-4 border">
          <div className="card h-100">
            <h3 className="card-header">
            <b>{pdfTitle}</b>
            </h3>
            <div className="card-body h-100">
            <object
              title="mandatory disclosure"
              id="myPdf"
              data={`/institution registration/${pdfSrc}.pdf`}
              className="w-100 d-none d-md-block" style={{height:'90%'}}
            >
            </object>
            <a className="download btn btn-primary mx-2 my-2" href={`/institution registration/${pdfSrc}.pdf`} download>Download</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
