import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';
import { useState } from 'react';


const MessageInfo=()=>{
    const [open, setOpen] = useState(true)
    return(<div><Collapse in={open}>
        <Alert action={
        <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
            setOpen(false);
            }} >
        <CloseIcon fontSize="inherit" />
        </IconButton>}
        
        >
        Votre demande d'intervention est enovoyée avec une succes !
        </Alert>
        </Collapse>
        <Button disabled={open} variant="outlined" onClick={() => { setOpen(true);}}>
            Re-open
        </Button> 
        </div>)



}
export default MessageInfo;