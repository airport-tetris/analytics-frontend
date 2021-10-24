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

export default class D3StandsOptimalPricesComponent extends Component {
  constructor() {
    super(...arguments);
    this.svgId = `d3-stand-optimal-prices-${Math.floor(Math.random() * 10000)}`;
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

  get minX() {
    // const option = this.args.chartOptions.minX;
    // const momentObj = moment(option);
    return 1;
  }

  get maxX() {
    // const option = this.args.chartOptions.maxX;
    // const momentObj = moment(option);
    const data = this.args.data;
    return data ? data.length : 100;
  }

  get minY() {
    // const option = this.args.chartOptions.minY;
    // if (option === '' || Number.isNaN(Number(option))) {
    //   const data = this.chartData.map((val) => { return val.y });
    //   return min(data);
    // } else {
    //   return Number(option);
    // }
    return 0;
  }

  get maxY() {
    // const option = this.args.chartOptions.maxY;
    // if (option === '' || Number.isNaN(Number(option))) {
    //   const data = this.chartData.map((val) => { return val.y });
    //   return max(data);
    // } else {
    //   return Number(option);
    // }
    return 2;
  }

  get xScale() {
    const width = this.width - this.margin.right - this.margin.left;
    return scaleLinear().range([0, width]).domain([this.minX, this.maxX]);
  }

  get yScale() {
    const height = this.height - this.margin.top - this.margin.bottom;
    return scaleLinear().range([height, 0]).domain([this.minY, this.maxY]);
  }

  get chartData() {
    const data = this.args.data || [];
    return data.map((value, i) => {
      // const time = moment(value.time);
      let result = {
        x: i + 1,
        y: value.timeline,
      };
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

    let xAxis = axisBottom(xScale).ticks(10).tickSize(4, 1);
    let yAxis = axisLeft(yScale).ticks(10).tickSize(4, 1);

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

    this.chartData.forEach((value) => {
      gMarg
        .append('rect')
        .attr('x', () => xScale(value.x))
        .attr('y', () => yScale(value.y.diffFromOpt))
        .attr('width', () => 3)
        .attr('height', () => height - margin.top - margin.bottom - yScale(value.y.diffFromOpt))
        .attr('class', `bar-stand-utilisation`);
    });
    gMarg
      .append('line')
      .attr('x1', () => xScale(1))
      .attr('y1', () => yScale(1))
      .attr('x2', () => xScale(this.chartData.length))
      .attr('y2', () => yScale(1))
      .attr('class', `bar-stand-maximum`);

  }

  @action
  initialRender() {
    this.update();
  }
}
