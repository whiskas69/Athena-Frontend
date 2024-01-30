// ---- ทำ Instent Detail ----

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
import EcommerceCongratulationsJohn from 'src/views/dashboards/ecommerce/EcommerceCongratulationsJohn'
import Instanddetail from 'src/views/dashboards/ecommerce/Instanddetail'

// ** Custom Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { Typography } from '@mui/material'

const EcommerceDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {/* add MyInstant detail : name */}
        <Grid item xs={12} md={12}>
          {/* don't change color in name instant yet */}
          <Typography variant='h4'>My Instances / Aroi Compute (#JU-03)</Typography>
        </Grid>

        <Grid item xs={12} md={5}>
          <Instanddetail/>
        </Grid>
        <Grid item xs={12} md={5}>
          <EcommerceCongratulationsJohn />
        </Grid>
        <Grid item xs={12} md={7}>
          <EcommerceStatistics />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6} md={3} lg={6}>
              <EcommerceExpenses />
            </Grid>
            <Grid item xs={6} md={3} lg={6}>
              <EcommerceProfit />
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <EcommerceGeneratedLeads />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <EcommerceRevenueReport />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EcommerceEarningReports />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EcommercePopularProducts />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EcommerceOrders />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EcommerceTransactions />
        </Grid>
        <Grid item xs={12} lg={8}>
          <EcommerceInvoiceTable />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default EcommerceDashboard
