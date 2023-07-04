import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import typedata from '../Assets/Typedata.json'
import axios from 'axios';
function getIdValue(id){
  return (document.getElementById(id)?.value)
}
function sendData(){
  const firstName = getIdValue('firstName');
  const lastName = getIdValue('lastName');
  const Email = getIdValue('Email');
  const Mobile = getIdValue('Mobile');
  const typeIdx = getIdValue('Type');
  const Type = typedata[typeIdx-1].type_name;
  const subtypeIdx = getIdValue('Subtype');
  const obj = typedata[typeIdx-1].subtype;
  let Subtype;
  for(let item of obj){
    if(item.subtype_id ==  subtypeIdx){
      Subtype = item.subtype_name;
      break;
    }
  }
  console.log(firstName, lastName, Email, Mobile, Type, Subtype);

  let LabNumber7 = getIdValue('7LabNumber');
  let OrderId7 = getIdValue('7OrderId');
  let Description7 = getIdValue('7Description');

  let OrderId9 = getIdValue('9OrderId');
  let Description9 = getIdValue('9Description');

  let OrderId10 = getIdValue('10OrderId');
  let Description10 = getIdValue('10Description');

  let LabNumber12 = getIdValue('12LabNumber');
  let OrderId12 = getIdValue('12OrderId');
  
  let LabNumber13 = document.getElementById('13LabNumber')?.value;
  let OrderId13 = getIdValue('13OrderId');
  let Date13 = getIdValue('13Date');
  let Time13 = getIdValue('13Time');
  let State13 = getIdValue('13State');
  let City13 = getIdValue('13City');
  let Locality13 = getIdValue('13Locality');
  let Landmark13 = getIdValue('13Landmark');
  let Description13 = getIdValue('13Description');
 
  let LabNumber14 = getIdValue('14LabNumber');
  let OrderId14 = getIdValue('14OrderId');
  let Date14 = getIdValue('14Date');
  let Time14 = getIdValue('14Time');
  let State14 = getIdValue('14State');
  let City14 = getIdValue('14City');
  let Locality14 = getIdValue('14Locality');
  let Landmark14 = getIdValue('14Landmark');
  let Description14 = getIdValue('14Description');

  let LabNumber15 = getIdValue('15LabNumber');
  let OrderId15 = getIdValue('15OrderId');
  let Date15 = getIdValue('15Date');
  let Time15 = getIdValue('15Time');
  let State15 = getIdValue('15State');
  let City15 = getIdValue('15City');
  let Locality15 = getIdValue('15Locality');
  let Landmark15 = getIdValue('15Landmark');
  let Description15 = getIdValue('15Description');

  let LabNumber16 = getIdValue('16LabNumber');
  let OrderId16 = getIdValue('16OrderId');
  let Date16 = getIdValue('16Date');
  let Time16 = getIdValue('16Time');
  let State16 = getIdValue('16State');
  let City16 = getIdValue('16City');
  let Locality16 = getIdValue('16Locality');
  let Landmark16 = getIdValue('16Landmark');
  let Description16 = getIdValue('16Description');
  let prescription = document.getElementById('prescription').files[0];

  let LabNumber = LabNumber7 || LabNumber12 || LabNumber13 || LabNumber14 || LabNumber15 || LabNumber16;
  let OrderId = OrderId7 || OrderId9 || OrderId10 || OrderId12 || OrderId13 || OrderId14 || OrderId15 || OrderId16;
  let Description = Description7 || Description9 || Description10 || Description13 || Description14 || Description15 || Description16;
  let Date = Date13 || Date14 || Date15 || Date16;
  let Time = Time13 || Time14 || Time15 || Time16;
  let State = State13 || State14 || State15 || State16;
  let City = City13 || City14 || City15 || City16;
  let Locality = Locality13 || Locality14 || Locality15 || Locality16;
  let Landmark = Landmark13 || Landmark14 || Landmark15 || Landmark16;

  console.log(
  'LabNumber: ', LabNumber, 
  'OrderId: ', OrderId, 
  'Description: ', Description, 
  'Date: ', Date, 'Time: ', Time, 
  'State: ', State, 'City: ', City, 
  'Locality: ', Locality, 
  'Landmark: ', Landmark,
  "prescription: ", prescription);

  const formData = {
  firstName: firstName,
  lastName: lastName,
  Email: Email,
  Mobile: Mobile,
  Type: Type,
  Subtype: Subtype,
  LabNumber: LabNumber,
  OrderId: OrderId,
  Description: Description,
  Date: Date,
  Time: Time,
  State: State,
  City: City,
  Locality: Locality,
  Landmark: Landmark,
  prescription: prescription
  };

  axios.post('http://localhost:5000/contactus', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
}
const ContactForm = () => {
  
  const[corporate, setCorporate] = useState(false);
  const[companyInfo, setCompanyInfo] = useState(false);
  const[enquiry, setEnquiry] = useState(true);

  const HandleCorporate = () => {
    setCorporate(true);
    setEnquiry(false);
    setCompanyInfo(false);
  }
  const HandleCompany = () => {
    setCorporate(false); 
    setEnquiry(false);
    setCompanyInfo(true);
  }
  const HandleEnquiry = () => {
    setCorporate(false);
    setEnquiry(true);
    setCompanyInfo(false);
  }

  return (
    <>
      <section className='p-8 xl:p-32 bg-white space-y-16 xl:space-y-0 border-2 w-full h-auto xl:flex xl:items-start xl:gap-20'>
        {/* LINKS SECTION */}
        <div className='max-w-3xl w-full mx-auto xl:w-[35rem]'>
          <h2 className='uppercase text-lg w-full text-center border-orange-300 border-2 p-3'>contact us</h2>
          <ul className='text-md text-black capitalize w-full h-auto'>
            <li className='p-3 cursor-pointer border-x-2 border-gray-500 hover:text-blue-600' onClick={HandleCorporate}>corporate office</li>
            <li className='p-3 cursor-pointer border-2 border-gray-500 hover:text-blue-600 border-b-0' onClick={HandleCompany}>company information</li>
            <li className='p-3 cursor-pointer border-2 border-gray-500 hover:text-blue-600 border-b-0' onClick={HandleEnquiry}>general information</li>
            <li className='p-3 cursor-pointer border-2 border-gray-500 hover:text-blue-600'>corporate health enquiry</li>
          </ul>
        </div>

        {/* GENERAL ENQUIRY */}
        {enquiry && <GeneralEnquiry/>}
        
        
        {/*  CORPORATE OFFICE */}
        {corporate && <CorporateOffice/>}
        

        {/* COMPANY INFORMATION */}
        {companyInfo && <CompanyInformation/>}
       

      </section>
    </>
  )
}

// GENERAL ENQUIRY
const GeneralEnquiry = () => {
    const[typeId, setTypeId] = useState("");
    const[subTypeData, setSubTypeData] = useState([]);
    const[subTypeId, setSubTypeId] = useState("");

    const [showHide, setShowHide] = useState("");


  const handletype = (e) =>{
    const gettypeId = e.target.value;

    const getSubtypeData = typedata.find(type=>type.type_id === gettypeId).subtype;
    setSubTypeData(getSubtypeData);
    setTypeId(gettypeId);
    console.log(gettypeId);
  }

  const handlesubtype = (e) => {
    const getsubtypeId = e.target.value;
    console.log(getsubtypeId);
    setSubTypeId(getsubtypeId);
    setShowHide(getsubtypeId);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeId, subTypeId)
  };

  return(
    <>
      <div className='border-2 w-full h-auto max-w-4xl mx-auto lg:grid lg:place-items-center'>
            <h2 className='primary-bg-color w-full p-3 text-lg capitalize font-medium px-6'>general enquiry</h2>
            <p className='p-3 px-6 lg:mb-5'>please fill in your details below and we will get back to you. Thanks</p>
            {/* INPUT FIELDS */}
            <form className='px-6 w-full h-auto pb-6 md:space-y-7 lg:grid lg:place-items-center' onSubmit={handleSubmit}
            method='POST'
            enctype="multipart/form-data">
            {/* NAME FIELDS */}
                <div>
                  <label className='font-semibold py-3' htmlFor=''>UserName</label>
                  <div className='flex flex-col md:flex-row item-center md:space-x-9'>
                      <input required 
                      className='border-2 p-2 w-72 my-2 border-gray-500' 
                      id='firstName'
                      type="text" placeholder='First Name' />

                      <input required 
                      className='border-2 p-2 w-72 my-2 border-gray-500' 
                      id='lastName'
                      type="text" placeholder='Last Name' />
                  </div>
                </div>
                
                <div className='md:flex md:items-center md:space-x-9'>
                  {/* EMAIL */}
                  <div className='flex flex-col'>
                    <label className='font-semibold py-1' htmlFor="">Email ID</label>
                    <input  
                    className='border-2 p-2 w-72 mt-1 border-gray-500'
                    id = 'Email'
                    type="email" placeholder='Ex: abc@example.com' />
                  </div>
                  {/* MOBILE NUMBER */}
                  <div className='flex flex-col my-2'>
                    <label className='font-semibold py-1' htmlFor="">Mobile Number</label>
                    <input 
                    className='border-2 p-2 w-72 mt-1 border-gray-500'
                    id='Mobile'
                    type={Number} placeholder='+91 1234567890' />
                  </div>
                </div>

                <div className='md:flex md:items-start md:space-x-9'>
                  {/* TYPE */}
                  <div className='flex flex-col'>
                    <label className='font-semibold py-1' htmlFor="">Type</label>
                    <select required 
                      className='border-2 p-2 w-72 mt-1 border-gray-500 capitalize font-medium' 
                      name="" id="Type" onChange={(e)=>handletype(e)}>
                      <option value="">type</option>
                      {
                        typedata.map((gettype,index)=>(
                          <option value={gettype.type_id} key={index}>{gettype.type_name}</option>
                        ))
                      }
                    </select>
                  </div>

                  {/* SUB TYPE */}
                  <div className='flex flex-col mt-2 md:mt-0'>
                    <label className='font-semibold py-1' htmlFor="">Sub Type</label>
                    <select required 
                      className='border-2 p-2 w-72 mt-1 border-gray-500 capitalize font-medium' 
                      name="" id="Subtype" onChange={(e)=>handlesubtype(e)}>
                      <option value="" >sub type</option>
                        {subTypeData.map((getsubtype,index)=>(
                          <option value={getsubtype.subtype_id} key={index}>{getsubtype.subtype_name}</option>
                        ))}
                    </select>
                  </div>
                </div>
                
                {/* COMPLAINT SUBTYPE HAVING ID = 7 */}
                {
                  showHide === "7" && <div>
                    <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* LAB NUMBER */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">Lab Number</label>
                        <input 
                        required 
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='7LabNumber'
                        type="text" placeholder='00000000' />
                      </div>
                      {/* ORDER ID */}
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Order Id</label>
                        <input 
                        className='border-2 p-2 w-72 mt-1 border-gray-500 OrderId'
                        id='7OrderId'
                        type="text" placeholder='00000000' />
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Description</label>
                        <textarea name="" id="7Description" cols="30" rows="4"
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        placeholder='write here'></textarea>
                    </div>
                </div>
                }


                {/* TECHNICIAN NOT REACHED ID = 9 */}
                {
                  (showHide === "9") && <div>
                    <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* Order Id */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">Order Id</label>
                        <input  
                        required
                        className='border-2 p-2 w-72 mt-1 border-gray-500 OrderId'
                        id='9OrderId'
                        type="text" placeholder='00000000' />
                      </div>
                      {/* DESCRIPTION */}
                      <div className='flex flex-col my-2'>
                          <label className='font-semibold py-1' htmlFor="">Description</label>
                          <textarea name="" id="9Description" cols="30" rows="4"
                          className='border-2 p-2 w-72 mt-1 border-gray-500'
                          placeholder='write here'></textarea>
                      </div>
                    </div>
                </div>
                }

                {/* COMPLAINT ID = 10 */}
                {
                  (showHide === "10") && <div>
                    <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* LAB NUMBER */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">Order Id</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='10OrderId'
                        type="text" placeholder='00000000' />
                      </div>
                      {/* DESCRIPTION */}
                      <div className='flex flex-col my-2'>
                          <label className='font-semibold py-1' htmlFor="">Description</label>
                          <textarea name="" id="10Description" cols="30" rows="4"
                          className='border-2 p-2 w-72 mt-1 border-gray-500'
                          placeholder='write here'></textarea>
                      </div>
                    </div>
                </div>
                }


                {/* INCORRECT INVOICE ID = 12 */}
                {
                  (showHide === "12") && <div>
                  <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* LAB NUMBER */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">Lab Number</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='12LabNumber'
                        type="text" placeholder='00000000' />
                      </div>
                      {/* ORDER ID */}
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Order Id</label>
                        <input 
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='12OrderId'
                        type="text" placeholder='00000000' />
                      </div>
                    </div>
                </div>
                }


                {/* HIGH WAITING TIME ID = 13 */}
                {
                  (showHide === "13") && <div>
                  <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* LAB NUMBER */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">Lab Number</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='13LabNumber'
                        type="text" placeholder='00000000' />
                      </div>
                      {/* ORDER ID */}
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Order Id</label>
                        <input 
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='13OrderId'
                        type="text" placeholder='00000000' />
                      </div>
                    </div>


                    {/* DATE AND TIME */}
                    <div>
                      <label className='font-semibold py-3' htmlFor=''>Visit Date & Time</label>
                      <div className='flex flex-col md:flex-row item-center md:space-x-9'>
                          <input required 
                          className='border-2 p-2 w-72 my-2 border-gray-500' 
                          id='13Date'
                          type="date" />

                          <input required 
                          className='border-2 p-2 w-72 my-2 border-gray-500' 
                          id='13Time'
                          type="time"  />
                      </div>
                   </div>

                  {/* STATE AND CITY */}
                   <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* STATE */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">State</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='13State'
                        type="text" placeholder='Haryana' />
                      </div>
                      {/* CITY */}
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">City</label>
                        <input 
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='13City'
                        type="text" placeholder='city' />
                      </div>
                    </div>


                    {/* LOCALITY AND LANDMARK */}
                   <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* LOACLITY */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">Locality</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='13Locality'
                        type="text" placeholder='Locality' />
                      </div>
                      {/* LANDMARK */}
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Landmark</label>
                        <input 
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='13Landmark'
                        type="text" placeholder='Landmark' />
                      </div>
                    </div>

                  {/* DESCRIPTION */}
                  <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Description</label>
                        <textarea name="" id="13Description" cols="30" rows="4"
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        placeholder='write here'></textarea>
                    </div>

                </div>
                }


                {/* FACILITIES NOT AVAILABLE ID = 14 */}
                {
                  (showHide === "14") && <div>
                  <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* LAB NUMBER */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">Lab Number</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='14LabNumber'
                        type="text" placeholder='00000000' />
                      </div>
                      {/* ORDER ID */}
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Order Id</label>
                        <input 
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='14OrderId'
                        type="text" placeholder='00000000' />
                      </div>
                    </div>


                    {/* DATE AND TIME */}
                    <div>
                      <label className='font-semibold py-3' htmlFor=''>Visit Date & Time</label>
                      <div className='flex flex-col md:flex-row item-center md:space-x-9'>
                          <input required 
                          className='border-2 p-2 w-72 my-2 border-gray-500' 
                          id='14Date'
                          type="date" />

                          <input required 
                          className='border-2 p-2 w-72 my-2 border-gray-500' 
                          id='14Time'
                          type="time"  />
                      </div>
                   </div>

                  {/* STATE AND CITY */}
                   <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* STATE */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">State</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='14State'
                        type="text" placeholder='Haryana' />
                      </div>
                      {/* CITY */}
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">City</label>
                        <input 
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='14City'
                        type="text" placeholder='city' />
                      </div>
                    </div>


                    {/* LOCALITY AND LANDMARK */}
                   <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* LOACLITY */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">Locality</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='14Locality'
                        type="text" placeholder='Locality' />
                      </div>
                      {/* LANDMARK */}
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Landmark</label>
                        <input 
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='14Landmark'
                        type="text" placeholder='Landmark' />
                      </div>
                    </div>

                  {/* DESCRIPTION */}
                  <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Description</label>
                        <textarea name="" id="14Description" cols="30" rows="4"
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        placeholder='write here'></textarea>
                    </div>

                </div>
                }

                {/* BEHAVIOUR RELATED ID = 15 */}
                {
                  (showHide === "15") && <div>
                  <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* LAB NUMBER */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">Lab Number</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='15LabNumber'
                        type="text" placeholder='00000000' />
                      </div>
                      {/* ORDER ID */}
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Order Id</label>
                        <input 
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='15OrderId'
                        type="text" placeholder='00000000' />
                      </div>
                    </div>


                    {/* DATE AND TIME */}
                    <div>
                      <label className='font-semibold py-3' htmlFor=''>Visit Date & Time</label>
                      <div className='flex flex-col md:flex-row item-center md:space-x-9'>
                          <input required 
                          className='border-2 p-2 w-72 my-2 border-gray-500' 
                          id='15Date'
                          type="date" />

                          <input required 
                          className='border-2 p-2 w-72 my-2 border-gray-500' 
                          id='15Time'
                          type="time"  />
                      </div>
                   </div>

                  {/* STATE AND CITY */}
                   <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* STATE */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">State</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='15State'
                        type="text" placeholder='Haryana' />
                      </div>
                      {/* CITY */}
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">City</label>
                        <input 
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='15City'
                        type="text" placeholder='city' />
                      </div>
                    </div>


                    {/* LOCALITY AND LANDMARK */}
                   <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* LOACLITY */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">Locality</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='15Locality'
                        type="text" placeholder='Locality' />
                      </div>
                      {/* LANDMARK */}
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Landmark</label>
                        <input 
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='15Landmark'
                        type="text" placeholder='Landmark' />
                      </div>
                    </div>

                  {/* DESCRIPTION */}
                  <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Description</label>
                        <textarea name="" id="15Description" cols="30" rows="4"
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        placeholder='write here'></textarea>
                    </div>

                </div>
                }

                {/* LATE OPENING AND EARLY OPENING ID = 16 */}
                {
                  (showHide === "16") && <div>
                  <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* LAB NUMBER */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">Lab Number</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='16LabNumber'
                        type="text" placeholder='00000000' />
                      </div>
                      {/* ORDER ID */}
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Order Id</label>
                        <input 
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='16OrderId'
                        type="text" placeholder='00000000' />
                      </div>
                    </div>


                    {/* DATE AND TIME */}
                    <div>
                      <label className='font-semibold py-3' htmlFor=''>Visit Date & Time</label>
                      <div className='flex flex-col md:flex-row item-center md:space-x-9'>
                          <input required 
                          className='border-2 p-2 w-72 my-2 border-gray-500' 
                          id='16Date'
                          type="date" />

                          <input required 
                          className='border-2 p-2 w-72 my-2 border-gray-500' 
                          id='16Time'
                          type="time"  />
                      </div>
                   </div>

                  {/* STATE AND CITY */}
                   <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* STATE */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">State</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='16State'
                        type="text" placeholder='Haryana' />
                      </div>
                      {/* CITY */}
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">City</label>
                        <input 
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='16City'
                        type="text" placeholder='city' />
                      </div>
                    </div>


                    {/* LOCALITY AND LANDMARK */}
                   <div className='md:flex md:items-center md:space-x-9 my-2'>
                      {/* LOACLITY */}
                      <div className='flex flex-col'>
                        <label className='font-semibold py-1' htmlFor="">Locality</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='16Locality'
                        type="text" placeholder='Locality' />
                      </div>
                      {/* LANDMARK */}
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Landmark</label>
                        <input 
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='16Landmark'
                        type="text" placeholder='Landmark' />
                      </div>
                    </div>

                  {/* DESCRIPTION */}
                  <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Description</label>
                        <textarea name="" id="16Description" cols="30" rows="4"
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        placeholder='write here'></textarea>
                    </div>

                </div>
                }


                {/* HAVE PRESCRIPTION ID = 17 */}
                {
                  showHide === "17" && 
                      <div className='flex flex-col my-2'>
                        <label className='font-semibold py-1' htmlFor="">Lab Number</label>
                        <input  
                        className='border-2 p-2 w-72 mt-1 border-gray-500'
                        id='prescription'
                        name='prescription'
                        type="file"  />
                      </div>
                }
                

                {/* SUBMIT BUTTON */}
                <div className='w-full text-center'>
                  <button type='submit' 
                  className='primary-bg-color w-40 h-12 mt-4 font-semibold rounded-full'
                  onClick={()=>{
                    sendData();
                  }}>Submit</button>
                </div>

            </form>
        </div>
    </>
  )
}


//  CORPORATE OFFICE 
const CorporateOffice = () =>{
  return(
    <section className='max-w-4xl w-full'>
      <div className='border-2 p-4 '>
          <h2 className='uppercase font-medium text-lg border-b-2 pb-3 mb-4'>Corporate Office</h2>
          <address className='my-3'>
            <p>Dr Lal PathLabs Ltd.</p>
            <span>12th Floor, Tower B, SAS Tower,</span>
            <span>Medicity, Sector-38,</span>
            <span>Gurgaon-122001, Haryana.</span>
            <p><span>Fax: +91 124 4234468</span></p>
          </address>

          <div className='my-3'>
            <h2 className='font-medium text-lg'>Email</h2>
            <Link className='hover:text-blue-600' to="mailto:Customer.Care@lalpathlabs.com">Customer.Care@lalpathlabs.com</Link>
          </div>

          <div className='my-3'>
            <h2 className='font-medium text-lg'>Website</h2>
            <Link className='hover:text-blue-600' to="https://www.lalpathlabs.com"><p>www.lalpathlabs.com</p> </Link>
          </div>
          
          <div className='my-3'>
            <h2 className='font-medium text-lg'>National Customer Care</h2>
            <Link className='hover:text-blue-600' to="tel:01724123038">0172-4123038</Link>
          </div>

        </div>
    </section>
  )
}


// COMPANY INFORMATION
const CompanyInformation = () => {
  return(
    <section className='max-w-4xl w-full'>
       <div className='border-2 p-4'>
          <h2 className='uppercase font-medium text-lg border-b-2 pb-3 mb-4'>Company Information</h2>
          <p>Dr Lal PathLabs Limited.</p>
          <address className='my-3'>
            <span>Booth no, sector 35-c</span>
            <span>chandigarh inner market</span>
            <p><span>Fax: +91 124 4234468</span></p>
          </address>

          <div className='my-3'>
            <h2 className='font-medium text-lg'>Website</h2>
            <Link className='hover:text-blue-600' to="https://www.lalpathlabs.com"><p>www.lalpathlabs.com</p> </Link>
          </div>
          
          <div className='my-3'>
            <h2 className='font-medium text-lg'>For any queries and grievances, please contact:</h2>
            <p>Mr jagtar singh</p>
            <Link className='hover:text-blue-600' to="tel:+919425860005">+91 9425860005</Link>
          </div>

        </div>
    </section>
  )
}


export default ContactForm
