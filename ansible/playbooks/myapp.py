from flask import Flask, request, render_template, redirect, url_for
import pymysql
import mysql.connector


app = Flask(__name__)

# my Database connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="mesdatas"
)
cursor = db.cursor()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_teacher', methods=['POST'])
def add_teacher(): 
    name = request.form['nom']
    phone = request.form['tel']
    city = request.form['quartier']
    
    query = "INSERT INTO enseignants (nom, tel, quartier) VALUES (%s, %s, %s)"
    values = (nom, tel, quartier)
    cursor.execute(query, values)
    db.commit()
    
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
