import requests, csv
import json
import time
import numpy as np

# https://www.numbeo.com/api/indices?api_key=ha1vwlcog85my4&query=Midlothian

CSVHEADER_city = ["country", "city", "state", "latitude", "city_id", "longitude"]
CSVHEADER_indexes = ["health_care_index","crime_index","pollution_index","traffic_index","quality_of_life_index","groceries_index","safety_index","city", "state","rent_index","property_price_to_income_ratio"]
CSVHEADER_prices =  []
allcitylist=[]

def getcityinfo():
	params = {
	  "api_key": "ha1vwlcog85my4",
	  "format": "csv"
	  }
	r = requests.get('https://www.numbeo.com/api/cities?api_key=ha1vwlcog85my4&country=United+States', params=params)
	data = json.loads(r.text)
	# print(data)
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
	garbage=''
	# print("printing str", str)
	if "," not in str:
		a=str
		b= ''
	elif str.count(',')<2:
	 	a, b = str.split(",")
	elif str.count(',')>2:
		a, b, garbage = str.split(",")

	allcitylist.append(a)
	# print("city=", a , "state=", b, "country=", garbage)
	return a, b

def saveindices(data):
	with open('indexlist.csv', 'w+') as indexlist:
		writer = csv.DictWriter(indexlist, fieldnames = CSVHEADER_indexes)
		writer.writeheader()
		# CSVHEADER_indexes = ["health_care_index","crime_index","pollution_index","traffic_index","quality_of_life_index","cpi_and_rent_index","groceries_index","safety_index","cityname","rent_index","property_price_to_income_ratio"]

		for ind in data[:]:
			 # if value not present enter null
		 	if not 'health_care_index' in ind :
		 		health_care_index = ''
		 	else:
		 		health_care_index = ind["health_care_index"]
			
		 	if not 'crime_index' in ind:
		 		crime_index = ''
		 	else:
		 		crime_index = ind["crime_index"]

		 	if not 'pollution_index' in ind:
		 		pollution_index = ''
		 	else:
		 		pollution_index = ind["pollution_index"]

		 	if not 'traffic_index' in ind:
		 		traffic_index = ''
		 	else:
		 		traffic_index = ind["traffic_index"]

		 	if not 'quality_of_life_index' in ind:
		 		quality_of_life_index = ''
		 	else:
		 		quality_of_life_index = ind["quality_of_life_index"]

		 	if not 'groceries_index' in ind:
		 		groceries_index = ''
		 	else:
		 		groceries_index = ind["groceries_index"]

		 	if not 'safety_index' in ind:
		 		safety_index = ''
		 	else:
		 		safety_index = ind["safety_index"]

		 	location = ind["name"]
		 	
		 	print("loooooookout for", location)
		 	#split city and state(and in some cases country name)
		 	city, state = splitcityname(location)
		 	# print("---------------",city,"----------", state)

		 	if not 'rent_index' in ind:
		 		rent_index = ''
		 	else:
		 		rent_index = ind["rent_index"]

		 	if not 'property_price_to_income_ratio' in ind:
		 		property_price_to_income_ratio = ''
		 	else:
		 		property_price_to_income_ratio = ind["property_price_to_income_ratio"]

		 	row = {}
		 	row["health_care_index"] = health_care_index
		 	row["crime_index"] = crime_index
		 	row["pollution_index"] = pollution_index
		 	row["traffic_index"] = traffic_index
		 	row["quality_of_life_index"] = quality_of_life_index
		 	row["groceries_index"] = groceries_index
		 	row["safety_index"] = safety_index
		 	row["city"] = city
		 	row["state"] = state
		 	row["rent_index"] = rent_index
		 	row["property_price_to_income_ratio"] = property_price_to_income_ratio

		 	writer.writerow(row)


def savecities(data):
	with open('citylist.csv', 'r+') as citylist:
		writer = csv.DictWriter(citylist, fieldnames = CSVHEADER_city)
		writer.writeheader()
		
		for ct in data['cities']:
		 	country = ct["country"]
		 	location = ct["city"]

		 	#split city and state(and in some cases country name)
		 	print("loc is", location)
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
	# print(allcitylist[:])
	indices, prices = getinfo()
	print(indices)
	saveindices(indices)
	print("--- %s seconds ---" % (time.time() - start_time))

