angular.module('doubtfire.visualisations.alignment-bullet-chart', []).directive('alignmentBulletChart', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'visualisations/visualisation.tpl.html',
    scope: {
      project: '=',
      unit: '=',
      ilo: '=',
      targets: '=',
      currentProgress: '=',
      classStats: '=',
      showLegend: '=?'
    },
    controller: ["$scope", "gradeService", "Visualisation", function($scope, gradeService, Visualisation) {
      var ref, targetC, targetD, targetHD, targetP, updateProgress;
      $scope.showLegend = $scope.showLegend != null ? $scope.showLegend : true;
      if (nv.models.iloBullet == null) {
        nv.models.iloBullet = function() {
          var chart, color, container, dispatch, forceX, height, margin, markerLabels, markers, measureLabels, measures, orient, rangeLabels, ranges, reverse, tickFormat, width;
          chart = function(selection) {
            selection.each(function(d, i) {
              var availableHeight, availableWidth, container, g, gEnter, h3, markerData, markerLabelz, markerz, measureLabelz, measurez, rangeC, rangeD, rangeHD, rangeLabelz, rangeP, rangez, w0, w1, wrap, wrapEnter, x0, x1, xp0, xp1;
              availableWidth = width - ($scope.legend ? margin.left : 0) - ($scope.legend ? margin.right : 0);
              availableHeight = height - margin.top - margin.bottom;
              container = d3.select(this);
              nv.utils.initSVG(container);
              rangez = ranges.call(this, d, i).slice().reverse();
              markerz = markers.call(this, d, i).slice().sort(d3.descending);
              measurez = measures.call(this, d, i);
              rangeLabelz = rangeLabels.call(this, d, i).slice().reverse();
              markerLabelz = markerLabels.call(this, d, i).slice();
              measureLabelz = measureLabels.call(this, d, i).slice();
              x1 = d3.scale.linear().domain(d3.extent(d3.merge([forceX, rangez]))).range(reverse ? [availableWidth, 0] : [0, availableWidth]);
              x0 = this.__chart__ || d3.scale.linear().domain([0, Infinity]).range(x1.range());
              this.__chart__ = x1;
              rangeHD = rangez[0];
              rangeD = rangez[1];
              rangeC = rangez[2];
              rangeP = rangez[3];
              wrap = container.selectAll('g.nv-wrap.nv-bullet').data([d]);
              wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-bullet');
              gEnter = wrapEnter.append('g');
              g = wrap.select('g');
              gEnter.append('rect').attr('class', 'nv-range nv-rangeHD').style('fill-opacity', '0.2').style('fill', gradeService.gradeColors.HD);
              gEnter.append('rect').attr('class', 'nv-range nv-rangeD').style('fill-opacity', '0.2').style('fill', gradeService.gradeColors.D);
              gEnter.append('rect').attr('class', 'nv-range nv-rangeC').style('fill-opacity', '0.2').style('fill', gradeService.gradeColors.C);
              gEnter.append('rect').attr('class', 'nv-range nv-rangeP').style('fill-opacity', '0.2').style('fill', gradeService.gradeColors.P);
              gEnter.append('rect').attr('class', 'nv-measure');
              gEnter.append('rect').attr('class', 'nv-median').style('fill-opacity', '1.0').style('fill', '#ffffff');
              wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
              w0 = function(d) {
                return Math.abs(x0(d) - x0(0));
              };
              w1 = function(d) {
                return Math.abs(x1(d) - x1(0));
              };
              xp0 = function(d) {
                if (d > 0) {
                  return x0(d);
                } else {
                  return x0(0);
                }
              };
              xp1 = function(d) {
                if (d > 0) {
                  return x1(d);
                } else {
                  return x1(0);
                }
              };
              g.select('rect.nv-rangeHD').attr('height', availableHeight).attr('width', w1(rangeHD - rangeD)).attr('x', xp1(rangeD)).datum(rangeHD);
              g.select('rect.nv-rangeD').attr('height', availableHeight).attr('width', w1(rangeD - rangeC)).attr('x', xp1(rangeC)).datum(rangeD);
              g.select('rect.nv-rangeC').attr('height', availableHeight).attr('width', w1(rangeC - rangeP)).attr('x', xp1(rangeP)).datum(rangeC);
              g.select('rect.nv-rangeP').attr('height', availableHeight).attr('width', w1(rangeP)).attr('x', xp1(0)).datum(rangeP);
              if (measurez != null) {
                g.select('rect.nv-median').style('fill', "#373737").style('fill-opacity', 0.6).attr('height', availableHeight).attr('y', 0).attr('width', 2).attr('x', xp1(measurez.median)).on('mouseover', function() {
                  dispatch.elementMouseover({
                    value: measurez.median,
                    label: 'The average student is here',
                    color: d3.select(this).style('fill')
                  });
                }).on('mousemove', function() {
                  dispatch.elementMousemove({
                    value: measurez.median,
                    label: 'Class Median',
                    color: d3.select(this).style('fill')
                  });
                }).on('mouseout', function() {
                  dispatch.elementMouseout({
                    value: measurez.median,
                    label: 'Class Median',
                    color: d3.select(this).style('fill')
                  });
                });
                g.select('rect.nv-measure').style('fill', "#373737").style('fill-opacity', 0.6).attr('height', availableHeight * 2 / 3).attr('y', availableHeight / 6).attr('width', xp1(measurez.upper) - xp1(measurez.lower)).attr('x', xp1(measurez.lower)).on('mouseover', function() {
                  dispatch.elementMouseover({
                    value: measurez[0],
                    label: measureLabelz[0] || 'Current',
                    color: d3.select(this).style('fill')
                  });
                }).on('mousemove', function() {
                  dispatch.elementMousemove({
                    value: measurez[0],
                    label: measureLabelz[0] || 'Current',
                    color: d3.select(this).style('fill')
                  });
                }).on('mouseout', function() {
                  dispatch.elementMouseout({
                    value: measurez[0],
                    label: measureLabelz[0] || 'Current',
                    color: d3.select(this).style('fill')
                  });
                });
              }
              h3 = availableHeight / 6;
              markerData = markerz.map(function(marker, index) {
                return {
                  value: marker,
                  label: markerLabelz[index]
                };
              });
              gEnter.selectAll('path.nv-markerTriangle').data(markerData).enter().append('path').attr('class', 'nv-markerTriangle').attr('d', function(d, i) {
                if (i % 2 === 0) {
                  return 'M0,' + h3 + 'L' + h3 + ',' + -h3 + ' ' + -h3 + ',' + -h3 + 'Z';
                } else {
                  return 'M0,' + -h3 + 'L' + -h3 + ',0L0,' + h3 + 'L' + h3 + ',0Z';
                }
              }).on('mouseover', function(d) {
                dispatch.elementMouseover({
                  value: d.value,
                  label: d.label || 'Previous',
                  color: d3.select(this).style('fill'),
                  pos: [x1(d.value), availableHeight / 2]
                });
              }).on('mousemove', function(d) {
                dispatch.elementMousemove({
                  value: d.value,
                  label: d.label || 'Previous',
                  color: d3.select(this).style('fill')
                });
              }).on('mouseout', function(d, i) {
                dispatch.elementMouseout({
                  value: d.value,
                  label: d.label || 'Previous',
                  color: d3.select(this).style('fill')
                });
              });
              g.selectAll('path.nv-markerTriangle').data(markerData).attr('transform', function(d) {
                return 'translate(' + x1(d.value) + ',' + availableHeight / 2 + ')';
              });
              wrap.selectAll('.nv-range').on('mouseover', function(d, i) {
                var label;
                label = rangeLabelz[i] || (!i ? 'Maximum' : i === 1 ? 'Mean' : 'Minimum');
                dispatch.elementMouseover({
                  value: d,
                  label: label,
                  color: d3.select(this).style('fill')
                });
              }).on('mousemove', function() {
                dispatch.elementMousemove({
                  value: measurez[0],
                  label: measureLabelz[0] || 'Previous',
                  color: d3.select(this).style('fill')
                });
              }).on('mouseout', function(d, i) {
                var label;
                label = rangeLabelz[i] || (!i ? 'Maximum' : i === 1 ? 'Mean' : 'Minimum');
                dispatch.elementMouseout({
                  value: d,
                  label: label,
                  color: d3.select(this).style('fill')
                });
              });
            });
            return chart;
          };
          'use strict';
          margin = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          };
          orient = 'left';
          reverse = false;
          ranges = function(d) {
            return d.ranges;
          };
          markers = function(d) {
            if (d.markers) {
              return d.markers;
            } else {
              return [];
            }
          };
          measures = function(d) {
            return d.measures;
          };
          rangeLabels = function(d) {
            if (d.rangeLabels) {
              return d.rangeLabels;
            } else {
              return [];
            }
          };
          markerLabels = function(d) {
            if (d.markerLabels) {
              return d.markerLabels;
            } else {
              return [];
            }
          };
          measureLabels = function(d) {
            if (d.measureLabels) {
              return d.measureLabels;
            } else {
              return [];
            }
          };
          forceX = [0];
          width = 380;
          height = 30;
          container = null;
          tickFormat = null;
          color = nv.utils.getColor(['#1f77b4']);
          dispatch = d3.dispatch('elementMouseover', 'elementMouseout', 'elementMousemove');
          chart.dispatch = dispatch;
          chart.options = nv.utils.optionsFunc.bind(chart);
          chart._options = Object.create({}, {
            ranges: {
              get: function() {
                return ranges;
              },
              set: function(_) {
                ranges = _;
              }
            },
            markers: {
              get: function() {
                return markers;
              },
              set: function(_) {
                markers = _;
              }
            },
            measures: {
              get: function() {
                return measures;
              },
              set: function(_) {
                measures = _;
              }
            },
            forceX: {
              get: function() {
                return forceX;
              },
              set: function(_) {
                forceX = _;
              }
            },
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
            tickFormat: {
              get: function() {
                return tickFormat;
              },
              set: function(_) {
                tickFormat = _;
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
            orient: {
              get: function() {
                return orient;
              },
              set: function(_) {
                orient = _;
                reverse = orient === 'right' || orient === 'bottom';
              }
            },
            color: {
              get: function() {
                return color;
              },
              set: function(_) {
                color = nv.utils.getColor(_);
              }
            }
          });
          nv.utils.initOptions(chart);
          return chart;
        };
        nv.models.iloChart = function() {
          var bullet, chart, dispatch, height, margin, markers, measures, noData, orient, rangeLabels, ranges, reverse, tickFormat, ticks, tooltip, width;
          bullet = nv.models.iloBullet();
          tooltip = nv.models.tooltip();
          orient = 'left';
          reverse = false;
          margin = $scope.legend ? {
            top: 5,
            right: 40,
            bottom: 5,
            left: 120
          } : {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5
          };
          ranges = function(d) {
            return d.ranges;
          };
          rangeLabels = function(d) {
            return d.rangeLabels;
          };
          markers = function(d) {
            if (d.markers) {
              return d.markers;
            } else {
              return [];
            }
          };
          measures = function(d) {
            return d.measures;
          };
          width = null;
          height = 55;
          tickFormat = null;
          ticks = null;
          noData = null;
          dispatch = d3.dispatch;
          tooltip.duration(0).headerEnabled(false);
          chart = function(selection) {
            selection.each(function(d, i) {
              var availableHeight, availableWidth, bulletWrap, container, g, gEnter, markerz, measurez, rangez, that, title, w0, w1, wrap, wrapEnter, x0, x1;
              container = d3.select(this);
              nv.utils.initSVG(container);
              availableWidth = nv.utils.availableWidth(width, container, margin);
              availableHeight = height - margin.top - margin.bottom;
              that = this;
              chart.update = function() {
                return chart(selection);
              };
              chart.container = this;
              if (!d || !ranges.call(this, d, i)) {
                nv.utils.noData(chart, container);
                return chart;
              } else {
                container.selectAll('.nv-noData').remove();
              }
              rangez = ranges.call(this, d, i).slice().sort(d3.descending);
              markerz = markers.call(this, d, i).slice().sort(d3.descending);
              measurez = measures.call(this, d, i);
              wrap = container.selectAll('g.nv-wrap.nv-bulletChart').data([d]);
              wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-bulletChart');
              gEnter = wrapEnter.append('g');
              g = wrap.select('g');
              gEnter.append('g').attr('class', 'nv-bulletWrap');
              if ($scope.legend) {
                gEnter.append('g').attr('class', 'nv-titles');
              }
              wrap.attr('transform', 'translate(' + ($scope.legend ? margin.left : 10) + ',' + margin.top + ')');
              x1 = d3.scale.linear().domain([0, Math.max(rangez[0], markerz[0] || 0, measurez[0])]).range(reverse ? [availableWidth, 0] : [0, availableWidth]);
              x0 = this.__chart__ || d3.scale.linear().domain([0, Infinity]).range(x1.range());
              this.__chart__ = x1;
              w0 = function(d) {
                return Math.abs(x0(d) - x0(0));
              };
              w1 = function(d) {
                return Math.abs(x1(d) - x1(0));
              };
              if ($scope.legend) {
                title = gEnter.select('.nv-titles').append('g').attr('text-anchor', 'end').attr('transform', 'translate(-6,' + (height - margin.top - margin.bottom) / 2 + ')');
                title.append('text').attr('class', 'nv-title').text(function(d) {
                  return d.title;
                });
                title.append('text').attr('class', 'nv-subtitle').attr('dy', '1em').text(function(d) {
                  return d.subtitle;
                });
              }
              bullet.width(availableWidth).height(availableHeight);
              bulletWrap = g.select('.nv-bulletWrap');
              return d3.transition(bulletWrap).call(bullet);
            });
            d3.timer.flush();
            return chart;
          };
          bullet.dispatch.on('elementMouseover.tooltip', function(evt) {
            evt['series'] = {
              key: evt.label,
              color: evt.color
            };
            return tooltip.data(evt).hidden(false);
          });
          bullet.dispatch.on('elementMouseout.tooltip', function(evt) {
            return tooltip.hidden(true);
          });
          bullet.dispatch.on('elementMousemove.tooltip', function(evt) {
            tooltip.position({
              top: d3.event.pageY,
              left: d3.event.pageX
            })();
            return tooltip();
          });
          chart.bullet = bullet;
          chart.dispatch = dispatch;
          chart.tooltip = tooltip;
          chart.options = nv.utils.optionsFunc.bind(chart);
          chart._options = Object.create({}, {
            ranges: {
              get: (function() {
                return ranges;
              }),
              set: (function(_) {
                return ranges = _;
              })
            },
            rangeLabels: {
              get: (function() {
                return rangeLabels;
              }),
              set: (function(_) {
                return rangeLabels = _;
              })
            },
            markers: {
              get: (function() {
                return markers;
              }),
              set: (function(_) {
                return markers = _;
              })
            },
            measures: {
              get: (function() {
                return measures;
              }),
              set: (function(_) {
                return measures = _;
              })
            },
            width: {
              get: (function() {
                return width;
              }),
              set: (function(_) {
                return width = _;
              })
            },
            height: {
              get: (function() {
                return height;
              }),
              set: (function(_) {
                return height = _;
              })
            },
            tickFormat: {
              get: (function() {
                return tickFormat;
              }),
              set: (function(_) {
                return tickFormat = _;
              })
            },
            ticks: {
              get: (function() {
                return ticks;
              }),
              set: (function(_) {
                return ticks = _;
              })
            },
            noData: {
              get: (function() {
                return noData;
              }),
              set: (function(_) {
                return noData = _;
              })
            },
            margin: {
              get: (function() {
                return margin;
              }),
              set: function(_) {
                margin.top = _.top != null ? _.top : margin.top;
                margin.right = _.right != null ? _.right : margin.right;
                margin.bottom = _.bottom != null ? _.bottom : margin.bottom;
                return margin.left = _.left != null ? _.left : margin.left;
              }
            },
            orient: {
              get: (function() {
                return orient;
              }),
              set: function(_) {
                orient = _;
                return reverse = orient === 'right' || orient === 'bottom';
              }
            }
          });
          nv.utils.inheritOptions(chart, bullet);
          nv.utils.initOptions(chart);
          return chart;
        };
      }
      ref = Visualisation('iloChart', 'ILO Alignment Bullet Chart', {
        height: 60,
        duration: 500
      }, {}), $scope.options = ref[0], $scope.config = ref[1];
      targetP = $scope.targets[$scope.ilo.id][0];
      targetC = targetP + $scope.targets[$scope.ilo.id][1];
      targetD = targetC + $scope.targets[$scope.ilo.id][2];
      targetHD = targetD + $scope.targets[$scope.ilo.id][3];
      $scope.data = {
        "title": $scope.ilo.abbreviation,
        "subtitle": $scope.ilo.name,
        "ranges": [targetP, targetC, targetD, targetHD],
        "rangeLabels": ['Pass', 'Credit', 'Distinction', 'High Distinction'],
        "measures": {},
        "measureLabels": ['Most of the class are in this area'],
        "markers": [],
        "markerLabels": ['Your Suggested Progress - Staff Suggestion', 'Your Current Progress - Self Reflection']
      };
      if (($scope.classStats != null) && ($scope.classStats.title != null)) {
        $scope.data.measureLabels[0] = $scope.classStats.title;
      }
      updateProgress = function() {
        if ($scope.currentProgress != null) {
          _.each($scope.currentProgress, function(d, i) {
            $scope.data.markers[i] = $scope.currentProgress[i][$scope.ilo.id];
            if ($scope.currentProgress[i].title != null) {
              return $scope.data.markerLabels[i] = $scope.currentProgress[i].title;
            }
          });
        }
        return $scope.data.measures = ($scope.classStats != null) && ($scope.classStats[$scope.ilo.id] != null) ? $scope.classStats[$scope.ilo.id] : 0;
      };
      updateProgress();
      return $scope.$on('ProgressUpdated', function() {
        updateProgress();
        if ($scope.api) {
          return $scope.api.update();
        }
      });
    }]
  };
});
