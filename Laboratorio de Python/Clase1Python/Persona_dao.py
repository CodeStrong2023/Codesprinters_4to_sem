from capa_datos_persona.Conexion import Conexion
from capa_datos_persona.persona import Persona
from capa_datos_persona.cursor_del_pool import cursorDelPool
from logger_base import log


class PersonaDao:
    """
    DAO: Data Access Object
    CRUD:
            create -> Insertar
            Read -> Seleccionar
            Update -> Actualizar
            Delete -> Eliminar
    """
    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona'
    _INSERTAR = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    _ELIMINAR = 'DELETE FROM persona WHERE id_persona=%s'

    # Definicion de metodos de clase
    @classmethod
    def seleccionar(cls):
        with cursorDelPool() as cursor:
            cursor.execute(cls._SELECCIONAR)
            registros = cursor.fetchall()
            personas = []  # lista
            for registro in registros:
                persona = Persona(registro[0], registro[1], registro[2], registro[3])
                personas.append(persona)
            return personas

    @classmethod
    def insertar(cls, persona):
        with cursorDelPool() as cursor:
            valores = (persona.nombre, persona.apellido, persona.email)
            cursor.execute(cls._INSERTAR, valores)
            log.debug(f'Persona insertada: {persona}')
            return cursor.rowcount


    @classmethod
    def actualizar(cls, persona):
        with cursorDelPool as cursor:
            valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
            cursor.execute(cls._ACTUALIZAR, valores)
            log.debug(f'Persona actualizada: {persona}')
            return cursor.rowcount

    @classmethod
    def eliminar(cls, persona):
        with cursorDelPool as cursor:
            valores = (persona._id_persona,)
            cursor.execute(cls._ELIMINAR, valores)
            log.debug(f'Los objetos eliminados son: {persona}')
            return cursor.rowcount




if __name__ == '__main__':
    # Eliminar un registro
    persona1 = Persona(id_persona=4)
    personas_eliminadas = PersonaDao.eliminar(persona1)
    log.debug(f'Personas eliminadas: {personas_eliminadas}')

    # Actualizar un registro
    persona1 = Persona(1, 'Juan', 'Pena', 'jpena@mail.com')
    personas_actualizadas = PersonaDao.actualizar(persona1)
    log.debug(f'Personas actualizadas: {personas_actualizadas}')

    # Insertar un registro
    persona1 = Persona(nombre='Mateo', apellido='Torres', email='tmateo@mail.com')
    personas_insertadas = PersonaDao.insertar(persona1)
    log.debug(f'Personas insertadas: {personas_insertadas}')

    # Seleccionar objetos
    personas = PersonaDao.seleccionar()
    for persona in personas:
        log.debug(persona)