import mysql.connector
import sys

db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd=sys.argv[1]
)
cursor = db.cursor()
query = ("USE test")
cursor.execute(query)

query = ("SELECT * FROM pet")
cursor.execute(query)

for (first_name) in cursor:
    print(first_name)

print(db)
# print(cursor.fetchall())

cursor.close()
db.close()

