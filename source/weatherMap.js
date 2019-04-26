"strict mode";

// Do a CORS request to get Davis weather hourly forecast

// Create the XHR object.
function createCORSRequest(method, url) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);  // call its open method
  return xhr;
}

// Make the actual CORS request.
function makeCorsRequest() {

   let url = "http://api.openweathermap.org/data/2.5/forecast/hourly?q=Davis,CA,US&units=imperial&APPID=df536ffb3c2f54f47b383783cc7e2c2d"

  let xhr = createCORSRequest('GET', url);

  // checking if browser does CORS
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Load some functions into response handlers.
  xhr.onload = function() {
      let responseStr = xhr.responseText;  // get the JSON string
      let object = JSON.parse(responseStr);  // turn it into an object
      console.log(JSON.stringify(object, undefined, 2));  // print it out as a string, nicely formatted

      document.getElementById('current-temp0').textContent = parseInt(object.list[0].main.temp)+"°";
      document.getElementById('current-temp1').textContent = parseInt(object.list[1].main.temp)+"°";
      document.getElementById('current-temp2').textContent = parseInt(object.list[2].main.temp)+"°";
      document.getElementById('current-temp3').textContent = parseInt(object.list[3].main.temp)+"°";
      document.getElementById('current-temp4').textContent = parseInt(object.list[4].main.temp)+"°";
      document.getElementById('current-temp5').textContent = parseInt(object.list[5].main.temp)+"°";

      let time1 = object["list"][16]["dt_txt"].substr(11).substr(0,2);
      let variable1 = parseInt(time1);
      if(variable1 > 12) { /*afternoon*/
        variable1 -= 12;
        variable1 += " p.m.";
      }
      else if (variable1 == 0) { /*midnight*/
        variable1 += 12;
        variable1 += " a.m.";
      }
      else /*morning*/{
        variable1 += " a.m."
      }

      let time2 = object["list"][17]["dt_txt"].substr(11).substr(0,2);
      let variable2 = parseInt(time2);
      if(variable2 > 12) { /*afternoon*/
        variable2 -= 12;
        variable2 += " p.m.";
      }
      else if (variable2 == 0) { /*midnight*/
        variable2 += 12;
        variable2 += " a.m.";
      }
      else /*morning*/{
        variable2 += " a.m."
      }

      let time3 = object["list"][18]["dt_txt"].substr(11).substr(0,2);
      let variable3 = parseInt(time3);
      if(variable3 > 12) { /*afternoon*/
        variable3 -= 12;
        variable3 += " p.m.";
      }
      else if (variable3 == 0) { /*midnight*/
        variable3 += 12;
        variable3 += " a.m.";
      }
      else /*morning*/{
        variable3 += " a.m."
      }

      let time4 = object["list"][19]["dt_txt"].substr(11).substr(0,2);
      let variable4 = parseInt(time4);
      if(variable4 > 12) { /*afternoon*/
        variable4 -= 12;
        variable4 += " p.m.";
      }
      else if (variable4 == 0) { /*midnight*/
        variable4 += 12;
        variable4 += " a.m.";
      }
      else /*morning*/{
        variable4 += " a.m."
      }

      let time5 = object["list"][20]["dt_txt"].substr(11).substr(0,2);
      let variable5 = parseInt(time5);
      if(variable5 > 12) { /*afternoon*/
        variable5 -= 12;
        variable5 += " p.m.";
      }
      else if (variable5 == 0) { /*midnight*/
        variable5 += 12;
        variable5 += " a.m.";
      }
      else /*morning*/{
        variable5 += " a.m."
      }

      let time6 = object["list"][21]["dt_txt"].substr(11).substr(0,2);
      let variable6 = parseInt(time6);
      if(variable6 > 12) { /*afternoon*/
        variable6 -= 12;
        variable6 += " p.m.";
      }
      else if (variable6 == 0) { /*midnight*/
        variable6 += 12;
        variable6 += " a.m.";
      }
      else /*morning*/{
        variable6 += " a.m."
      }

      document.getElementById('current-time0').textContent = variable1;
      document.getElementById('current-time1').textContent = variable2;
      document.getElementById('current-time2').textContent = variable3;
      document.getElementById('current-time3').textContent = variable4;
      document.getElementById('current-time4').textContent = variable5;
      document.getElementById('current-time5').textContent = variable6;

      let pic0 = object.list[16].weather[0].icon;
      pic0 += ".svg"
      pic0 = "../weatherDesign/assets/" + pic0;
      document.getElementById('firstSun').setAttribute('src', pic0);
      document.getElementById('secondSun').setAttribute('src', pic0);

      let pic1 = object.list[17].weather[0].icon;
      pic1 += ".svg"
      pic1 = "../weatherDesign/assets/" + pic1;
      document.getElementById('image1').setAttribute('src', pic1);

      let pic2 = object.list[18].weather[0].icon;
      pic2 += ".svg"
      pic2 = "../weatherDesign/assets/" + pic2;
      document.getElementById('image2').setAttribute('src', pic2);

      let pic3 = object.list[19].weather[0].icon;
      pic3 += ".svg"
      pic3 = "../weatherDesign/assets/" + pic3;
      document.getElementById('image3').setAttribute('src', pic3);

      let pic4 = object.list[20].weather[0].icon;
      pic4 += ".svg"
      pic4 = "../weatherDesign/assets/" + pic4;
      document.getElementById('image4').setAttribute('src', pic4);

      let pic5 = object.list[21].weather[0].icon;
      pic5 += ".svg"
      pic5 = "../weatherDesign/assets/" + pic5;
      document.getElementById('image5').setAttribute('src', pic5);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  // Actually send request to server
  xhr.send();
}

// run this code to make request when this script file gets executed
makeCorsRequest();
