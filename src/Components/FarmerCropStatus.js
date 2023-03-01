import { useEffect, useState } from "react"
import { getAllCropList } from "../Services/EFarmerApiService";
import "./FarmerCropStatus.css"
export function FarmerCropStatus() {

  let [cropList,setCropList]= useState([]);
  let id=2;
  async function getCropList(id)
  {
    var response=await getAllCropList(id);
    setCropList(response.data);
    console.log(response.data);
    console.log(response.data[3].customerid);
  }

  useEffect(() => {
    getCropList(id);
  },[])
  return (
    <>
    <div className="bgp1">
      <div className="container">
        <table className="table table-bordered mt-5 align-middle caption-top table-responsive">
            <caption className="text-center fs-1 bold text-white">Crops Status</caption>
          <thead className="text-white">
            <tr>
              <th scope="col">Sr. No </th>
              <th scope="col">Crop</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price per Kg</th>
              <th scope="col">Total Price</th>
              <th scope="col">Status</th>
              <th scope="col">Sold/Unsold</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {cropList.map((item) => {
              return(
                <tr>
                <th scope="row">{item.cropID}</th>
                <td>{item.cropName}</td>
                <td>{item.weight}</td>
                <td>{item.price}</td>
                <td>{item.weight * item.price}</td>
                <td>{item.status}</td>
                {
                  item.customerid===0?(<td>Unsold</td>):(<td>Sold</td>)
                }
              </tr>
              );
            })}
            
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}
