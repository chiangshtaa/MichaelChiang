// import $ from 'jquery';

import SVG3DTagCloud from './rotateSkills.js';

export default function(conditional, iconSize = 50, fontSize = 24, radiusLength = '75%') {

  // console.log(conditional);
  // console.log(iconSize);
  console.log(fontSize);
  // console.log(radiusLength);
  var entries = ['css3', 'github', 'html5', 'javascript', 'jest', 'jquery', 'mongoDB', 'nodeJS', 'postgreSQL', 'react', 'redux', 'mocha'];
  entries = entries.map((entry) => {
    return {
      tooltip: entry,
      image: `./skills/${entry}.png`,
      width: iconSize,
      height: iconSize,
    }
  })

  var settings = {
    entries: entries,
    width: '100%', // width of tag cloud
    height: '100%', // height of tag cloud
    radius: radiusLength, // radius of tag cloud
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
    settings.fontSize = fontSize;
    settings.fontColor = "#04A4CC";
    // settings.fontColor = '#4a808f';
    settings.fontWeight = 'bold';
  }

  // $( '#tag-cloud' ).svg3DTagCloud( settings );
  // let element = $('#tag-cloud').get(0);
  // return new SVG3DTagCloud(element, settings);
  return new SVG3DTagCloud( document.getElementById( 'tag-cloud'  ), settings );
};

// https://www.jqueryscript.net/text/3D-Interactive-SVG-Tag-Cloud-Plugin-With-jQuery-SVG-3D-Tag-Cloud.html




