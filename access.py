import mysql.connector
import sys

db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd=sys.argv[1]
)

print(db)