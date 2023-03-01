import "./App.css";
import { TransactionPage } from "./Components/TransactionPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./Components/Navigationbar";
import { LandingPage } from "./Components/LandingPage";
import { Footer } from "./Components/Footer";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { CropStatusFamer } from "./Components/CropStatusFarmer";
import { FarmerCropStatus } from "./Components/FarmerCropStatus";
import { Login1 } from "./Components/Login1";
import { AddCrop } from "./Components/AddCrop";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<LandingPage></LandingPage>}></Route>
            <Route path="/transaction" element={<TransactionPage></TransactionPage>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/adminCropTable" element={<CropStatusFamer></CropStatusFamer>}></Route>
            <Route path="/cropStatusFarmer" element={<FarmerCropStatus></FarmerCropStatus>}></Route>
            <Route path="/login1" element={<Login1></Login1>}></Route>
            <Route path="/addCrop" element={<AddCrop></AddCrop>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
