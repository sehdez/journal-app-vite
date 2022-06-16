import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField, Button, Link } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout';
export const RegisterPage = () => {
  return (
    <AuthLayout title='Registro'>
      <form onSubmit={(e)=> e.preventDefault()} autoComplete='off'>
        
      <Grid container>
          <Grid item xs={ 12 }  >
            <TextField 
              label='Name'
              type='text'
              placeholder='Pedro Picapiedra'
              fullWidth/>
          </Grid>
        
          <Grid item xs={ 12 } sx={{ mt: 3 }} >
            <TextField 
              label='Email'
              type='email'
              placeholder='correo@google.com'
              fullWidth/>
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 3 }} >
            <TextField 
              label='Password'
              type='password'
              fullWidth/>
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 3 }} >
            <TextField 
              label='Confirm passworod'
              type='passworod'
              fullWidth/>
          </Grid>

        </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt:2 }} >
            <Grid item xs={ 12 } >
            <Button type='submit' variant='contained' fullWidth >
              Registrarse 
            </Button>
            </Grid>

            <Grid container 
              direction='row' 
              justifyContent='start'
              sx={{ mt: 2, ml: 2 }}

              >
              
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                  Inicia sesión
              </Link>


            </Grid>


          </Grid>
      </form>
    </AuthLayout>
  )
}
