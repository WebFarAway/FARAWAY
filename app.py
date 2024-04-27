from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'roundhouse.proxy.rlwy.net'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'XRjRVAizVKWJKGRkwvSQGWcKaPcfzGuz'
app.config['MYSQL_DB'] = 'FarAway'

mysql = MySQL(app)

@app.route('/')
def index():
    return render_template('inicioPagina.html')

@app.route('/opRegister')
def register():
    return render_template('opRegistro.html')

@app.route("/registerUser")
def registerUser():
    return render_template("OpUserRegister.html")

@app.route('/opLogin')
def opLogin():
    return render_template('opLogin.html')

@app.route('/loginUser', methods=['POST'])
def loginUser():
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
                return redirect(url_for('opLogin'))

        elif email and password:
            cursor.execute('SELECT * FROM usuarios WHERE correo= %s AND contraseña = %s', (email, password))
            usuario = cursor.fetchone()

            if usuario:
                
                return redirect(url_for('opLogin'))

    return ""

if __name__ == '__main__':
    app.run(debug=True, port=3000)
