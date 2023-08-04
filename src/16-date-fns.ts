import {subDays, format } from 'date-fns';

 // subday hace resta de una fecha

 const date = new Date(1998, 1, 28); // 0 = enero, 1=febrero
 const rta = subDays(date, 30);
 const str = format(rta, 'yyyy/MM/dd'); // Rev porque cambia mm y MM
 console.log(str);
