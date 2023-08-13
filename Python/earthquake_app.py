import requests

start_time = input("Enter the start time ")
end_time = input("Enter the end time ")
latitude = input("Enter the latitude ")
longitude = input("Enter the longitude ")
max_radius_km = input("Enter the max radius in km ")
min_magnitude = input("Enter the min magnitude ")

url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?'
response = requests.get(url, headers={'Accept':'application/json'}, params={
		'format':'geojson',
		'starttime': start_time,
		'endtime': end_time,
		'latitude': latitude,
		'longitude': longitude,
		'maxradiuskm': max_radius_km,
        'minmagnitude': min_magnitude
	})

data = response.json()

for i in range(len(data['features'])):
    print(f"{i+1} Place: {data['features'][i]['properties']['place']}. Magnitude {data['features'][i]['properties']['mag']}")


