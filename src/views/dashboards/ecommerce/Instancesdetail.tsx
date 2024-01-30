// ---- แก้ไขทำ Instant Detail ----

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Box, textAlign } from '@mui/system'
import { Grid } from '@mui/material'
import Divider from '@mui/material/Divider';

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
    <Grid item xs={6} md={3} key={index}>
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
    <Typography key={index} sx={{ mr: 6, color: 'text.secondary', border: "1px solid none", backgroundColor: "#A8AAAE29", borderRadius: '4px', paddingBlock: '5px', paddingInline: '10px'}}>
      {sale.tag}
    </Typography>
  ))
}

// const renderDetail = () => {
//   return dataDetail.map((sale: DataDetail, index: number))
// }
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

        <Grid spacing={7} container sx={{ mb: 5 }} style={{ display: 'flex', justifyContent: 'center' }}>
          {renderStats()}
        </Grid>
        
        <Divider sx={{ mb: 5 }}/>

        <Typography variant='subtitle1' style={{ color: '#8692D0' }}>DETAILS</Typography>
        {/* <Typography sx={{ mb: 2, color: 'text.secondary' }}>Best seller of the month</Typography>
        <Typography variant='h4' sx={{ mb: 0.75, color: 'primary.main' }}>
          $48.9k
        </Typography>
        <Button variant='contained'>View Sales</Button> */}
        {/* <Illustration width={116} alt='congratulations john' src='/images/cards/congratulations-john.png' /> */}
      </CardContent>
    </Card>
  )
}

export default InstantDetail
