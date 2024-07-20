import { Route, Routes } from "react-router-dom";
import Home from "../componet/Home";
import Product from "../componet/Product";
import Login from "../componet/Login";
import Descprion from "../componet/Descprion";
import Private from "../componet/Private";

export function Allroutes(){
    return (
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Product" element={
                    <Private >
                    <Product />
                    </Private>
                    }></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/description/:id" element={<Descprion />}></Route>
            </Routes>
    )
}