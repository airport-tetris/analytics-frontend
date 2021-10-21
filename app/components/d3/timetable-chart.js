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

  get xScale() {
    const firstDate = moment('Fri May 17 2019 00:00:00');
    const lastDate = moment('Fri May 17 2019 23:59:59');
    const width = this.width - this.margin.right - this.margin.left;
    return scaleTime()
      .range([0, width])
      .domain([moment(firstDate), moment(lastDate)]);
  }

  get yScale() {
    const height = this.height - this.margin.top - this.margin.bottom;
    const min = 0;
    const max = 280;
    return scaleLinear().range([height, 0]).domain([min, max]);
  }

  get chartData() {
    return this.args.data.map((value) => {
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
  initialRender() {
    const {
      svgId,
      margin,
      width,
      height,
      xScale,
      yScale,
    } = this;

    const svg = select(`svg#${svgId}`);
    svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .attr('class', 'margin-group');

    const gMarg = select(`svg#${svgId} .margin-group`);

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
        .attr('r', 3)
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

}
