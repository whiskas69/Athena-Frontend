// ---- แก้ไขทำ Instant Detail ----

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Box, textAlign } from '@mui/system'
import { Grid } from '@mui/material'
import Divider from '@mui/material/Divider'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

interface DataType {
  icon: string
  stats: string
  title: string
  color: ThemeColor
}

interface DataTag {
  tag: string
}

interface DataDetail {
  id: string
  author: string
  createdAt: string
  expiredAt: string
  size: string
  type: string
  server: string
  location: string
}

const data: DataType[] = [
  {
    color: 'success',
    stats: 'Running',
    title: 'Normal',
    icon: 'tabler:circle-half-2'
  },
  {
    color: 'primary',
    stats: '1',
    title: 'Day Left',
    icon: 'tabler:clock'
  }
]

const dataTag: DataTag[] = [
  {
    tag: 'Jupyter'
  },
  {
    tag: 'AI'
  }
]

const dataDetail: DataDetail[] = [
  {
    id: 'JU-03',
    author: '63070126@it.kmitl.ac.th (ME)',
    createdAt: '23 April 2023',
    expiredAt: '24 April 2023',
    size: 'Nano',
    type: 'Jupyter Notebook',
    server: 'DGX-A100',
    location: 'Faculty of IT, KMITL'
  }
]

const renderStats = () => {
  return data.map((sale: DataType, index: number) => (
    <Grid
      item
      xs={5}
      md={4}
      key={index}
      sx={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar skin='light' variant='rounded' color={sale.color} sx={{ mr: 2, width: 42, height: 42 }}>
          <Icon icon={sale.icon} fontSize='1.5rem' />
        </CustomAvatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h5'>{sale.stats}</Typography>
          <Typography variant='body2'>{sale.title}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const renderTag = () => {
  return dataTag.map((sale: DataTag, index: number) => (
    <Typography
      key={index}
      sx={{
        mr: 2,
        color: 'text.secondary',
        border: '1px solid none',
        backgroundColor: '#A8AAAE29',
        borderRadius: '4px',
        paddingBlock: '5px',
        paddingInline: '10px'
      }}
    >
      {sale.tag}
    </Typography>
  ))
}

const renderDetail = () => {
  return dataDetail.map((data: DataDetail, index: number) => (
    <Grid>
      <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
        <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>ID: </Typography>
        <Typography sx={{ ml: 2, mb: 2, fontWeight: 600, fontSize: '15px' }}>{data.id}</Typography>
      </Grid>
      <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
        <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>Author: </Typography>
        <Typography sx={{ ml: 2, mb: 2, fontSize: '15px' }}>{data.author}</Typography>
      </Grid>
      <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
        <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>Created At: </Typography>
        <Typography sx={{ ml: 2, mb: 2, fontSize: '15px' }}>{data.createdAt}</Typography>
      </Grid>
      <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
        <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>Expired At: </Typography>
        <Typography sx={{ ml: 2, mb: 2, fontSize: '15px', color: '#FF9F43' }}>{data.expiredAt}</Typography>
      </Grid>
      <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
        <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>Size: </Typography>
        <Typography sx={{ ml: 2, mb: 2, fontSize: '15px' }}>{data.size}</Typography>
      </Grid>
      <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
        <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>Type: </Typography>
        <Typography sx={{ ml: 2, mb: 2, fontSize: '15px' }}>{data.type}</Typography>
      </Grid>
      <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
        <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>Server: </Typography>
        <Typography sx={{ ml: 2, mb: 2, fontSize: '15px' }}>{data.server}</Typography>
      </Grid>
      <Grid spacing={5} container sx={{ ml: 0.08, mb: 5, display: 'flex', flexDirection: 'row' }}>
        <Typography sx={{ mb: 2, fontWeight: 600, fontSize: '15px' }}>Location: </Typography>
        <Typography sx={{ ml: 2, mb: 2, fontSize: '15px' }}>{data.location}</Typography>
      </Grid>
    </Grid>
  ))
}

const InstantDetail = () => {
  return (
    <Card sx={{ position: 'relative' }} style={{ lineHeight: '10' }}>
      <CardContent>
        {/* change text */}
        <Typography variant='h3' sx={{ mb: 4 }} style={{ textAlign: 'center' }}>
          Aroi Compute
        </Typography>

        {/* add tag */}
        <Box sx={{ mb: 5, flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {renderTag()}
        </Box>

        <Grid spacing={2} container sx={{ mb: 5 }} style={{ display: 'flex', justifyContent: 'center' }}>
          {renderStats()}
        </Grid>

        <Divider sx={{ mb: 5 }} />

        <Typography variant='subtitle1' sx={{ mb: 7 }} style={{ color: '#8692D0' }}>
          DETAILS
        </Typography>

        <Grid>{renderDetail()}</Grid>

        <Divider sx={{ mb: 5 }} />

        <Grid container xs={12} md={12} spacing={1} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type='submit'
            variant='contained'
            sx={{
              mr: 2,
              mb: 2,
              width: '45%',
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

          <Button
            type='submit'
            variant='contained'
            sx={{
              mb: 2,
              width: '45%',
              backgroundColor: '#FF9F4329',
              color: '#FF9F43',
              '&:hover': {
                backgroundColor: '#FF9F4329',
                color: '#FFFFFF'
              }
            }}
          >
            Restart
          </Button>
          <Button
            type='submit'
            variant='contained'
            sx={{
              mr: 2,
              mb: 2,
              width: '45%',
              backgroundColor: '#EA545529',
              color: '#EA5455',
              '&:hover': {
                backgroundColor: '#EA545529',
                color: '#FFFFFF'
              }
            }}
          >
            Stop
          </Button>

          <Button
            type='submit'
            variant='contained'
            color='error'
            sx={{
              mb: 2,
              width: '45%'
            }}
          >
            Delete
          </Button>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default InstantDetail
