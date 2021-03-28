import React, { useState } from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';
import MessageInfo from './MessageInfo';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
      },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    }, 
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));

  

export default function AjouMembSociete() {
    const [raisonSociale,setRaisonSociale]=useState("");
    const [adresse,setAdresse]=useState("");
    const [tel,setTel]=useState("");
    const [email,setEmail]=useState("");
    const [nRegistreCommerce,setNRegistreCommerce]=useState("");
    const [codeTVA,setCodeTVA]=useState("");
    const [login,setLogin]=useState("");
    const [motDePasse,setMotDePasse]=useState("");
    const [erreur,setErreur]=useState(false);
    const [messageInfo, setMessageInfo] = useState(<div></div>);

    const classes = useStyles();
    const envoyer=(event)=>{
        const ob={
            raisonSociale,
            adresse,
            tel,
            email,
            nRegistreCommerce,
            codeTVA,
            login,
            motDePasse
        }
        if(raisonSociale!=="" && adresse!=="" && tel!=="" &&
        email!=="" && nRegistreCommerce!=="" && codeTVA!=="" && 
        login!=="" && motDePasse!=="" ){
        Axios.post('http://localhost:3001/api/v1/auth/signupClient',ob ).then( res => {
            console.log(res.data);
            Axios.get(`http://localhost:3001/api/v1/client/${res.data.client}`)
              .then(res => {
                setMessageInfo(<MessageInfo raisonSociale={res.data.data.raisonSociale}/>);
              })
            document.getElementById("form").reset();
        })
        }else{
          setErreur(true)
        }
        event.preventDefault();
    }
  return (
    <React.Fragment>
      <AppBar position="absolute" xs={12} color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Ajouter un nouveau client
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
      <Paper className={classes.paper}>
      <form id="form">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="raisonSociale"
            name="raisonSociale"
            label="Raison Sociale"
            fullWidth
            onChange={(event)=>{setRaisonSociale(event.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="adresse"
            name="adresse"
            label="Adresse"
            fullWidth
            onChange={(event)=>{setAdresse(event.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tel"
            name="tel"
            label="Tél/Fax"
            fullWidth
            onChange={(event)=>{setTel(event.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Adresse email"
            fullWidth
            onChange={(event)=>{setEmail(event.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nRegistreCommerce"
            name="nRegistreCommerce"
            label="N° Registre du commerce"
            fullWidth
            onChange={(event)=>{setNRegistreCommerce(event.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="codeTVA"
            name="codeTVA"
            label="Code TVA"
            fullWidth
            onChange={(event)=>{setCodeTVA(event.target.value)}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="login"
            name="login"
            label="Login"
            fullWidth
            onChange={(event)=>{setLogin(event.target.value)}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="motDePasse"
            name="motDePasse"
            label="Mot de passe"
            fullWidth
            onChange={(event)=>{setMotDePasse(event.target.value)}}
          />
        </Grid>
      </Grid>
      <Alert severity="error" hidden={!erreur} >
        <AlertTitle style={{fontSize:"14px"}}>Veyez remplir tout les champs</AlertTitle>
      </Alert>
      <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.button}
            onClick={envoyer}
            >
            Ajouter
      </Button>
      <Grid item xs={12}>
        {messageInfo}
      </Grid>  
      </form>  
      </Paper>
      </main>
    </React.Fragment>
  );
}