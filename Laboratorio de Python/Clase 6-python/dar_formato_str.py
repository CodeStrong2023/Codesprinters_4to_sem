
#dar formato a un string

nombre = 'joaquin'
edad = 21
mensaje_con_formato = 'Mi nombre es %s y tengo %d años' %(nombre, edad)

#tupla creada
persona = ('Carla','Gomez', 5000.00)
mensaje_con_formato = 'Hola %s %s . Tu sueldo es %.2f' # %persona
#print(mensaje_con_formato %persona)

nombre =  ('Juan')
edad = 22
sueldo = 3000
#mensaje_con_formato = 'nombre {} edad {} sueldo {:.2f}' .format(nombre, edad, sueldo)

#mensaje = 'nombre {0} edad{1} sueldo{2:.2f}'.format(nombre, edad, sueldo)
#print(mensaje)

mensaje = 'nombre {n} edad {e} sueldo {s:.2f}'.format(n=nombre, e=edad, s= sueldo)
#print(mensaje)

diccionario ={'nombre':'Ivan', 'Edad':35, 'Sueldo':8000.00}
mensaje = 'Nombre {dic[nombre]} Edad {dic[Edad]} Sueldo {dic[Sueldo]:.2f}'.format(dic=diccionario)
print(mensaje)