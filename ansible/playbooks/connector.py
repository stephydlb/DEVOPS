import mysql.connector

mydb = mysql.connector.connect(
  host="your_host",
  user="your_user",
  password="your_password",
  database="your_database"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM your_table")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)
