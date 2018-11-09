import $ from 'jquery';

import SVG3DTagCloud from './rotateSkills.js';
console.log('cloud', SVG3DTagCloud);

export default function(conditional) {
  console.log(conditional);

  var entries = ['css3', 'github', 'html5', 'javascript', 'jest', 'jquery', 'mongoDB', 'nodeJS', 'postgreSQL', 'react', 'redux'];
  entries = entries.map((entry) => {
    return {
      tooltip: entry,
      image: `./skills/${entry}.png`,
      width: '50',
      height: '50',
    }
  })

  var settings = {
    entries: entries,
    width: '100%', // width of tag cloud
    height: '100%', // height of tag cloud
    radius: '75%', // radius of tag cloud
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
    fontColor: 'black',
    fontWeight: 'normal',//bold
    fontStyle: 'normal',//italic 
    fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: false,

    // tooltip options
    tooltipFontFamily: 'Montserrat, Arial, sans-serif',
    tooltipFontSize: '10',
    tooltipFontColor: 'black',
    tooltipFontWeight: 'normal',//bold, normal
    tooltipFontStyle: 'normal',//italic 
    tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 0
  };

  if (conditional) {
    entries = entries.map((entry) => {
      let skill = entry.tooltip;
      return {
        label: skill,
        width: '50',
        height: '50',
      }
    })
    settings.entries = entries;
    settings.bgColor = '#444';
    settings.fontSize = '24';
    settings.fontColor = "#04A4CC";
    settings.fontWeight = 'bold';
  }

  return new SVG3DTagCloud( document.getElementById( 'tag-cloud'  ), settings );
  // $('#tag-cloud').svg3DTagCloud(settings);
};

// https://www.jqueryscript.net/text/3D-Interactive-SVG-Tag-Cloud-Plugin-With-jQuery-SVG-3D-Tag-Cloud.html




