import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const Login = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      fullWidth
      open={ props.open }
    >
      <DialogTitle id="form-dialog-title">
        <VpnKeyIcon />
        &emsp;Sign in
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Email Address"
          margin="normal"
          onChange={ e => setEmail(e.target.value) }
          variant="outlined"
          type="email"
        />
        <br />
        <TextField
          fullWidth
          label="Password"
          margin="normal"
          onChange={ e => setPassword(e.target.value) }
          variant="outlined"
          type="password"
        />
      </DialogContent>
      <DialogActions>
        {
          (!!email && !!password) &&
          <Button color="primary" onClick={ () => props.onSubmit([email, password]) }>
            Login
          </Button>
        }
      </DialogActions>
    </Dialog>
  );
};

export default Login;