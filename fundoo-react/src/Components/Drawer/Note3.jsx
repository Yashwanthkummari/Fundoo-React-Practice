import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PaletteIcon from '@mui/icons-material/Palette';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import "./Note3.css"
import { trashNote, archieveNote } from '../../Sevices/Notesservices';


function Note3({ y, fetchedData }) {


    const trashnote = async () => {
        let ID = y.noteId;
        let response = await trashNote(ID)
        let res = response.data.result
        console.log(res);
        fetchedData()

    }

    const archievenote = async () => {
        let ID = y.noteId
        let response = await archieveNote(ID)
        console.log(response)
        fetchedData()
    }


    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
               
                '& > :not(style)': {
                    m: 1,
                    // width: 300,

                },
            }}
        >
            <div >
                <Paper elevation={3} style={{ padding:'10px',}}>

                    <div className='title'>
                        <div >
                            {y.title}
                        </div>
                        <div >
                            <PushPinIcon className='Icon'/>
                        </div>


                    </div>
                    <div className='next'>
                    <div>{y.takeNote}</div>

                    <div className='Icons'>
                        <div><IconButton><AddAlertIcon  /></IconButton></div>
                        <div><IconButton><PaletteIcon /></IconButton></div>
                        <div><IconButton><PersonAddAltOutlinedIcon /></IconButton></div>
                        <div><IconButton><ImageOutlinedIcon /></IconButton></div>
                        <div><IconButton onClick={archievenote}><ArchiveIcon /></IconButton></div>
                        <div><IconButton><MoreVertOutlinedIcon /></IconButton></div>
                        <div><IconButton onClick={trashnote}><DeleteIcon /></IconButton></div>

                    </div>
                    </div>
                </Paper>
            </div>
        </Box>
    );
}
export default Note3