import { useState } from 'react'

import { Button, Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'

import Icon from 'src/@core/components/icon'

import CustomAvatar from 'src/@core/components/mui/avatar'
import CustomTextField from 'src/@core/components/mui/text-field'

interface State {
  token: string
  showtoken: boolean
}

const Files = () => {
  const [values] = useState<State>({
    token: 'qqqqqq',
    showtoken: false
  })
  return (
    <Grid>
      <Card sx={{ position: 'relative', mb: 5 }} style={{ lineHeight: '1', height: 'auto' }}>
        <CardContent>
          <Grid item xs={12} md={12} sx={{ flexDirection: 'row', display: 'flex' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 7 }}>
              <CustomAvatar skin='light' variant='rounded' sx={{ mr: 2, width: 30, height: 30 }}>
                <Icon icon='tabler:key' fontSize='1.2rem' />
              </CustomAvatar>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h5' sx={{ mr: 2 }}>Files discoverer</Typography>
                <Box sx={{ ml: 'auto' }}>
                  <Button
                    type='submit'
                    variant='contained'
                    sx={{
                      backgroundColor: '#7367F029',
                      color: '#7367F0',
                      '&:hover': {
                        backgroundColor: '#7367F029',
                        color: '#FFFFFF'
                      }
                    }}
                  >
                    Extend
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={12}>
            <form>
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    label='Access Link URL'
                    placeholder='https://ez-vps.co/instances/Ag8s744r2Lbs'
                    disabled
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    label='Access Token'
                    value={values.token}
                    type={values.showtoken ? 'text' : 'password'}
                    disabled
                  />
                </Grid>
              </Grid>
            </form>
          </Grid>

        </CardContent>
      </Card>
    </Grid >
  )
}

export default Files
