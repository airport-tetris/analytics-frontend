import { action } from '@ember/object';
import Component from '@glimmer/component';
import {
  scaleLinear,
  axisBottom,
  select,
  scaleTime,
  line,
  format,
  axisLeft,
  min,
  max,
} from 'd3';
import moment from 'moment';

export default class D3TimetableChartComponent extends Component {
  constructor() {
    super(...arguments);
    this.svgId = `d3-timetable-chart-${Math.floor(Math.random() * 10000)}`;
  }

  get aspectRatio() {
    return this.args.aspectRatio || 0.5;
  }

  get width() {
    const argWidth = Number(this.args.width);
    return isNaN(argWidth) ? 150 : argWidth;
  }

  get height() {
    return this.width * this.aspectRatio;
  }

  margin = {
    top: 15,
    right: 15,
    bottom: 40,
    left: 25,
  };

  // get minY() {
  //   const data = this.chartData.map((val) => { return val.y });
  //   return this.args.chartOptions.minX || min(data);
  // }
  get minX() {
    const option = this.args.chartOptions.minX;
    const momentObj = moment(option);
    return momentObj.isValid() ? momentObj : moment('2019-05-17 00:00:00',"YYYY-MM-DD hh:mm:ss");
  }

  get maxX() {
    const option = this.args.chartOptions.maxX;
    const momentObj = moment(option);
    return momentObj.isValid() ? momentObj : moment('2019-05-17 23:59:59', "YYYY-MM-DD hh:mm:ss");
  }

  get minY() {
    const option = this.args.chartOptions.minY;
    if (option === '' || Number.isNaN(Number(option))) {
      const data = this.chartData.map((val) => { return val.y });
      return min(data);
    } else {
      return Number(option);
    }
  }

  get maxY() {
    const option = this.args.chartOptions.maxY;
    if (option === '' || Number.isNaN(Number(option))) {
      const data = this.chartData.map((val) => { return val.y });
      return max(data);
    } else {
      return Number(option);
    }
  }

  get xScale() {
    const width = this.width - this.margin.right - this.margin.left;
    return scaleTime().range([0, width]).domain([this.minX, this.maxX]);
  }

  get yScale() {
    const height = this.height - this.margin.top - this.margin.bottom;
    return scaleLinear().range([height, 0]).domain([this.minY, this.maxY]);
  }

  get chartData() {
    const data = this.args.data || [];
    return data.map((value) => {
      // const time = moment(value.time);
      let result = {};
      // let result = value.isArrival
      //   ? {
      //     start: time,
      //     end: time.clone().add(1, 'hours'),
      //   }
      //   : {
      //     start: time.clone().subtract(1, 'hours'),
      //     end: time,
      //   };
      result['start'] = moment(value.start);
      result['end'] = moment(value.end);
      result['dot'] = moment(value.time);
      // result['y'] = Number(value.id);
      result['y'] = Number(value.standId);
      result['terminal'] = value.terminalId;
      return result;
    });
  }

  @action
  update() {
    const {
      svgId,
      margin,
      width,
      height,
      xScale,
      yScale,
    } = this;

    // const gMarg = select(`svg#${svgId} .margin-group`);
    // gMarg.remove();
    // gMarg.selectAll('line').remove();
    // gMarg.selectAll('circle').remove();

    const svg = select(`svg#${svgId}`);

    svg.select('.margin-group').remove();
    svg.select('#axis--x').remove();
    svg.select('#axis--y').remove();

    const gMarg = svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .attr('class', 'margin-group');

    let xAxis = axisBottom(xScale).ticks(6).tickSize(4, 1);

    let yAxis = axisLeft(yScale).ticks(5).tickSize(4, 1);

    svg
      .append('g')
      .attr(
        'transform',
        'translate(' + margin.left + ',' + (height - margin.bottom) + ')'
      )
      .attr('class', 'x axis')
      .attr('id', 'axis--x')
      .call(xAxis);

    svg
      .append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .attr('id', 'axis--y')
      .call(yAxis);

    this.chartData.forEach((timeline) => {
      gMarg
        .append('line')
        .attr('x1', () => xScale(timeline.start))
        .attr('y1', () => yScale(timeline.y))
        .attr('x2', () => xScale(timeline.end))
        .attr('y2', () => yScale(timeline.y))
        .attr('class', `time-line-element-${timeline.terminal}`);

      gMarg
        .append('circle')
        .attr('cx', () => xScale(timeline.dot))
        .attr('cy', () => yScale(timeline.y))
        .attr('r', 2)
        .attr('class', `time-line-dot-${timeline.terminal}`);

      // gMarg
      //   .append('text')
      //   .attr('class', 'line-text')
      //   .attr('x', 0)
      //   .attr('y', () => yScale(th.value))
      //   .attr('dx', 10)
      //   .attr('dy', -5)
      //   .attr('class', th.type)
      //   .text(format('.0f')(th.value));
    });

  }

  @action
  initialRender() {
    this.update();
  }
}
