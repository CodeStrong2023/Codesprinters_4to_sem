
# help(str.split)

cursos = 'Java Javascript Node Python Diseño'
lista_cursos = cursos.split()
print(f'Lista de cursos: {lista_cursos}')
print(type(lista_cursos))

cusros_separados_coma = 'Java,Python,Node,Javascript,Spring'
lista_cursos = cusros_separados_coma.split(',', 2)
print(f'Lista de cursos: {lista_cursos}')
print(len(lista_cursos))