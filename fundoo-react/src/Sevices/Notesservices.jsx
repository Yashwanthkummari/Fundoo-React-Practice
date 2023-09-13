import axios from "axios";

let token
function Author(){
    return token = 
    {
        headers:{

            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    } 
}

export const  CreateNote =async(obj)=>{

    let response = await axios.post(
      "https://localhost:44362/api/Notes/Note",
        obj,
        Author()
        
    )
    console.log(response)
    return response   
}

export const getNote = async()=>{
    let response = await axios.get(
        "https://localhost:44362/api/Notes/AllNotes",
        Author()
    )
    
    return response
}

export const trashNote = async(ID)=>{
    let response = await axios.patch(
        `https://localhost:44362/api/Notes/TrashNotes?NotesID=${ID}`,{},
        Author()
    )
    return response
}

export const archieveNote = async(ID)=>{
    let response = await axios.patch(
        `https://localhost:44362/api/Notes/Archeive Notes?NotesID=${ID}`,{},
        Author()
    )
    return response
}