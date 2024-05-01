// orderanalysis.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import Chart, { ChartType } from 'chart.js/auto';
import { IonHeader, IonThumbnail, IonCard, IonCardContent, IonCardTitle, IonImg, IonContent, IonButton, IonToolbar, IonButtons, IonBackButton, IonTitle, IonGrid, IonRow, IonCol, IonLabel, IonList, IonItem, IonIcon, IonCardSubtitle, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonProgressBar, IonBadge, IonSpinner, IonCardHeader } from "@ionic/angular/standalone";
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import * as Papa from 'papaparse';

@Component({
  standalone: true,
  imports: [IonCardHeader, IonSpinner, IonBadge, IonProgressBar, IonSegmentButton, IonSegment, IonCardSubtitle,
    IonHeader, IonContent,
    IonToolbar,
    IonCardContent,
    IonThumbnail,
    IonImg,
    IonCard,
    IonButton,
    IonCardTitle,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonRow,
    IonGrid,
    IonSelect,
    IonSelectOption,
    IonRow,
    IonIcon,
    IonCol,
    IonLabel,
    IonList,
    IonItem,
    CommonModule,
  ],
  selector: 'app-orderanalysis',
  templateUrl: './orderanalysis.component.html',
  styleUrls: ['./orderanalysis.component.scss'],
})
export class OrderAnalysisComponent implements OnInit {
  @Input() analysis: any;
  totalAmount: number = 0; // Declare totalAmount as a property
  selectedChartType: ChartType = 'bar'; // Default chart type

  ngOnInit(): void {
    // Calculate total amount based on the analysis data
    this.calculateTotalAmount();

    // Implement your charts here using the Chart.js library
    this.setupShoppingExpenditureChart();
    this.setupOrderStatusChart();
  }

  calculateTotalAmount() {
    if (this.analysis && this.analysis.orders) {
      // Assuming each order in the analysis data has a 'totalAmount' property
      this.totalAmount = this.analysis.orders.reduce(
        (total: number, order: { totalAmount: number }) =>
          total + (order.totalAmount || 0),
        0
      );
    }
  }

  setupShoppingExpenditureChart() {
    const ctx = document.getElementById('shoppingExpenditureChart') as HTMLCanvasElement;
    const shoppingExpenditureChart = new Chart(ctx, {
      type: this.selectedChartType,
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Shopping Expenditure',
          data: [0, 2000, 4000, 6000, 8000, 10000, 12000],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 12000,
            ticks: {
              stepSize: 2000,
            },
          },
        },
      },
    });
  }

  setupOrderStatusChart() {
    const ctx = document.getElementById('orderStatusChart') as HTMLCanvasElement;
    const orderStatusChart = new Chart(ctx, {
      type: this.selectedChartType,
      data: {
        labels: ['Pending', 'Confirmed', 'Delivering', 'Delivered', 'Declined'],
        datasets: [{
          label: 'Order Status',
          data: [0, 1, 2, 3, 4],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 6,
            ticks: {
              stepSize: 1,
            },
          },
        },
      },
    });
  }

  switchChartType(chartType: ChartType) {
    this.selectedChartType = chartType;
    this.setupShoppingExpenditureChart();
    this.setupOrderStatusChart();
  }

   downloadAnalysis(format: string) {
    const chartCanvas = format === 'pdf'
      ? document.getElementById('shoppingExpenditureChart') // Use the appropriate chart ID for PDF
      : document.getElementById('orderStatusChart'); // Use the appropriate chart ID for CSV

    if (!chartCanvas) {
      console.error('Chart canvas not found.');
      return;
    }

    if (format === 'pdf') {
      html2canvas(chartCanvas as HTMLElement).then(canvas => {
        // Generate PDF using the canvas
        const pdf = new (window as any).jsPDF();
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        pdf.save('analysis.pdf');
      });
    // } else if (format === 'csv') {
    //   // Generate CSV data
    //   const chartData = (chartCanvas as HTMLCanvasElement).toDataURL('image/png');
    //   const csvData = `data:image/png;base64,${Papa.unparse({ data: chartData })}`;
      
    //   // Save CSV
    //   saveAs(csvData, 'analysis.csv');
    } else {
      console.error('Invalid format. Supported formats: pdf, csv');
    }
  }
}
