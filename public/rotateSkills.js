$(document).ready(function() {
  var entries = ['css3', 'github', 'html5', 'javascript', 'jest', 'jquery', 'mongoDB', 'nodeJS', 'postgreSQL', 'react', 'redux'];
  entries = entries.map((entry) => {
    return {
      tooltip: entry,
      image: `./skills/${entry}.png`,
      width: '50',
      height: '50',
      target: '_top'
    }
  })

  var settings = {
    entries: entries,
    width: '100%', // width of tag cloud
    height: '90%', // height of tag cloud
    radius: '80%', // radius of tag cloud
    radiusMin: 75,
    bgDraw: true, // background
    bgColor: '#fff', // background color
    opacityOver: 1.00, // opacity when hovered
    opacityOut: 0.2, // opacity of others when one is hovered
    opacitySpeed: 10, 
    fov: 800, // how content is presented
    speed: 1, // animation speed

    fontFamily: 'Montserrat, Arial, sans-serif',
    fontSize: '15',
    fontColor: '#fff',
    fontWeight: 'normal',//bold
    fontStyle: 'normal',//italic 
    fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,

    // tooltip options
    tooltipFontFamily: 'Montserrat, Arial, sans-serif',
    tooltipFontSize: '12',
    tooltipFontColor: 'black',
    tooltipFontWeight: 'bold',//bold, normal
    tooltipFontStyle: 'normal',//italic 
    tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: true,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10
  };

  $('#tag-cloud').svg3DTagCloud(settings);
});

// https://www.jqueryscript.net/text/3D-Interactive-SVG-Tag-Cloud-Plugin-With-jQuery-SVG-3D-Tag-Cloud.html




