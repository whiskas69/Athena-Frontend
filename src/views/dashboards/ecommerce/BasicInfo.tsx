// ---- แก้ไขทำ Instant Detail ----

// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import CardActions from '@mui/material/CardActions'
import { SelectChangeEvent } from '@mui/material/Select'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import CustomTextField from 'src/@core/components/mui/text-field'

interface State {
  password: string
  showPassword: boolean
}

const InstantDetail = () => {
  // ** States
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false
  })
  const [language, setLanguage] = useState<string[]>([])

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

   // Handle Select
   const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[])
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
                    value={values.password}
                    id='form-layouts-basic-password'
                    onChange={handleChange('password')}
                    type={values.showPassword ? 'text' : 'password'}
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
                    defaultValue=''
                    id='form-layouts-tabs-multiple-select'
                    SelectProps={{
                      multiple: true,
                      value: language,
                      onChange: e => handleSelectChange(e as SelectChangeEvent<string[]>)
                    }}
                  >
                    <MenuItem value='English'>Storage 1 : 2 / 50 GB</MenuItem>
                    <MenuItem value='French'>Storage 2 : 10 / 50 GB</MenuItem>
                    <MenuItem value='Spanish'>Storage 3 : 5.3 / 50 GB</MenuItem>
                    <MenuItem value='Portuguese'>Storage 4 : 49 / 50 GB</MenuItem>
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
