import requests, csv
import json
import time
import numpy as np

CSVHEADER_city = ["country", "city", "state", "latitude", "city_id", "longitude"]
CSVHEADER_indexes = ["health_care_index","crime_index","pollution_index","traffic_index","quality_of_life_index","cpi_and_rent_index","groceries_index","safety_index","cityname","rent_index","property_price_to_income_ratio"]
allcitylist=[]

def getcityinfo():
	params = {
	  "api_key": "ha1vwlcog85my4",
	  "format": "csv"
	  }
	r = requests.get('https://www.numbeo.com/api/cities?api_key=ha1vwlcog85my4&country=United+States', params=params)
	data = json.loads(r.text)
	print(data)
	return data

def getinfo():
	params = {
	  "api_key": "ha1vwlcog85my4",
	  "format": "csv"
	  }
	indexlist=[]
	pricelist=[]
	for city in allcitylist[0:10]:  
		if len(city)>0:
			if not ' ' in city:
				print(city)
				apiString_index = 'https://www.numbeo.com/api/indices?api_key=ha1vwlcog85my4&query='+city
				apiString_price = 'https://www.numbeo.com/api/city_prices?api_key=ha1vwlcog85my4&query='+city
			else:
				print(city)
				strappend= city.replace(" ", "+")
				apiString_index = 'https://www.numbeo.com/api/indices?api_key=ha1vwlcog85my4&query='+city
				apiString_price = 'https://www.numbeo.com/api/city_prices?api_key=ha1vwlcog85my4&query='+city
			r = requests.get(apiString_index, params=params)
			s = requests.get(apiString_price, params=params)
			data_index = json.loads(r.text)
			data_price = json.loads(s.text)
			if not 'error' in data_index:
				indexlist.append(data_index)
			if not 'error' in data_price:
				pricelist.append(data_price)
	return indexlist, pricelist


def splitcityname(str):
	a=''
	b=''
	if "," not in str:
		a=str
		b= ''
	elif str.count(',')<2:
	 	a, b = str.split(",")
	elif str.count(',')>2:
		a, b, garbage = str.split(",")

	allcitylist.append(a)
	return a, b

def savecities(data):
	with open('citylist.csv', 'w+') as citylist:
		writer = csv.DictWriter(citylist, fieldnames = CSVHEADER_city)
		writer.writeheader()
		
		for ct in data['cities']:
		 	country = ct["country"]
		 	location = ct["city"]

		 	#split city and state(and in some cases country name)
		 	city, state = splitcityname(location)

		 	# if value not present enter null
		 	if not 'latitude' in ct :
		 		latitude = ''
		 	else:
		 		latitude = ct["latitude"]

		 	#if value not present enter null
		 	if not 'city_id' in ct :
		 		city_id = ''
		 	else:
		 		city_id = ct["city_id"]

		 	#  if value not present enter null
		 	if not 'longitude' in ct :
		 		longitude = ''
		 	else:
		 		longitude = ct["longitude"]

		 	row = {}
		 	row["country"] = country
		 	row["city"] = city
		 	row["state"] = state
		 	row["latitude"] = latitude
		 	row["city_id"] = city_id
		 	row["longitude"] = longitude

		 	writer.writerow(row)


def saveindices(data):
	with open('citylist.csv', 'r+') as citylist:
		writer = csv.DictWriter(citylist, fieldnames = CSVHEADER_city)
		writer.writeheader()
		
		for ct in data['cities']:
		 	country = ct["country"]
		 	location = ct["city"]

		 	#split city and state(and in some cases country name)
		 	city, state = splitcityname(location)

		 	# if value not present enter null
		 	if not 'latitude' in ct :
		 		latitude = ''
		 	else:
		 		latitude = ct["latitude"]

		 	#if value not present enter null
		 	if not 'city_id' in ct :
		 		city_id = ''
		 	else:
		 		city_id = ct["city_id"]

		 	#  if value not present enter null
		 	if not 'longitude' in ct :
		 		longitude = ''
		 	else:
		 		longitude = ct["longitude"]

		 	row = {}
		 	row["country"] = country
		 	row["city"] = city
		 	row["state"] = state
		 	row["latitude"] = latitude
		 	row["city_id"] = city_id
		 	row["longitude"] = longitude

		 	writer.writerow(row)



if __name__ == "__main__":
	start_time = time.time()
	cities = getcityinfo()
	savecities(cities)
	# print(allcitylist[0:10])
	indices, prices = getinfo()
	# print(indices, prices)
	# saveindices(indices)
	print("--- %s seconds ---" % (time.time() - start_time))

