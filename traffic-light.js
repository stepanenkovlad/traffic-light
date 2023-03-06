const COLORS = {
    red: 'red',
    yellow: 'yellow',
    green: 'green'
}

const CLASSES_BY_COLORS = {
    [COLORS.red]: 'traffic-light_red',
    [COLORS.yellow]: 'traffic-light_yellow',
    [COLORS.green]: 'traffic-light_green'
}

const NEXT_COLOR = {
    [COLORS.red]: [COLORS.yellow],
    [COLORS.yellow]: [COLORS.green],
    [COLORS.green]: [COLORS.red]
}

let firstColor = [COLORS.red]

const initTrafficLight = (node) => {
    node.classList.add(CLASSES_BY_COLORS[firstColor])
}

const changeLight = (node) => {
    let currentColor;
    for (i in CLASSES_BY_COLORS) {
        if (node.classList.contains(CLASSES_BY_COLORS[i])) {
            currentColor = i 
        }
    }
    const nextColor = NEXT_COLOR[currentColor]
    const nextClass = CLASSES_BY_COLORS[nextColor]
    node.classList.remove(CLASSES_BY_COLORS[currentColor])
    node.classList.add(nextClass)
}