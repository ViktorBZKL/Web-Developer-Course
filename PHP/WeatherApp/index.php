<?php
  
  error_reporting(E_ERROR | E_PARSE);

  $weather = "";
  $error = "";
  
  if(isset($_GET['city'])){
    $API = "";
    $urlContent = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=".$_GET['city']."&units=metric&appid=".$API);
    $forcastArray = json_decode($urlContent, true);  


    if($forcastArray['cod'] == 200){
      $weather = 'The weather in '.$_GET['city'].' is '.$forcastArray['weather'][0]['description'];
      $weather = $weather.'. The temperature is '.$forcastArray['main']['temp'].'&#8451;. The speed of wind is '.$forcastArray['wind']['speed'].' m/s.';
    } else {
      $error = "The city name is incorrect, please try another name";
    }
  }

?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    
    <link rel="stylesheet" href="styles/style.css">

    <title>Weather App</title>

  </head>
  <body>
    <div class="container" id="mainDiv">
      <h1>Weather In The City</h1>
      <form>
        <div class="form-group">
          <label for="city">Input a city name</label>
          <input class="form-control" id="city" name="city" aria-describedby="Forcast city" placeholder="Input a city name">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>

    <div id="forecastDiv">
        <?php
          if($weather){
            echo '<div class="alert alert-primary" role="alert">'.$weather.'</div>';
          } else if($error){
            echo '<div class="alert alert-danger" role="alert">'.$error.'</div>';
          }
        ?>
    </div>
  </body>
</html>