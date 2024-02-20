import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import StorageIcon from './StorageIcon';

const StorageUsed = () => {
  return (
    <Card>
      <CardHeader
        title={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Typography variant="h4" gutterBottom>
                2 GB / 50 GB
              </Typography>
              <Typography>Storage Used</Typography>
            </div>
            <div>
              <StorageIcon />
            </div>
          </div>
        }
      />
    </Card>
  );
}

export default StorageUsed;
