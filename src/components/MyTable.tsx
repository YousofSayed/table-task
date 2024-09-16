import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { GET } from "../helpers/cocktail";
import { StarWarDataSchema, StarWarResponse } from "../helpers/types";
import { P } from "./P";

export const MyTable = () => {
  const initData: StarWarDataSchema[] = [];
  const [data, setData] = useState(initData);
  const dataRef = useRef(Array.from(initData));
  const url = "https://swapi.dev/api/people/";
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res: Promise<StarWarResponse> = await GET({
      url,
      json: true,
    });
    const results = (await res).results;
    setData(results);
    dataRef.current = results;
  };

  const filterData = (value : string, data : StarWarDataSchema[])=>{
    if(!value){
      setData(dataRef.current);
      return;
    }
    const newData = data.filter(obj=>obj.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    console.log(newData);
    
    setData(newData);
  }
 

  return (
    <section className=" flex flex-col gap-5 w-[full] border-2 p-2 rounded-lg shadow-md shadow-[#eee]">
      <h1 className="text-start font-bold underline">Star War</h1>

      <section className="flex w-full gap-2 rounded-lg overflow-hidden"> 
        <p className="text-start rounded-lg font-semibold w-[30%] p-2 bg-[#edf7ed] ">Search by name :</p>
        <input onInput={(ev : any)=>{
          filterData(ev.target.value , data);
        }} className="w-[70%] p-2 outline-none border-2 rounded-lg" type="text" />
      </section>

     {
      data.length ? 
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="bg-[#edf7ed]">
          <TableRow>
            <TableCell className="font-bold text-2xl  border-r-2"><P>name</P></TableCell>
            <TableCell className="font-bold text-2xl  border-r-2"><P>gender</P></TableCell>
            <TableCell className="font-bold text-2xl  border-r-2"><P>height</P></TableCell>
            <TableCell className="font-bold text-2xl  border-r-2"><P>eye color</P></TableCell>
            <TableCell className="font-bold text-2xl  "><P>details</P></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((data,i) => {
            return (<TableRow key={i}>
              <TableCell className="border-r-2">{data.name}</TableCell>
              <TableCell className="border-r-2">{data.gender}</TableCell>
              <TableCell className="border-r-2">{data.height}</TableCell>
              <TableCell className="border-r-2">{data.eye_color}</TableCell>
              <TableCell> </TableCell>
             
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </TableContainer> :

    <div className=" w-[full] p-5 flex justify-center items-center">
      <p className="w-[50px] h-[50px] animate-spin rounded-full border-2 border-cyan-400 border-r-transparent"></p>
    </div>
     }
    </section>
  );
};
