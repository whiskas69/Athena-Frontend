import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CreditsIcon from './CreditsIcon'



const Credits = () => {
  return (
    <Card>
      <CardHeader
        title={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Typography variant="h4" gutterBottom>
                500
              </Typography>
              <Typography>Available Credits</Typography>
            </div>
            <div>
              <CreditsIcon />
            </div>
          </div>
        }
      />
    </Card>
  )
}

export default Credits
