import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { height } from "@mui/system";
import Chart from "react-apexcharts";
export function Dashboardadmin() {
    return ( 
      <div className='flex w-full'>
        <Card sx={{flex:'0 0 40%' }} >
            <CardContent>
        <Chart
        options={ { 
          
        chart: {
          id: "basic-bar",
            toolbar: {
        show: false,  // ✅ aquí
      },
          
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      }}

       width="500"
        type="bar"
        series={[
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]}
       
        />
        </CardContent>

</Card >
 <Card  sx={{flex:'1 1 100%'}}>
    <CardContent>
         <Chart
          height={300}
           width="800"
        options={ { 
          
        chart: {
          id: "basic-bar",
            toolbar: {
        show: false,  // ✅ aquí
      },
          
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      }}

     
        type="line"
        series={[
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]}
      
        />
        </CardContent>
        </Card >
      </div>
     );
}

