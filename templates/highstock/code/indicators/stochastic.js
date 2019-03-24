/*
  Highcharts JS v7.0.3 (2019-02-06)

 Indicator series type for Highstock

 (c) 2010-2019 Pawe Fus

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define(function(){return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){var m=function(a){var d=a.reduce;return{minInArray:function(a,f){return d(a,function(a,h){return Math.min(a,h[f])},Number.MAX_VALUE)},maxInArray:function(a,f){return d(a,function(a,h){return Math.max(a,h[f])},-Number.MAX_VALUE)},getArrayExtremes:function(a,f,c){return d(a,function(a,
g){return[Math.min(a[0],g[f]),Math.max(a[1],g[c])]},[Number.MAX_VALUE,-Number.MAX_VALUE])}}}(c),y=function(a){var d=a.each,c=a.merge,f=a.error,v=a.defined,h=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(g){var a=[];d(this.pointArrayMap,function(b){b!==g&&a.push("plot"+b.charAt(0).toUpperCase()+b.slice(1))});return a},toYData:function(g){var a=[];d(this.pointArrayMap,function(b){a.push(g[b])});return a},translate:function(){var a=
this,c=a.pointArrayMap,b=[],n,b=a.getTranslatedLinesNames();h.prototype.translate.apply(a,arguments);d(a.points,function(g){d(c,function(c,d){n=g[c];null!==n&&(g[b[d]]=a.yAxis.toPixels(n,!0))})})},drawGraph:function(){var a=this,w=a.linesApiNames,b=a.points,n=b.length,t=a.options,x=a.graph,u={options:{gapSize:t.gapSize}},l=[],p=a.getTranslatedLinesNames(a.pointValKey),e;d(p,function(a,c){for(l[c]=[];n--;)e=b[n],l[c].push({x:e.x,plotX:e.plotX,plotY:e[a],isNull:!v(e[a])});n=b.length});d(w,function(b,
d){l[d]?(a.points=l[d],t[b]?a.options=c(t[b].styles,u):f('Error: "There is no '+b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),a.graph=a["graph"+b],h.prototype.drawGraph.call(a),a["graph"+b]=a.graph):f('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=b;a.options=t;a.graph=x;h.prototype.drawGraph.call(a)}}}(c);(function(a,c,m){var d=a.merge,
v=a.isArray,h=a.seriesTypes.sma,g=c.getArrayExtremes;a.seriesType("stochastic","sma",{params:{periods:[14,3]},marker:{enabled:!1},tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e\x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3e%K: {point.y}\x3cbr/\x3e%D: {point.smoothed}\x3cbr/\x3e'},smoothedLine:{styles:{lineWidth:1,lineColor:void 0}},dataGrouping:{approximation:"averages"}},a.merge(m,{nameComponents:["periods"],nameBase:"Stochastic",pointArrayMap:["y","smoothed"],
parallelArrays:["x","y","smoothed"],pointValKey:"y",linesApiNames:["smoothedLine"],init:function(){h.prototype.init.apply(this,arguments);this.options=d({smoothedLine:{styles:{lineColor:this.color}}},this.options)},getValues:function(a,b){var c=b.periods[0];b=b.periods[1];var d=a.xData,f=(a=a.yData)?a.length:0,u=[],l=[],p=[],e,q,r=null,m,k;if(f<c||!v(a[0])||4!==a[0].length)return!1;for(k=c-1;k<f;k++)e=a.slice(k-c+1,k+1),m=g(e,2,1),q=m[0],e=a[k][3]-q,q=m[1]-q,e=e/q*100,l.push(d[k]),p.push([e,null]),
k>=c-1+(b-1)&&(r=h.prototype.getValues.call(this,{xData:l.slice(-b),yData:p.slice(-b)},{period:b}),r=r.yData[0]),u.push([d[k],e,r]),p[p.length-1][1]=r;return{values:u,xData:l,yData:p}}}))})(c,m,y)});
//# sourceMappingURL=stochastic.js.map
