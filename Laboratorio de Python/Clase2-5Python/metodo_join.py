
# help(str.join)

tupla_str = ('Hola', 'Alumnos', 'Tecnicatura', 'Universitaria')
mensaje = ' '.join(tupla_str)
print(f'Mensaje: {mensaje}') 

lista_cursos = ('Python', 'Java', 'Angular', 'Spring')
mensaje = ', '.join(lista_cursos)
print(f'Mensaje: {mensaje}') 

cadena = 'HolaMundo'
mensaje = '.'.join(cadena)

diccionario = {'nombre': 'Juan', 'apellido': 'Perez', 'edad': 18}
llaves = '-'.join(diccionario.keys())
valores = '-'join(diccionario.values())
print(f'Llaves: {llaves}, Type: {type(llaves)}')
print(f'Llaves: {valores}, Type: {type(valores)}')