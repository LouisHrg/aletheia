export const fakenewsChart = {
  chartOptions: {
    colors: ['#3fc380'],
    chart: {
      id: 'fakenews-chart',
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'Truthfulness',
      align: 'center',
      style: {
        fontSize: '17px',
        color: '#666',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#2574a9'],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#e7e7e7',
          strokeWidth: '97%',
          margin: 5,
          shadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 15,
            fontSize: '22px',
          },
        },
      },
    },
  },
  series: [0],
};
export const biasedChart = {
  chartOptions: {
    colors: ['#FF0000'],
    chart: {
      id: 'biased-chart',
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'Biased',
      align: 'center',
      style: {
        fontSize: '17px',
        color: '#666',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#f4d03f'],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#e7e7e7',
          strokeWidth: '97%',
          margin: 5,
          shadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 15,
            fontSize: '22px',
          },
        },
      },
    },
  },
  series: [0],
};
export const editionChart = {
  series: [
    {
      data: [0, 0, 0, 0, 0],
    }],
  chartOptions: {
    chart: {
      height: 350,
      type: 'bar',
      id: 'edition-chart',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: ['0-20', '20-40', '40-60', '60-80', '80-100'],
      labels: {
        style: {
          fontSize: '14px',
        },
      },
    },
  },
};
