import React from 'react';
import echarts from 'echarts';
class Echarts extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
    backgroundColor: '#2c343c',

    title: {
        text: '我的技能分布',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 0,
        max: 100,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:33, name:'HTML'},
                {value:31, name:'css'},
                {value:27, name:'jave'},
                {value:23, name:'js'},
                {value:40, name:'jquery'}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
})
            }
        render () {
          let styles={
            marginTop:'5rem',
            width:470,
            height:300,
            margin:'0 auto'
          }
          return(
            <div>
                  <p style={{color:'blue',textAlign:'center'}}>我的技能分布</p>
                  <div id='main' style={styles}>
                  </div>
            </div>
          )
        }
      }

      export default Echarts;
