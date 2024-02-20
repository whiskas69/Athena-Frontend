import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import InstancesIcon from './InstancesIcon';

const ActiveInstances = ({ props }: any) => {
  return (
    <Card>
      <CardHeader
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h1" gutterBottom style={{ marginRight: '8px' }}>
              {props}/5
            </Typography>
            <Typography variant="body1">Active Instances</Typography>
            <div style={{ marginLeft: 'auto' }}>
              <InstancesIcon />
            </div>
          </div>
        }
      />
    </Card>
  );
}

export default ActiveInstances;
