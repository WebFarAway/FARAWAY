from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '1234567'
app.config['MYSQL_DB'] = 'faraway'

mysql = MySQL(app)

@app.route('/interfaz_login')
def interfaz_login():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        tipo_documento = request.form['tipo_documento']
        documento = request.form['documento']
        password = request.form['password']
        email = request.form['email']
        cursor = mysql.connection.cursor()

        if tipo_documento and documento and password:
            cursor.execute('SELECT * FROM usuarios WHERE tipo_documento = %s AND documento = %s AND contraseña = %s', (tipo_documento, documento, password))
            usuario = cursor.fetchone()

            if usuario:
                return redirect(url_for('interfaz_login'))

        elif email and password:
            cursor.execute('SELECT * FROM usuarios WHERE correo= %s AND contraseña = %s', (email, password))
            usuario = cursor.fetchone()

            if usuario:
                return redirect(url_for('interfaz_login'))

    return "Datos incorrectos"

if __name__ == '__main__':
    app.run(debug=True, port=3000)
