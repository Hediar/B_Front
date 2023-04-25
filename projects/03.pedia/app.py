from pymongo import MongoClient
from bs4 import BeautifulSoup
import requests
from flask import Flask, render_template, request, jsonify
import mongo
app = Flask(__name__)

client = MongoClient(mongo.mongourl)
db = client.dbsparta

# index.html을 준다.


@app.route('/')
def home():
    return render_template('index.html')

# smple_give를 받아서 작업 수행


@app.route("/movie", methods=["POST"])
def movie_post():
    url_receive = request.form['url_give']
    comment_receive = request.form['comment_give']
    star_receive = request.form['star_give']

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    data = requests.get(url_receive, headers=headers)
    soup = BeautifulSoup(data.text, 'html.parser')

    ogtitle = soup.select_one('meta[property="og:title"]')['content']
    ogimage = soup.select_one('meta[property="og:image"]')['content']
    ogdesc = soup.select_one('meta[property="og:description"]')['content']

    doc = {
        'title': ogtitle,
        'image': ogimage,
        'desc': ogdesc,
        # 'url': url_receive,
        'comment': comment_receive,
        'star': star_receive

    }
    db.movies.insert_one(doc)

    return jsonify({'msg': '저장 완료!'})


@app.route("/movie", methods=["GET"])
def movie_get():
    all_movies = list(db.movies.find({}, {'_id': False}))
    return jsonify({'result': all_movies})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
