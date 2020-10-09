import { AfterViewInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public dataSource = {
    datasets : [ {
        data: [],
        backgroundColor: [
                   '#F1C40F',
                   '#FF5733',
                   '#F08080',
                   '#5DADE2',
                   '#196F3D',
                   '#E74C3C',
                   '#FA8072',
    ]
    }],
    labels: []

};

  constructor(private http: HttpClient){ }

  ngAfterViewInit(): void {
    this.http.get(' http://localhost:3000/budget')
    .subscribe((res: any) => {
      for( var i = 0; i < res.mybudget.length; i++){
        this.dataSource.datasets[0].data[i] = res.mybudget[i].budget;
        this.dataSource.labels[i] = res.mybudget[i].title;
        this.createCharts();
      }
    });
  }
  createCharts(){

    var ctx = document.getElementById('myChart');
    var piechart = new Chart(ctx , {
        type: 'pie',
        data : this.dataSource
    });


}
}

