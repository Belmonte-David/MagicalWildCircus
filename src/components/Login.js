import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import API from '../utils/API';

const styles = theme => ({
  margin: {   
    margin: '10px',      
   },

   button: {
    color:'black',
    margin: '10px',
 },

  background:{
     margin:'70px',
     marginBottom: '0px',    
  }
});

 class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: '',
          showPassword: '',
          error:false,
      }      
  }
  
  send = event => {
      if(this.state.email.length === 0){
          return this.setState({error :true})
      }
      if(this.state.password.length === 0){
        return this.setState({error :true})
      }
      API.login(this.state.email, this.state.password).then(function(data){
          localStorage.setItem('token', data.data.token);
          window.location = "/dashboard"
      },function(error){
          console.log(error);
          return window.location = "/signup";
      })
  }     
  handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value,        
      });
  }

  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword });
  };

  render() {
    const { classes } = this.props;
    const {error} = this.state;
      return(           
          <div className={classes.background} >
            {error ? <p>Veuillez entrer votre email et mot de passe</p> : ''} 
            <h1>Les plus belles photos de cirques</h1>
            <h4>Pour retrouver plus de 7 photos inédites de cirque veuillez vous connecter !</h4>
          <TextField
        className={classes.margin}
        id="email"
        type="email"
        name="email"
        autoComplete="email"
        label="Email"
        value={this.state.email} 
        onChange={this.handleChange}
      />
            <TextField
        id="password"
        className={classes.margin}
        type={this.state.showPassword ? 'text' : 'password'}
        label="Password"
        value={this.state.password} 
        onChange={this.handleChange}         
        multiline
  InputProps={{  
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="Toggle password visibility"
                onClick={this.handleClickShowPassword}
                className={classes.text}
              >
                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}        
      /> 
      <Button 
        variant="outlined" 
        className={classes.button} 
        onClick={this.send}
        block
        bsSize="large"
        type="submit">
       Connexion
            </Button>                  
        </div>    
      )
    }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
