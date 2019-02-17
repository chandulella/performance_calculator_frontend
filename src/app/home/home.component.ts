import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserBaseService } from "../services/user-base.service";
declare var jQuery: any;
declare var google: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  public cpuUsage = [];
  public count = 1;
  public sendmail = 0;
  constructor(
    public fb: FormBuilder,
    public userBaseService: UserBaseService
  ) {}

  ngOnInit() {
    for (let i = 0; i < 61; i++) {
      this.cpuUsage.push([i, 0]);
    }
    setInterval(() => {
      this.userBaseService.getCpuUsage(this.sendmail > 10 ?1:0).subscribe(res => {
        if (res) {
          if (this.cpuUsage.length >= 61) {
            this.cpuUsage.shift();
          }
          this.cpuUsage.push([++this.count, res.cpuUsage]);
          if(res.cpuUsage>=50){
              this.sendmail++
          }else{
              this.sendmail= 0
          }
          for (let i = 0; i < this.cpuUsage.length; i++) {
            this.cpuUsage[i][0] = i;
          }
          this.drawChart();
        } else {
          clearInterval();
        }
      });
    }, 1000);
    //  this.drawChart()
  }
  ngAfterViewInit() {
    google.charts.load("current", { packages: ["corechart", "line"] });
    google.charts.setOnLoadCallback(() => {
      this.drawChart();
    });
  }
  // this.google.charts.load('current', {packages: ['corechart', 'line']});
  // google.charts.setOnLoadCallback(drawBasic);
  drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn("number", "X");
    data.addColumn("number", "cpu");
    data.addRows(this.cpuUsage);
    var options = {
      hAxis: {
        title: "seconds"
      },
      vAxis: {
        title: "cpu %",
        viewWindow: {
          min: 0,
          max: 100
        }
      }
    };

    var chart = new google.visualization.LineChart(
      document.getElementById("chart_div")
    );
    chart.draw(data, options);
  }
}
