import sys
from logger_base import log
import psycopg2 as bd
from psycopg2 import pool

class Conexion :
    _DATABASE = 'postgres'
    _USENAME = 'postgres'
    _PASSWORD = 'panchito'
    _DB_PORT = '5432'
    _HOST = 'localhost'
    _conexion = None
    _cursor = None

    @classmethod
    def obtenerConexion(cls):
        if cls._conexion is None:
            try:
                cls._conexion = bd.connect(host=cls._HOST, 
                                        user=cls._USENAME,
                                        password=cls._PASSWORD,
                                        port=cls._DB_PORT,
                                        database=cls._DATABASE)
                log.debug(f'Conexión Exitosa :{cls._conexion}')
                return cls._conexion
            except Exception as e:
                log.error(f'Ocurrio un error:{e}')
                sys.exit()
        else:
            return cls._conexion


    @classmethod
    def obtenerCursor(cls):
        if cls._cursor is None:
            try:
                cls._cursor = cls.obtenerConexion().cursor()
                log.debug(f'Se abrió correctamente el cursor:{cls._cursor}')
                return cls._cursor
            except Exception as e:
                log.error(f'Ocurrió un error: {e}')
                sys.exit()
        else:
            return cls._cursor

if __name__ == '__main__' :
    Conexion.obtenerConexion()
    Conexion.obtenerCursor()