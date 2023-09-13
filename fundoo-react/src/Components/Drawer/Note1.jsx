import Paper from '@mui/material/Paper';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import Box from '@mui/material/Box';


function Note({setclose}){
   
   const open =()=>{
    setclose(false)
   }
    return(
        
        <div>
        <Box 
        
          sx={{
            display: 'flex',
            marginLeft: 45,
            marginTop: 10,
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 600,
              height: 45,
            },
          }}
        >

          <Paper elevation={3} onClick={open} >
           
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ marginTop: 12, marginLeft: 20 }}><span  >Take a note...</span></div>
              <div style={{ marginTop: 12, marginRight: 20 }}>
                <CheckBoxOutlinedIcon />
                <BrushOutlinedIcon sx={{ marginLeft: 4 }} />
                <CropOriginalIcon sx={{ marginLeft: 4 }} />
              </div>
            </div>
            
          </Paper>

        </Box>
      

      </div>
      
    )
}
export default Note