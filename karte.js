
let projection = d3.geoEquirectangular()
  .scale(67000)
  .translate([400, 60])
  .center([7.65, 47.53]);

let geoGenerator = d3.geoPath()
  .projection(projection);

function update(geojson) {
  let u = d3.select('#content g.map')
    .selectAll('path')
    .data(geojson.features);

  u.enter()
    .append('path')
    .attr('d', geoGenerator)
    .attr('id', function(d){ return 'bfs-' + d.properties['gemeinde_id_bfs'] }) 
};
  
update(geojson);


function show_capacity(year, scenario, sensitivity) {
  d3.dsv(";", "gemeinden-versorgungsregionen.csv").then(function(gde_vreg) {
    d3.dsv(";", "kapaz_prognosen_linear.csv").then(function(kapaz) {

      let jahr = year;
      let szenario = scenario;
      let max = sensitivity; // wenn die der Altersheimplatz-Überschuss max oder mehr bzw. das Altersheimplatz-Defizit -max oder weniger erreicht, ist die farbe der versorgunsregion 100% opak. Dazwischen ist sie mehr oder weniger durchscheinend (d.h. geht ins weiss)
      let minus_color = 'red';
      let plus_color = 'blue';

      // Legende

      d3.select('#minus_color')
        .attr('style', 'stop-color:'+minus_color+';stop-opacity:1');
        d3.select('#plus_color')
          .attr('style', 'stop-color:'+plus_color+';stop-opacity:1');

      // Karten-Update

      kapaz.forEach(function (k_item, k_index) {
        if (k_item['jahr'] == jahr ) {
          gde_vreg.forEach(function (g_item, g_index) {
            switch(g_item['versorgungsregion']) {

              case '1':

                if (k_item['versorgungsregion_code'] == '1'){
                  let diff = parseFloat(k_item[szenario].replace(",", "."))
                  if ( diff < 0 ) {
                    d3.select('#bfs-'+g_item['bfs-nr'])
                      .style('fill', minus_color)
                      .style('fill-opacity', ((-diff)/max).toString() )
                  } else {
                    d3.select('#bfs-'+g_item['bfs-nr'])
                      .style('fill', plus_color)
                      .style('fill-opacity', ((diff)/max).toString() )
                  }
                }

                break;

              case '2':

                if (k_item['versorgungsregion_code'] == '2'){
                  let diff = parseFloat(k_item[szenario].replace(",", "."))
                  if ( diff < 0 ) {
                    d3.select('#bfs-'+g_item['bfs-nr'])
                      .style('fill', minus_color)
                      .style('fill-opacity', ((-diff)/max).toString() )
                  } else {
                    d3.select('#bfs-'+g_item['bfs-nr'])
                      .style('fill', plus_color)
                      .style('fill-opacity', ((diff)/max).toString() )
                  }
                }

                break;

              case '3':

                if (k_item['versorgungsregion_code'] == '3'){
                  let diff = parseFloat(k_item[szenario].replace(",", "."))
                  if ( diff < 0 ) {
                    d3.select('#bfs-'+g_item['bfs-nr'])
                      .style('fill', minus_color)
                      .style('fill-opacity', ((-diff)/max).toString() )
                  } else {
                    d3.select('#bfs-'+g_item['bfs-nr'])
                      .style('fill', plus_color)
                      .style('fill-opacity', ((diff)/max).toString() )
                  }
                }

                break;

              case '4':

                  if (k_item['versorgungsregion_code'] == '4'){
                    let diff = parseFloat(k_item[szenario].replace(",", "."))
                    if ( diff < 0 ) {
                      d3.select('#bfs-'+g_item['bfs-nr'])
                        .style('fill', minus_color)
                        .style('fill-opacity', ((-diff)/max).toString() )
                    } else {
                      d3.select('#bfs-'+g_item['bfs-nr'])
                        .style('fill', plus_color)
                        .style('fill-opacity', ((diff)/max).toString() )
                    }
                  }

                break;

              case '5':

                  if (k_item['versorgungsregion_code'] == '5'){
                    let diff = parseFloat(k_item[szenario].replace(",", "."))
                    if ( diff < 0 ) {
                      d3.select('#bfs-'+g_item['bfs-nr'])
                        .style('fill', minus_color)
                        .style('fill-opacity', ((-diff)/max).toString() )
                    } else {
                      d3.select('#bfs-'+g_item['bfs-nr'])
                        .style('fill', plus_color)
                        .style('fill-opacity', ((diff)/max).toString() )
                    }
                  }

                break;

              case '6':
              
                if (k_item['versorgungsregion_code'] == '6'){
                  let diff = parseFloat(k_item[szenario].replace(",", "."))
                  if ( diff < 0 ) {
                    d3.select('#bfs-'+g_item['bfs-nr'])
                      .style('fill', minus_color)
                      .style('fill-opacity', ((-diff)/max).toString() )
                  } else {
                    d3.select('#bfs-'+g_item['bfs-nr'])
                      .style('fill', plus_color)
                      .style('fill-opacity', ((diff)/max).toString() )
                  }
                }

                break;

              case '7':

                if (k_item['versorgungsregion_code'] == '7'){
                  let diff = parseFloat(k_item[szenario].replace(",", "."))
                  if ( diff < 0 ) {
                    d3.select('#bfs-'+g_item['bfs-nr'])
                      .style('fill', minus_color)
                      .style('fill-opacity', ((-diff)/max).toString() )
                  } else {
                    d3.select('#bfs-'+g_item['bfs-nr'])
                      .style('fill', plus_color)
                      .style('fill-opacity', ((diff)/max).toString() )
                  }
                }

                break;

              case '8':

                if (k_item['versorgungsregion_code'] == '8'){
                  let diff = parseFloat(k_item[szenario].replace(",", "."))
                  if ( diff < 0 ) {
                    d3.select('#bfs-'+g_item['bfs-nr'])
                      .style('fill', minus_color)
                      .style('fill-opacity', ((-diff)/max).toString() )
                  } else {
                    d3.select('#bfs-'+g_item['bfs-nr'])
                      .style('fill', plus_color)
                      .style('fill-opacity', ((diff)/max).toString() )
                  }
                }
                
                break;

              case '99':
                d3.select('#bfs-'+g_item['bfs-nr'])
                  .style('fill', 'grey')
                  .style('opacity', '0.8');
                break;
                
              default:
                
            }; // switch Klammern
          }); // gde.forEach Klammern
        }; // if k_item == jahr Klammern
      });  // kapaz.forEach Klammern  
    });  // kapaz Klammern
  }); //gde_vreg Klammern
  
}

show_capacity('2040', 'diff5', 600);
  