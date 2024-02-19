// ---- ทำ Instent Detail ----

import * as React from 'react'

// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import EcommerceProfit from 'src/views/dashboards/ecommerce/EcommerceProfit'
import EcommerceOrders from 'src/views/dashboards/ecommerce/EcommerceOrders'
import EcommerceExpenses from 'src/views/dashboards/ecommerce/EcommerceExpenses'
import EcommerceStatistics from 'src/views/dashboards/ecommerce/EcommerceStatistics'
import EcommerceInvoiceTable from 'src/views/dashboards/ecommerce/EcommerceInvoiceTable'
import EcommerceTransactions from 'src/views/dashboards/ecommerce/EcommerceTransactions'
import EcommerceRevenueReport from 'src/views/dashboards/ecommerce/EcommerceRevenueReport'
import EcommerceEarningReports from 'src/views/dashboards/ecommerce/EcommerceEarningReports'
import EcommerceGeneratedLeads from 'src/views/dashboards/ecommerce/EcommerceGeneratedLeads'
import EcommercePopularProducts from 'src/views/dashboards/ecommerce/EcommercePopularProducts'
import BasicInfo from 'src/views/dashboards/ecommerce/BasicInfo'
import Instancesdetail from 'src/views/dashboards/ecommerce/Instancesdetail'

// ** Custom Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { Tab, Tabs, Typography } from '@mui/material'
import { TabPanel } from '@mui/lab'
import { Box } from '@mui/system'
import PersonIcon from '@mui/icons-material/Person'
import FileIcon from '@mui/icons-material/InsertDriveFileOutlined'
import LockIcon from '@mui/icons-material/LockOutlined'
// import Icon from 'src/@core/components/icon'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple=tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function allyProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const EcommerceDashboard = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {/* add MyInstant detail : name */}
        <Grid item xs={12} md={12}>
          {/* don't change color in name instant yet */}
          <Typography variant='h4'>My Instances / Aroi Compute (#JU-03)</Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Instancesdetail />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box>
            <Tabs value={value} onChange={handleChange}>
              <Tab
                disableRipple
                icon={<PersonIcon />}
                iconPosition='start'
                label='Basic Information'
                {...allyProps(0)}
              />
              <Tab disableRipple icon={<FileIcon />} iconPosition='start' label='Files' {...allyProps(1)} />
              <Tab disableRipple icon={<PersonIcon />} iconPosition='start' label='Security' {...allyProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <BasicInfo />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            22
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            33
          </CustomTabPanel>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default EcommerceDashboard
