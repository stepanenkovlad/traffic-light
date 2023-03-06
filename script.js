const trafficLightNode = document.querySelector('.js-traffic-light')
const btnNode = document.querySelector('.js-btn')

initTrafficLight(trafficLightNode)

btnNode.addEventListener('click', function() {
    changeLight(trafficLightNode)
})