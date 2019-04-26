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

      document.getElementById('current-temp1').textContent = object.list[0].main.temp;
      document.getElementById('current-temp2').textContent = object.list[1].main.temp;
      document.getElementById('current-temp3').textContent = object.list[2].main.temp;
      document.getElementById('current-temp4').textContent = object.list[3].main.temp;
      document.getElementById('current-temp5').textContent = object.list[4].main.temp;
      document.getElementById('current-temp6').textContent = object.list[5].main.temp;

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

      document.getElementById('current-hour0').textContent = variable1;
      document.getElementById('current-hour1').textContent = variable2;
      document.getElementById('current-hour2').textContent = variable3;
      document.getElementById('current-hour3').textContent = variable4;
      document.getElementById('current-hour4').textContent = variable5;
      document.getElementById('current-hour5').textContent = variable6;

      let pic0 = object.list[16].weather[0].icon;
      pic1 += ".svg"
      pic1 = "assets/" + pic1;
      document.getElementById('image1').setAttribute('src', pic1);

      let pic1 = object.list[17].weather[1].icon;
      pic1 += ".svg"
      pic1 = "assets/" + pic1;
      document.getElementById('image2').setAttribute('src', pic2);

      let pic2 = object.list[18].weather[2].icon;
      pic1 += ".svg"
      pic1 = "assets/" + pic1;
      document.getElementById('image3').setAttribute('src', pic3);

      let pic3 = object.list[19].weather[3].icon;
      pic1 += ".svg"
      pic1 = "assets/" + pic1;
      document.getElementById('image4').setAttribute('src', pic4);

      let pic4 = object.list[20].weather[4].icon;
      pic1 += ".svg"
      pic1 = "assets/" + pic1;
      document.getElementById('image5').setAttribute('src', pic5);

      let pic5 = object.list[21].weather[5].icon;
      pic1 += ".svg"
      pic1 = "assets/" + pic1;
      document.getElementById('image6').setAttribute('src', pic6);


  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  // Actually send request to server
  xhr.send();
}

// run this code to make request when this script file gets executed
makeCorsRequest();
