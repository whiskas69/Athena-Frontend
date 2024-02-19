// ---- แก้ไขทำ Instant Detail ----

// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'

// ** MUI Imports
import MenuItem from '@mui/material/MenuItem'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import CustomTextField from 'src/@core/components/mui/text-field'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

interface State {
  token: string
  showtoken: boolean
}

const InstantDetail = () => {
  // ** States
  const [values, setValues] = useState<State>({
    token: '',
    showtoken: false
  })

  const storageCapacity = {
    Storage1: 2,
    Storage2: 10,
    Storage3: 5.3,
    Storage4: 49
  }

  const selectedStorage = 'Storage1'

  const hasLowCapacity = (capacity: number) => {
    return capacity < 10
  }

  return (
    <Grid>
      <Card sx={{ position: 'relative', mb: 5 }} style={{ lineHeight: '1' }}>
        <CardContent>
          <Grid item xs={12} md={12} sx={{ flexDirection: 'row', display: 'flex' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 7 }}>
              <CustomAvatar skin='light' variant='rounded' sx={{ mr: 2, width: 30, height: 30 }}>
                <Icon icon='tabler:key' fontSize='1.2rem' />
              </CustomAvatar>
              <Box>
                <Typography variant='h5'>Access Link</Typography>
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
                    placeholder='············'
                    disabled
                  />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ position: 'relative' }} style={{ lineHeight: '1' }}>
        <CardContent>
          <Grid item xs={12} md={12} sx={{ flexDirection: 'row', display: 'flex' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 7 }}>
              <CustomAvatar skin='light' variant='rounded' sx={{ mr: 2, width: 30, height: 30 }}>
                <Icon icon='tabler:bucket' fontSize='1.2rem' />
              </CustomAvatar>
              <Box>
                <Typography variant='h5'>Storage Bucket</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={12}>
            <form>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={12}>
                  <CustomTextField
                    select
                    fullWidth
                    defaultValue='Storage1'
                    sx={{ display: 'flex', flexDirection: 'row' }}
                  >
                    <MenuItem
                      value='Storage1'
                      sx={{ display: 'flex', alignItems: 'center', gap: 2,}}
                    >
                      <Icon icon='tabler:database' fontSize='1.2rem' style={{ marginRight: 2 }} />
                      Storage 1 : 2 / 50 GB{' '}
                      {selectedStorage === 'Storage1' && (
                        <Typography
                          sx={{
                            color: '#28C76F',
                            backgroundColor: '#28C76F29',
                            width: '75px',
                            height: '24px',
                            borderRadius: '4px',
                            paddingY: '5px',
                            paddingX: '10px',
                            textAlign: 'center',
                            gap: '10px'
                          }}
                        >
                          Selected
                        </Typography>
                      )}
                    </MenuItem>
                    <MenuItem value='Storage2' sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Icon icon='tabler:database' fontSize='1.2rem' />
                      Storage 2 : 10 / 50 GB
                    </MenuItem>
                    <MenuItem value='Storage3' sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Icon icon='tabler:database' fontSize='1.2rem' />
                      Storage 3 : 5.3 / 50 GB
                    </MenuItem>
                    <MenuItem value='Storage4' sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Icon icon='tabler:database' fontSize='1.2rem' />
                      Storage 4 : 49 / 50 GB
                      {selectedStorage === 'Storage1' && (
                        <Typography
                          sx={{
                            color: '#FF9F43',
                            backgroundColor: '#FF9F4329',
                            width: '105px',
                            height: '24px',
                            borderRadius: '4px',
                            paddingY: '5px',
                            paddingX: '10px',
                            textAlign: 'center',
                            gap: '10px'
                          }}
                        >
                          Low Capacity
                        </Typography>
                      )}
                    </MenuItem>
                  </CustomTextField>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default InstantDetail
