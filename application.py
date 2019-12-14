# import necessary files, modules and extensions
from flask import Flask, render_template, request, jsonify
from config import *
from flask_babel import Babel, gettext, ngettext, _
from flask_mysqldb import MySQL
from flask_simple_geoip import SimpleGeoIP
import re, json

# Init App
app = Flask(__name__)

# DB Config and Init
app.config['MYSQL_DB'] = DB_SETTINGS['MYSQL_DB']
app.config['MYSQL_USER'] = DB_SETTINGS['MYSQL_USER']
app.config['MYSQL_PASSWORD'] = DB_SETTINGS['MYSQL_PASSWORD']
app.config['MYSQL_HOST'] = DB_SETTINGS['MYSQL_HOST']
app.config['MYSQL_PORT'] = DB_SETTINGS['MYSQL_PORT']
mysql = MySQL(app)

# Geolocation Config and Init
app.config["GEOIPIFY_API_KEY"] = GEOIPIFY_API_KEY
geoip = SimpleGeoIP(app)

# Babel Config and Init
app.config['LANGUAGES'] = LANGUAGES
app.config['BABEL_DEFAULT_LOCALE'] = BABEL_DEFAULT_LOCALE
babel = Babel(app)

# Get Location of User and return his language
@babel.localeselector
def get_locale():
    data = "english"
    if data == "serbian":
        return "sr"
    elif data == "english":
        return "en"
    else:
        return request.accept_languages.best_match(LANGUAGES)

# Change language on image ALT
@app.route('/get-languageR', methods=['POST'])
def get_language():
    rf = request.form
    for item in rf:
        data = item
    print(data)
    data = json.loads(data)
    print(data)  # data = "english"

# Error Page - 404
@app.errorhandler(404)
def not_found(e):
    return render_template("404.html")

# Home Page route
@app.route('/')
def index():
    name = request.args.get("name", "Guest")
    return render_template("index.html", name=name)

# Questions page route
@app.route('/questions')
def questions():
    return render_template("questions.html")

# Questions from method
@app.route('/questions', methods=['GET', 'POST'])
def questionSave():
    if request.method == 'POST':
        formItem = request.form
        age = int(formItem['age'])
        genre = formItem['genre']
        intensity = int(formItem['intensity'])
        select = formItem.get("select-option")
        ip = request.remote_addr
        # geo = request.geoip_data
        cursor = mysql.connection.cursor()
        cursor.execute("INSERT INTO answer_table(age, genre, intensity) VALUES (%s, %s, %s)", (age, genre, intensity))
        mysql.connection.commit()
        cursor.close()
    if not age or not genre or not intensity or not select:
        return render_template("failure.html")
    cur = mysql.connection.cursor()
    cur.execute("SELECT id FROM answer_table ORDER BY ID DESC LIMIT 1")
    id = str(cur.fetchall())
    id = re.findall('[0-9]+', id)
    id = str(''.join(id))
    cur.close()
    return render_template("success.html", id=id, age=age, genre=genre, intensity=intensity, select=select, ip=ip)

# Get IP address
@app.route("/get_ip", methods=["GET"])
def get_my_ip():
    return jsonify({'ip': request.remote_addr}), 200

# Get Geolocation data
@app.route("/get_geo") #methods=["GET"
def get_geo_data():
    geoip_data = geoip.get_geoip_data()
    # return jsonify({'geo': geoip_data}), 200
    return jsonify(geoData=geoip_data)

# About Questionnaire page
@app.route('/about-project')
def aboutQuestionnaire():
    return render_template("about-project.html")

# About Author page
@app.route('/about-author')
def aboutAuthor():
    return render_template("about-author.html")

# Terms of Use page
@app.route('/terms-and-conditions')
def terms():
    return render_template("terms.html")

# Run if App is init
if __name__ == "__main__":
    app.run(host='127.0.0.1', debug=True)


