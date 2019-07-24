import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import CustomHead from '../components/Head';
import Setting from '../components/Setting';
import TopNav from '../components/TopNav';
import { Check as CheckIcon, Settings as SettingsIcon } from '@material-ui/icons';

const Settings = () => {
  const [body, setBody] = useState(
    <div className="load-wrap">
      <CircularProgress className="load-app" />
    </div>
  );
  useEffect(() => {
    const credentials = JSON.parse(localStorage.getItem('login'));
    if (!credentials) {
      location.href = `${ location.href.split('/')[0] }/app`;
    } else {
      setBody(
        <>
          <CssBaseline />
          <CustomHead />
          <TopNav onLogout={ () => {
            localStorage.removeItem('login');
            location.href = `${ location.href.split('/')[0] }/app`;
          } } />
          <div className="settings-offset" />
          <Grid className="settings-body" container spacing={ 4 }>
            <Grid className="settings-title" item sm={ 12 }>
              <SettingsIcon className="settings-icon" />
              &emsp;Settings
            </Grid>
            <Grid item sm={ 3 }>
              <Setting name="tts">Text-to-Speech</Setting>
            </Grid>
            <Grid item sm={ 3 }>
              <Setting name="vemail">Voice Email</Setting>
            </Grid>
            <Grid item sm={ 3 }>
              <Setting name="recognition">Voice Recognition</Setting>
            </Grid>
            <Grid item sm={ 3 }>
              <Setting name="font">Larger Font</Setting>
            </Grid>
            <Grid className="settings-apply" item sm={ 12 }>
              <Link href="/app">
                <Button color="primary" size="large" variant="outlined">
                  <CheckIcon />
                  &emsp;Apply
                </Button>
              </Link>
            </Grid>
          </Grid>
        </>
      );
    }
  }, []);
  return (
    <>
      <CssBaseline />
      { body }
    </>
  );
};

export default Settings;