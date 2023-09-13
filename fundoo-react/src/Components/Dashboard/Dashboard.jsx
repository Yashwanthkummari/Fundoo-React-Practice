import React from "react";
import MiniDrawer from "../Drawer/Mini Varient Drawer";
import Note from "../Drawer/Note1";
// import Note2 from "./Drawer/Note2";
import Note2 from "../Drawer/Note2"
import { useState, useEffect } from 'react';
import { getNote } from "../../Sevices/Notesservices";
import Note3 from "../Drawer/Note3";
import './Dashboard.css';

function Dashboard() {


    const [close, setclose] = useState(true)

    const [arrayData, setarrayData] = useState([])

    // const [dtaNotes, setdtaNotes] = useState("Notes")
    const [dtaNotes, setdtaNotes] = useState('Notes')

    async function fetchedData() {
        let response = await getNote();
        console.log(response.data.result)
        let newdata = response.data.result
        // setarrayData(response.data.result)
        console.log(dtaNotes)
        if (dtaNotes == 'Notes') {
            let alldata = newdata.filter((A) => A.isArchive == false && A.isTrash == false)
            console.log(alldata)
            setarrayData(alldata)
        }
        else if (dtaNotes == 'Archive') {
            let archievedata = newdata.filter((A) => A.isArchive == true && A.isTrash == false)
            console.log(archievedata)
            setarrayData(archievedata)
        }
        else {
            let trashdata = newdata.filter((A) => A.isArchive == false && A.isTrash == true)
            console.log(trashdata)
            setarrayData(trashdata)
        }
    }

    useEffect(() => {
        fetchedData()
    }, [dtaNotes])

   
    return (
        <div  >


            <MiniDrawer setdtaNotes={setdtaNotes} />
            {
                close ? <Note setclose={setclose} /> : <Note2 setclose={setclose} fetchedData={fetchedData} />
            }
           
            <div className="Array"  >
                {
                    arrayData.map((y) =>
                        <Note3 y={y} fetchedData={fetchedData} />)
                }
            </div>
           

        </div>
    )
}
export default Dashboard