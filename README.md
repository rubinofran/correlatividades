# correlatividades
Aplicación web que sirve para calcular correlatividades, esto es, brindar un listado de los exámenes que un estudiante puede rendir dependiendo de las asignaturas previamente aprobadas.

# Link a la aplicación web
https://correlatividades.firebaseapp.com/ 

# En js/sript.js se puede modificar la información para obtener resultados de otra carrera
const materiasPrimero = [  
    { "name": "Nombre materia 1", "code": "A1", "corr": [] },  
    { "name": "Nombre materia 2", "code": "A2", "corr": [] },  
    ...  
]  
const materiasSegundo = [  
    { "name": "Nombre materia 3", "code": "B1", "corr": ["A1" ] },  
    { "name": "Nombre materia 4", "code": "B2", "corr": [..., ...] },  
    ...  
]  
const materiasTercero = [  
    { "name": "Nombre materia 5", "code": "C1", "corr": ["B1", "B2"] },  
    { "name": "Nombre materia 6", "code": "C2", "corr": [... ] },  
    ...  
]  
const tit = 'Nombre del título'  
