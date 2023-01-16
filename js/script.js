/* Es posible modificar el contenido de las materias para otras carreras */
const materiasPrimero = [
    { "name": "Análisis Matemático I", "code": "A1", "corr": [] },
    { "name": "Álgebra, Probabilidades y Estadística", "code": "A2", "corr": [] },
    { "name": "Laboratorio", "code": "A3", "corr": [] },
    { "name": "Programación I", "code": "A4", "corr": [] },
    { "name": "Inglés Técnico I", "code": "A5", "corr": [] },
    { "name": "Economía y Organización", "code": "A6", "corr": [] },
    { "name": "Complementos de Física y QuÍmica", "code": "A7", "corr": [] },
]
const materiasSegundo = [
    { "name": "Modelos Discretos", "code": "B1", "corr": ["A2", "A4"] },
    { "name": "Análisis Matemático II", "code": "B2", "corr": ["A1"] },
    { "name": "Programación II", "code": "B3", "corr": ["A2", "A4", "A5"] },
    { "name": "Sistemas de Computación I", "code": "B4", "corr": ["A3", "A4"] },
    { "name": "Estructura y Base de Datos", "code": "B5", "corr": ["A2", "A4"] },
    { "name": "Inglés Técnico II", "code": "B6", "corr": ["A5"] }
]
const materiasTercero = [
    { "name": "Probabilidad Aplicada", "code": "C1", "corr": ["B1", "B2"] },
    { "name": "Técnicas Digitales", "code": "C2", "corr": ["A7", "B1", "B4"] },
    { "name": "Programación III", "code": "C3", "corr": ["B3", "B4", "B5"] },
    { "name": "Sistemas de Computación II", "code": "C4", "corr": ["B4", "B5", "B6"] },
    { "name": "Seminario", "code": "C5", "corr": ["B1", "B3", "B4", "B5"] },
    { "name": "Inglés Técnico III", "code": "C6", "corr": ["B6"] },
    { "name": "Problemática de la Realidad Contemporánea", "code": "C7", "corr": [] }
]
const tit = 'Técnico Superior en Informática Aplicada'
/* ********************************************************************* */

const materias = materiasPrimero.concat(materiasSegundo, materiasTercero)

/* Acción secundaria, limpia la lista de posibles materias */
function clearPosibles(ul) {
    const lista = [...document.getElementsByClassName('posible')] 
    /* console.log(lista.length) */
    for(let i = 0; i < lista.length; i++) {
        ul.removeChild(lista[i])
    }
}

/* Acción secundaria, selecciona o des-selecciona todas las materias para volver a consultar */
function setMateriasCheckbox(limpiar) {
    console.clear()
    if(limpiar) {
        const ul = document.getElementById('posibles')
        clearPosibles(ul)
    }
    const resultados = [...document.querySelectorAll('div')]    
    const seleccionadas = resultados.filter(x => x.id.includes('MateriaID'))
    seleccionadas.map(x => {
        x.firstChild.checked = limpiar ? false : true
    })
    limpiar ? console.log('Todas las materias fueron des-seleccionadas y la lista de asignaturas que puede rendir fue eliminada') : console.log('Todas las materias fueron seleccionadas')
}

/* Acción principal */
function materiasSeleccionadas() {    
    console.clear()
    const ul = document.getElementById('posibles')
    clearPosibles(ul)

    const resultados = [...document.querySelectorAll('div')]    
    const seleccionadas = resultados.filter(x => x.id.includes('MateriaID') && x.firstChild.checked)
    
    const codigos = []
    console.log(`Materias seleccionadas: ${seleccionadas.length}`)
    seleccionadas.map(x => {
        console.log(x.lastChild.textContent)
        result = x.id.split('MateriaID')
        console.log(`Código: ${result[1]}`)
        codigos.push(result[1])
    })
    /* console.log(codigos) */

    // Primer filtrado
    let posibles = materias.filter(x => !codigos.includes(x.code))
    // Segundo filtrado
    posibles = posibles.filter(x => x.corr.every(y => codigos.includes(y)))

    console.log(`Materias que puede rendir: ${posibles.length}`)
    posibles.map(x => {
        console.log(x)
        const li = document.createElement('li')
        li.className = 'posible'
        li.textContent = x.name
        ul.appendChild(li)
    })
}

/* Función principal, se encarga de crear un título con el nombre de la asignatura */
function mostrarTit() {
    const tecnicatura = document.getElementById('tecnicatura')
    const h2 = document.createElement('h2')
    h2.textContent = tit
    tecnicatura.appendChild(h2)
}

/* Función principal, se encarga de crear los listados de opciones a seleccionar */
function mostrarListas() {

    const primero = document.getElementById('primero')
    materiasPrimero.map(x => {
        const subdiv = document.createElement('div')
        const input = document.createElement('input') 
        const label = document.createElement('label')
        input.type = 'checkbox'
        label.textContent = x.name

        subdiv.className = 'form-check'
        subdiv.id = `MateriaID${x.code}`
        input.className = 'form-check-input'
        label.className = 'form-check-label'

        subdiv.appendChild(input)
        subdiv.appendChild(label)
        primero.appendChild(subdiv)

    })

    const segundo = document.getElementById('segundo')
    materiasSegundo.map(x => {
        const subdiv = document.createElement('div')
        const input = document.createElement('input') 
        const label = document.createElement('label')
        input.type = 'checkbox'
        label.textContent = x.name

        subdiv.className = 'form-check'
        subdiv.id = `MateriaID${x.code}`
        input.className = 'form-check-input'
        label.className = 'form-check-label'

        subdiv.appendChild(input)
        subdiv.appendChild(label)
        segundo.appendChild(subdiv) 

    })

    const tercero = document.getElementById('tercero')
    materiasTercero.map(x => {
        const subdiv = document.createElement('div')
        const input = document.createElement('input') 
        const label = document.createElement('label')
        input.type = 'checkbox'
        label.textContent = x.name

        subdiv.className = 'form-check'
        subdiv.id = `MateriaID${x.code}`
        input.className = 'form-check-input'
        label.className = 'form-check-label'

        subdiv.appendChild(input)
        subdiv.appendChild(label)
        tercero.appendChild(subdiv) 
        
    })
}

mostrarTit()
mostrarListas()
