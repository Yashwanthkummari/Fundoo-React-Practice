import AddAlertIcon from '@mui/icons-material/AddAlert';
import PaletteIcon from '@mui/icons-material/Palette';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button, InputBase, colors } from '@mui/material';
import { useState } from 'react';
import { CreateNote } from '../../Sevices/Notesservices';

function Note2({ setclose,fetchedData }) {

   

    const [notes, setNotes] = useState({
        title: "",
        takeaNote: ""
    })
   

    const taketitle = (event) => {
        setNotes({ ...notes, title: event.target.value })
    }

    const takenotes = (event) => {
        setNotes({ ...notes, takeaNote: event.target.value })
    }
   


    const closenote = async () => {
        setclose(true)
        console.log(notes);
        if (notes.title != "") {
            let response = await  CreateNote(notes);
            console.log(response)
            fetchedData()
        }
        else{
            alert("Enter the Notes")
        }
    }


    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: 10,
                marginLeft: 45,
                '& > :not(style)': {
                    m: 1,
                    width: 600,
                },
            }}
        >
            <Paper elevation={3}  >
                <Box>
                    <div style={{ display: 'flex' }}> <input type='text' style={{ width: 600, marginLeft: 10, border: 'None', outline: 'none' }} placeholder='Title' required
                        value={notes.title} onChange={taketitle} ></input>
                        <PushPinIcon sx={{ color: 'grey' }} /></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* <input type='text' style={{ width: 590, border: 'None', marginLeft: 10, paddingTop: 30, paddingBottom: 40, outline: 'none' }} placeholder='Take a note'></input> */}
                        <TextField id="standard-basic" placeholder="Take a note" variant="standard" required multiline InputProps={{ disableUnderline: true }} style={{ marginLeft: 10, paddingTop: 20 }}
                            value={notes.takeaNote} onChange={takenotes} />
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div> <AddAlertIcon sx={{ color: 'grey' }} /></div>
                            <div><PaletteIcon sx={{ color: 'grey' }} /></div>
                            <div><PersonAddAltOutlinedIcon sx={{ color: 'grey' }} /></div>
                            <div><ImageOutlinedIcon sx={{ color: 'grey' }} /></div>
                            <div><UndoOutlinedIcon sx={{ color: 'grey' }} /></div>
                            <div><RedoOutlinedIcon sx={{ color: 'grey' }} /></div>
                            <div><MoreVertOutlinedIcon sx={{ color: 'grey' }} /></div>

                            <div><Button sx={{ marginLeft: 20, color: 'black' }} onClick={closenote}> Close</Button></div>
                        </div>


                    </div>

                </Box>
            </Paper>
        </Box>
    )
}
export default Note2