import mysql.connector

class Conectar():
    def __init__(self) -> None:
        try:
            self.conexion = mysql.connector.connect(
                host='localhost',
                port='3360',
                user='root',
                password='Facundo95!',
                db='cbafly'
                )
        except mysql.connector.Error as descriptionError:
            print("No se conecto",descriptionError)

#selecionar usuario
def SelecionarUsuario(self):
    if self.conexion.is_connected():
        try:
            cursor = self.conexion.cursor()
            sentenciaSQL="SELECT * FROM usuarioregistrado"
            cursor.execute(sentenciaSQL)
            resultadoSelect = cursor.fetchall()

            return resultadoSelect
        
        except:
            print("no se puede conectar a la base de datos")

#Eliminacion de usuario
def EliminarUsuario(self, ID):
    if self.conexion.is_connected():
        try:
            cursor = self.conexion.cursor()
            sentenciaSQL ="DELETE FROM usuarioregistrado WHERE `usuarioregistrado`.`idUsuariosRegistrados` = 1"
            cursor.execute(sentenciaSQL)

            self.conexion.commit()
            self.conexion.close()
        except:
            print("no se puede conectar a la base de dato")

#insertar usuario
def InsertarUsuario(self,nombre,apellido,contraseña,email):
    if self.conexion.is_connected():
        try:
            cursor = self.conexion.cursor()
            sentenciaSQL="INSERT INTO usuarioregistrado VALUES(%s,%s,%s,%s)"
            data=(nombre,apellido,contraseña,email)

            cursor.execute(sentenciaSQL, data)
            self.conexion.commit()
            self.conexion.close()

        except:
            print("no se puede conectar a labase de datos")

#update de usuario
def ActualizarUsuario(self,nombre,apellido,contraseña,email):
    if self.conexion.is_connected():
        try:
            cursor = self.conexion.cursor()
            sentenciaSQL="UPDATE `usuarioregistrado` SET %s,%s,%s,%s WHERE 1"
            data=(nombre,apellido,contraseña,email)

            cursor.execute(sentenciaSQL,data)
            self.conexion.commit()
            self.conexion.close()
        except:
            print("No se pudo conectar a la base de datos")
