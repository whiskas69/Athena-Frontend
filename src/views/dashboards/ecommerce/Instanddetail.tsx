// ---- แก้ไขทำ Instant Detail ----

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Box, textAlign } from '@mui/system'
import { Grid } from '@mui/material'

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

const InstantDetail = () => {
  return (
    <Card sx={{ position: 'relative' }} style={{ lineHeight: '10' }}>
      <CardContent>
        {/* change text */}
        <Typography variant='h3' sx={{ mb: 0.5 }} style={{ textAlign: 'center' }}>
          Aroi Compute
        </Typography>

        {/* add tag */}
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Typography sx={{ textAlign: 'center', color: 'text.secondary' }}>Jupyter</Typography>
          {/* <Typography sx={{ textAlign: 'center', color: 'text.secondary' }}>Jupyter</Typography> */}
        </Box>

        <Grid spacing={7} container style={{ display: 'flex', justifyContent: 'center' }}>
          {renderStats()}
        </Grid>

        <Typography sx={{ mb: 2, color: 'text.secondary' }}>Best seller of the month</Typography>
        <Typography variant='h4' sx={{ mb: 0.75, color: 'primary.main' }}>
          $48.9k
        </Typography>
        <Button variant='contained'>View Sales</Button>
        {/* <Illustration width={116} alt='congratulations john' src='/images/cards/congratulations-john.png' /> */}
      </CardContent>
    </Card>
  )
}

export default InstantDetail
