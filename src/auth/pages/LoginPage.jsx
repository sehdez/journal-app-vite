import { Link as RouterLink } from 'react-router-dom';
import { Typography,  Grid, TextField, Button, Link } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout';
export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form onSubmit={(e)=> e.preventDefault()} autoComplete='off'>
        <Grid container>
          

          <Grid item xs={ 12 } className='user-icon' >
            <TextField 
              label='Email'
              type='email'
              placeholder='correo@google.com'
              fullWidth />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 3 }} >
            <TextField 
              label='Password'
              type='password'
              fullWidth/>
          </Grid>
        </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt:2 }} >
            <Grid item xs={ 12 } sm={ 6 } >
            <Button type='submit' variant='contained' fullWidth >
              Login
            </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 } >
              <Button type='submit' variant='contained' fullWidth >
                Google
              </Button>
            </Grid>

            <Grid container 
              direction='row' 
              justifyContent='start'
              sx={{ mt: 2, ml: 2 }}

              >
              
              <Link component={ RouterLink } color='inherit' to='/auth/register'>
                  Crear una cuenta
              </Link>


            </Grid>


          </Grid>
      </form>
    </AuthLayout>
  )
}
