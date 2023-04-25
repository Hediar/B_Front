from pymongo import MongoClient
client = MongoClient(
    'mongodb+srv://my_atlas_user:<password>@cluster0.4ytaf.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

movie = db.users.find_one({'name': '가버나움'})
target_star = movie['star']

movies = list(db.movies.find({'star': target_star}, {'_id:False'}))
print(movies)
