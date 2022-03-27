const Container = document.getElementById('Container')
const Box1 = document.getElementById('Box-1')

for (let i = 1; i <= 1550; i++) {
    // console.log('hi')

    const Boxs = document.createElement('div')
    Boxs.className = 'Boxs'
    Container.append(Boxs)
}

window.addEventListener('resize', () => {
    Container.style.height = window.innerHeight
    Container.style.width = window.innerWidth
    console.log(window.innerHeight,window.innerWidth)
})