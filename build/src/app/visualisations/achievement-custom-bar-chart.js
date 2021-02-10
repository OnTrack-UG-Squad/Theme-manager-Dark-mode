angular.module('doubtfire.visualisations.achievement-custom-bar-chart', []).directive('achievementCustomBarChart', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'visualisations/visualisation.tpl.html',
    scope: {
      project: '=',
      unit: '='
    },
    controller: ["$scope", "Visualisation", "outcomeService", "gradeService", function($scope, Visualisation, outcomeService, gradeService) {
      var achievementData, currentProgress, max, ref, targets;
      $scope.showLegend = $scope.showLegend != null ? $scope.showLegend : true;
      if (nv.models.achievementBar == null) {
        nv.models.achievementBar = function() {
          var chart, color, container, dispatch, duration, forceY, getX, getY, height, id, margin, rectClass, renderWatch, showValues, valueFormat, width, x, x0, xDomain, xRange, y, y0, yDomain, yRange;
          chart = function(selection) {
            renderWatch.reset();
            selection.each(function(data) {
              var availableHeight, availableWidth, backBarSeries, backBars, backBarsEnter, bars, barsEnter, container, g, gEnter, groups, seriesData, wrap, wrapEnter, x0, y0;
              availableWidth = width - margin.left - margin.right;
              availableHeight = height - margin.top - margin.bottom;
              container = d3.select(this);
              nv.utils.initSVG(container);
              data.forEach(function(series, i) {
                series.values.forEach(function(point) {
                  point.series = i;
                });
              });
              seriesData = xDomain && yDomain ? [] : data.map((function(d) {
                return d.values.map((function(d, i) {
                  return {
                    x: getX(d, i),
                    y: getY(d, i),
                    y0: d.y0
                  };
                }));
              }));
              x.domain(xDomain || d3.merge(seriesData).map(function(d) {
                return d.x;
              })).rangeBands(xRange || [0, availableWidth], .1);
              y.domain(yDomain || d3.extent(d3.merge(seriesData).map(function(d) {
                return d.y;
              }).concat(forceY)));
              if (showValues) {
                y.range(yRange || [availableHeight - (y.domain()[0] < 0 ? 12 : 0), y.domain()[1] > 0 ? 12 : 0]);
              } else {
                y.range(yRange || [availableHeight, 0]);
              }
              x0 = x0 || x;
              y0 = y0 || y.copy().range([y(0), y(0)]);
              wrap = container.selectAll('g.nv-wrap.nv-discretebar').data([data]);
              wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-discretebar');
              gEnter = wrapEnter.append('g');
              g = wrap.select('g');
              gEnter.append('g').attr('class', 'nv-groups');
              wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
              groups = wrap.select('.nv-groups').selectAll('.nv-group').data((function(d) {
                return d;
              }), function(d) {
                return d.key;
              });
              groups.enter().append('g').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6);
              groups.exit().watchTransition(renderWatch, 'discreteBar: exit groups').style('stroke-opacity', 1e-6).style('fill-opacity', 1e-6).remove();
              groups.attr('class', function(d, i) {
                return 'nv-group nv-series-' + i;
              });
              groups.watchTransition(renderWatch, 'discreteBar: groups').style('stroke-opacity', 1).style('fill-opacity', .75);
              if ((typeof targets !== "undefined" && targets !== null) && _.size(targets) > 0) {
                backBarSeries = groups.selectAll('g.nv-backBarSeries').data(function(d) {
                  return d.values;
                });
                backBarSeries.exit().remove();
                backBarSeries.enter().append('g').attr('transform', function(d, i) {
                  return 'translate(' + x(getX(d, i)) + x.rangeBand() * .05 + ', ' + y(0) + ')';
                });
                backBarSeries.attr('class', function(d, i) {
                  return 'nv-backBarSeries nv-backSeries-' + i;
                }).classed('hover', function(d) {
                  return d.hover;
                });
                backBars = backBarSeries.selectAll('g.nv-backBar').data(function(d, i) {
                  return _.map(_.values(d.targets), function(v) {
                    return {
                      value: v,
                      key: d.label
                    };
                  });
                });
                backBars.exit().remove();
                backBarsEnter = backBars.enter().append('g');
                backBarsEnter.append('rect').attr('height', 10).attr('width', x.rangeBand() * .9 / data.length);
                backBarsEnter.on('mouseover', function(d, i) {
                  d3.select(this).classed('hover', true);
                  dispatch.elementMouseover({
                    data: gradeService.grades[i],
                    index: i,
                    color: d.value.color
                  });
                }).on('mouseout', function(d, i) {
                  d3.select(this).classed('hover', false);
                  dispatch.elementMouseout({
                    data: gradeService.grades[i],
                    index: i,
                    color: d.value.color
                  });
                }).on('mousemove', function(d, i) {
                  dispatch.elementMousemove({
                    data: gradeService.grades[i],
                    index: i,
                    color: d.value.color
                  });
                }).on('click', function(d, i) {
                  var element;
                  element = this;
                  dispatch.elementClick({
                    data: gradeService.grades[i],
                    index: i,
                    color: d.value.color,
                    event: d3.event,
                    element: element
                  });
                  d3.event.stopPropagation();
                }).on('dblclick', function(d, i) {
                  dispatch.elementDblClick({
                    data: gradeService.grades[i],
                    index: i,
                    color: d.value.color
                  });
                  d3.event.stopPropagation();
                });
                backBars.attr('class', function(d, i, j) {
                  if (d.value.height < 0) {
                    return 'nv-backBar negative';
                  } else {
                    return 'nv-backBar positive';
                  }
                }).select('rect').attr('class', rectClass).style('fill-opacity', '0.2').style('fill', function(d) {
                  return d.value.color;
                }).watchTransition(renderWatch, 'discreteBar: backBars rect').attr('width', x.rangeBand() * .9 / data.length);
                backBars.watchTransition(renderWatch, 'discreteBar: backBars').attr('transform', function(d, i, j) {
                  var left, top;
                  left = x(d.key) + x.rangeBand() * .05;
                  top = y(d.value.height + d.value.offset);
                  return 'translate(' + left + ', ' + top + ')';
                }).select('rect').attr('height', function(d, i, j) {
                  return Math.max(Math.abs(y(d.value.height) - y(0)), 1);
                });
              }
              bars = groups.selectAll('g.nv-bar').data(function(d) {
                return d.values;
              });
              bars.exit().remove();
              barsEnter = bars.enter().append('g').attr('transform', function(d, i, j) {
                return 'translate(' + x(getX(d, i)) + x.rangeBand() * .25 + ', ' + y(0) + ')';
              }).on('mouseover', function(d, i) {
                d3.select(this).classed('hover', true);
                dispatch.elementMouseover({
                  data: d,
                  index: i,
                  color: d3.select(this).style('fill')
                });
              }).on('mouseout', function(d, i) {
                d3.select(this).classed('hover', false);
                dispatch.elementMouseout({
                  data: d,
                  index: i,
                  color: d3.select(this).style('fill')
                });
              }).on('mousemove', function(d, i) {
                dispatch.elementMousemove({
                  data: d,
                  index: i,
                  color: d3.select(this).style('fill')
                });
              }).on('click', function(d, i) {
                var element;
                element = this;
                dispatch.elementClick({
                  data: d,
                  index: i,
                  color: d3.select(this).style('fill'),
                  event: d3.event,
                  element: element
                });
                d3.event.stopPropagation();
              }).on('dblclick', function(d, i) {
                dispatch.elementDblClick({
                  data: d,
                  index: i,
                  color: d3.select(this).style('fill')
                });
                d3.event.stopPropagation();
              });
              barsEnter.append('rect').attr('height', 0).attr('width', x.rangeBand() * .5 / data.length);
              if (showValues) {
                barsEnter.append('text').attr('text-anchor', 'middle');
                bars.select('text').text(function(d, i) {
                  return valueFormat(getY(d, i));
                }).watchTransition(renderWatch, 'discreteBar: bars text').attr('x', x.rangeBand() * .5 / 2).attr('y', function(d, i) {
                  if (getY(d, i) < 0) {
                    return y(getY(d, i)) - y(0) + 12;
                  } else {
                    return -4;
                  }
                });
              } else {
                bars.selectAll('text').remove();
              }
              bars.attr('class', function(d, i) {
                if (getY(d, i) < 0) {
                  return 'nv-bar negative';
                } else {
                  return 'nv-bar positive';
                }
              }).style('fill', function(d, i) {
                return d.color || color(d, i);
              }).style('stroke', function(d, i) {
                return d.color || color(d, i);
              }).select('rect').attr('class', rectClass).watchTransition(renderWatch, 'discreteBar: bars rect').attr('width', x.rangeBand() * .5 / data.length);
              bars.watchTransition(renderWatch, 'discreteBar: bars').attr('transform', function(d, i) {
                var left, top;
                left = x(getX(d, i)) + x.rangeBand() * .25;
                top = getY(d, i) < 0 ? y(0) : y(0) - y(getY(d, i)) < 1 ? y(0) - 1 : y(getY(d, i));
                return 'translate(' + left + ', ' + top + ')';
              }).select('rect').attr('height', function(d, i) {
                return Math.max(Math.abs(y(getY(d, i)) - y(0)), 1);
              });
              x0 = x.copy();
              y0 = y.copy();
            });
            renderWatch.renderEnd('achievementBar immediate');
            return chart;
          };
          'use strict';
          margin = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          };
          width = 960;
          height = 500;
          id = Math.floor(Math.random() * 10000);
          container = void 0;
          x = d3.scale.ordinal();
          y = d3.scale.linear();
          getX = function(d) {
            return d.x;
          };
          getY = function(d) {
            return d.y;
          };
          forceY = [0];
          color = nv.utils.defaultColor();
          showValues = false;
          valueFormat = d3.format(',.2f');
          xDomain = void 0;
          yDomain = void 0;
          xRange = void 0;
          yRange = void 0;
          dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout', 'elementMousemove', 'renderEnd');
          rectClass = 'discreteBar';
          duration = 250;
          x0 = void 0;
          y0 = void 0;
          renderWatch = nv.utils.renderWatch(dispatch, duration);
          chart.dispatch = dispatch;
          chart.options = nv.utils.optionsFunc.bind(chart);
          chart._options = Object.create({}, {
            width: {
              get: function() {
                return width;
              },
              set: function(_) {
                width = _;
              }
            },
            height: {
              get: function() {
                return height;
              },
              set: function(_) {
                height = _;
              }
            },
            forceY: {
              get: function() {
                return forceY;
              },
              set: function(_) {
                forceY = _;
              }
            },
            showValues: {
              get: function() {
                return showValues;
              },
              set: function(_) {
                showValues = _;
              }
            },
            x: {
              get: function() {
                return getX;
              },
              set: function(_) {
                getX = _;
              }
            },
            y: {
              get: function() {
                return getY;
              },
              set: function(_) {
                getY = _;
              }
            },
            xScale: {
              get: function() {
                return x;
              },
              set: function(_) {
                x = _;
              }
            },
            yScale: {
              get: function() {
                return y;
              },
              set: function(_) {
                y = _;
              }
            },
            xDomain: {
              get: function() {
                return xDomain;
              },
              set: function(_) {
                xDomain = _;
              }
            },
            yDomain: {
              get: function() {
                return yDomain;
              },
              set: function(_) {
                yDomain = _;
              }
            },
            xRange: {
              get: function() {
                return xRange;
              },
              set: function(_) {
                xRange = _;
              }
            },
            yRange: {
              get: function() {
                return yRange;
              },
              set: function(_) {
                yRange = _;
              }
            },
            valueFormat: {
              get: function() {
                return valueFormat;
              },
              set: function(_) {
                valueFormat = _;
              }
            },
            id: {
              get: function() {
                return id;
              },
              set: function(_) {
                id = _;
              }
            },
            rectClass: {
              get: function() {
                return rectClass;
              },
              set: function(_) {
                rectClass = _;
              }
            },
            margin: {
              get: function() {
                return margin;
              },
              set: function(_) {
                margin.top = _.top !== void 0 ? _.top : margin.top;
                margin.right = _.right !== void 0 ? _.right : margin.right;
                margin.bottom = _.bottom !== void 0 ? _.bottom : margin.bottom;
                margin.left = _.left !== void 0 ? _.left : margin.left;
              }
            },
            color: {
              get: function() {
                return color;
              },
              set: function(_) {
                color = nv.utils.getColor(_);
              }
            },
            duration: {
              get: function() {
                return duration;
              },
              set: function(_) {
                duration = _;
                renderWatch.reset(duration);
              }
            }
          });
          nv.utils.initOptions(chart);
          return chart;
        };
        nv.models.achievementBarChart = function() {
          var achievementbar, chart, color, dispatch, duration, height, legend, margin, noData, renderWatch, rightAlignYAxis, rotateLabels, showLegend, showXAxis, showYAxis, staggerLabels, tooltip, width, wrapLabels, x, xAxis, y, yAxis;
          chart = function(selection) {
            renderWatch.reset();
            renderWatch.models(achievementbar);
            if (showXAxis) {
              renderWatch.models(xAxis);
            }
            if (showYAxis) {
              renderWatch.models(yAxis);
            }
            selection.each(function(data) {
              var availableHeight, availableWidth, barsWrap, container, defsEnter, g, gEnter, that, wrap, x, xTicks, y;
              container = d3.select(this);
              that = this;
              nv.utils.initSVG(container);
              availableWidth = nv.utils.availableWidth(width, container, margin);
              availableHeight = nv.utils.availableHeight(height, container, margin);
              chart.update = function() {
                dispatch.beforeUpdate();
                container.transition().duration(duration).call(chart);
              };
              chart.container = this;
              if ((!data) || (!data.length) || data.filter((function(d) {
                return d.values.length;
              })).length <= 0) {
                nv.utils.noData(chart, container);
                return chart;
              } else {
                container.selectAll('.nv-noData').remove();
              }
              x = achievementbar.xScale();
              y = achievementbar.yScale().clamp(true);
              wrap = container.selectAll('g.nv-wrap.nv-discreteBarWithAxes').data([data]);
              gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-discreteBarWithAxes').append('g');
              defsEnter = gEnter.append('defs');
              g = wrap.select('g');
              gEnter.append('g').attr('class', 'nv-x nv-axis');
              gEnter.append('g').attr('class', 'nv-y nv-axis').append('g').attr('class', 'nv-zeroLine').append('line');
              gEnter.append('g').attr('class', 'nv-barsWrap');
              gEnter.append('g').attr('class', 'nv-legendWrap');
              g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
              if (showLegend) {
                legend.width(availableWidth);
                g.select('.nv-legendWrap').datum(data).call(legend);
                if (margin.top !== legend.height()) {
                  margin.top = legend.height();
                  availableHeight = nv.utils.availableHeight(height, container, margin);
                }
                wrap.select('.nv-legendWrap').attr('transform', 'translate(0,' + -margin.top + ')');
              }
              if (rightAlignYAxis) {
                g.select('.nv-y.nv-axis').attr('transform', 'translate(' + availableWidth + ',0)');
              }
              if (rightAlignYAxis) {
                g.select('.nv-y.nv-axis').attr('transform', 'translate(' + availableWidth + ',0)');
              }
              achievementbar.width(availableWidth).height(availableHeight);
              barsWrap = g.select('.nv-barsWrap').datum(data.filter(function(d) {
                return !d.disabled;
              }));
              barsWrap.transition().call(achievementbar);
              defsEnter.append('clipPath').attr('id', 'nv-x-label-clip-' + achievementbar.id()).append('rect');
              g.select('#nv-x-label-clip-' + achievementbar.id() + ' rect').attr('width', x.rangeBand() * (staggerLabels ? 2 : 1)).attr('height', 16).attr('x', -x.rangeBand() / (staggerLabels ? 1 : 2));
              if (showXAxis) {
                xAxis.scale(x)._ticks(nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight, 0);
                g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + (y.range()[0] + (achievementbar.showValues() && y.domain()[0] < 0 ? 16 : 0)) + ')');
                g.select('.nv-x.nv-axis').call(xAxis);
                xTicks = g.select('.nv-x.nv-axis').selectAll('g');
                if (staggerLabels) {
                  xTicks.selectAll('text').attr('transform', function(d, i, j) {
                    return 'translate(0,' + (j % 2 === 0 ? '5' : '17') + ')';
                  });
                }
                if (rotateLabels) {
                  xTicks.selectAll('.tick text').attr('transform', 'rotate(' + rotateLabels + ' 0,0)').style('text-anchor', rotateLabels > 0 ? 'start' : 'end');
                }
                if (wrapLabels) {
                  g.selectAll('.tick text').call(nv.utils.wrapTicks, chart.xAxis.rangeBand());
                }
              }
              if (showYAxis) {
                yAxis.scale(y)._ticks(nv.utils.calcTicksY(availableHeight / 36, data)).tickSize(-availableWidth, 0);
                g.select('.nv-y.nv-axis').call(yAxis);
              }
              g.select('.nv-zeroLine line').attr('x1', 0).attr('x2', rightAlignYAxis ? -availableWidth : availableWidth).attr('y1', y(0)).attr('y2', y(0));
            });
            renderWatch.renderEnd('achievementBar chart immediate');
            return chart;
          };
          'use strict';
          achievementbar = nv.models.achievementBar();
          xAxis = nv.models.axis();
          yAxis = nv.models.axis();
          legend = nv.models.legend();
          tooltip = nv.models.tooltip();
          margin = {
            top: 15,
            right: 10,
            bottom: 50,
            left: 60
          };
          width = null;
          height = null;
          color = nv.utils.getColor();
          showLegend = false;
          showXAxis = true;
          showYAxis = true;
          rightAlignYAxis = false;
          staggerLabels = false;
          wrapLabels = false;
          rotateLabels = 0;
          x = void 0;
          y = void 0;
          noData = null;
          dispatch = d3.dispatch('beforeUpdate', 'renderEnd');
          duration = 250;
          xAxis.orient('bottom').showMaxMin(false).tickFormat(function(d) {
            return d;
          });
          yAxis.orient(rightAlignYAxis ? 'right' : 'left').tickFormat(d3.format(',.1f'));
          tooltip.duration(0).headerEnabled(false).keyFormatter(function(d, i) {
            return xAxis.tickFormat()(d, i);
          });
          renderWatch = nv.utils.renderWatch(dispatch, duration);
          achievementbar.dispatch.on('elementMouseover.tooltip', function(evt) {
            var key;
            key = chart.x()(evt.data);
            if (key == null) {
              key = evt.data + " task range";
            } else {
              key = "Your progress with " + key;
            }
            evt['series'] = {
              key: key,
              color: evt.color
            };
            tooltip.data(evt).hidden(false);
          });
          achievementbar.dispatch.on('elementMouseout.tooltip', function(evt) {
            tooltip.hidden(true);
          });
          achievementbar.dispatch.on('elementMousemove.tooltip', function(evt) {
            tooltip.position({
              top: d3.event.pageY,
              left: d3.event.pageX
            })();
            tooltip();
          });
          chart.dispatch = dispatch;
          chart.achievementbar = achievementbar;
          chart.legend = legend;
          chart.xAxis = xAxis;
          chart.yAxis = yAxis;
          chart.tooltip = tooltip;
          chart.options = nv.utils.optionsFunc.bind(chart);
          chart._options = Object.create({}, {
            width: {
              get: function() {
                return width;
              },
              set: function(_) {
                width = _;
              }
            },
            height: {
              get: function() {
                return height;
              },
              set: function(_) {
                height = _;
              }
            },
            showLegend: {
              get: function() {
                return showLegend;
              },
              set: function(_) {
                showLegend = _;
              }
            },
            staggerLabels: {
              get: function() {
                return staggerLabels;
              },
              set: function(_) {
                staggerLabels = _;
              }
            },
            rotateLabels: {
              get: function() {
                return rotateLabels;
              },
              set: function(_) {
                rotateLabels = _;
              }
            },
            wrapLabels: {
              get: function() {
                return wrapLabels;
              },
              set: function(_) {
                wrapLabels = !!_;
              }
            },
            showXAxis: {
              get: function() {
                return showXAxis;
              },
              set: function(_) {
                showXAxis = _;
              }
            },
            showYAxis: {
              get: function() {
                return showYAxis;
              },
              set: function(_) {
                showYAxis = _;
              }
            },
            noData: {
              get: function() {
                return noData;
              },
              set: function(_) {
                noData = _;
              }
            },
            margin: {
              get: function() {
                return margin;
              },
              set: function(_) {
                margin.top = _.top !== void 0 ? _.top : margin.top;
                margin.right = _.right !== void 0 ? _.right : margin.right;
                margin.bottom = _.bottom !== void 0 ? _.bottom : margin.bottom;
                margin.left = _.left !== void 0 ? _.left : margin.left;
              }
            },
            duration: {
              get: function() {
                return duration;
              },
              set: function(_) {
                duration = _;
                renderWatch.reset(duration);
                achievementbar.duration(duration);
                xAxis.duration(duration);
                yAxis.duration(duration);
              }
            },
            color: {
              get: function() {
                return color;
              },
              set: function(_) {
                color = nv.utils.getColor(_);
                achievementbar.color(color);
                legend.color(color);
              }
            },
            rightAlignYAxis: {
              get: function() {
                return rightAlignYAxis;
              },
              set: function(_) {
                rightAlignYAxis = _;
                yAxis.orient(_ ? 'right' : 'left');
              }
            }
          });
          nv.utils.inheritOptions(chart, achievementbar);
          nv.utils.initOptions(chart);
          return chart;
        };
      }
      targets = outcomeService.calculateTargets($scope.unit, $scope.unit, outcomeService.unitTaskStatusFactor());
      currentProgress = outcomeService.calculateProgress($scope.unit, $scope.project);
      achievementData = {
        key: "Learning Achievement",
        values: []
      };
      max = 0;
      _.each($scope.unit.ilos, function(ilo) {
        var iloTargets;
        iloTargets = {};
        iloTargets[0] = {
          offset: 0,
          height: targets[ilo.id][0],
          color: gradeService.gradeColors.P
        };
        iloTargets[1] = {
          offset: iloTargets[0].offset + iloTargets[0].height,
          height: targets[ilo.id][1],
          color: gradeService.gradeColors.C
        };
        iloTargets[2] = {
          offset: iloTargets[1].offset + iloTargets[1].height,
          height: targets[ilo.id][2],
          color: gradeService.gradeColors.D
        };
        iloTargets[3] = {
          offset: iloTargets[2].offset + iloTargets[2].height,
          height: targets[ilo.id][3],
          color: gradeService.gradeColors.HD
        };
        if (iloTargets[3].offset + iloTargets[3].height > max) {
          max = iloTargets[3].offset + iloTargets[3].height;
        }
        return achievementData.values.push({
          label: ilo.name,
          value: currentProgress[0][ilo.id],
          targets: iloTargets
        });
      });
      ref = Visualisation('achievementBarChart', 'ILO Achievement Bar Chart', {
        height: 600,
        duration: 500,
        yDomain: [0, max],
        showValues: false,
        showYAxis: false,
        showLegend: false,
        x: function(d) {
          return d.label;
        },
        y: function(d) {
          return d.value;
        },
        color: function(d) {
          return '#373737';
        }
      }, {}), $scope.options = ref[0], $scope.config = ref[1];
      return $scope.data = [achievementData];
    }]
  };
});
