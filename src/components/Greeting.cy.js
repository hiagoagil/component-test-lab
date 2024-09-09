import Greeting from './Greeting' //Primeiro passo importar o componente

describe('<Greeting />', () => {
    it('Renderiza componente e verifica se está visível', () => {
        cy.mount(< Greeting />) //Segundo passo montar o componente
    })

    it('Rendiriza componente com nome preenchido', () => {
      cy.mount(< Greeting name={'Carla'} />)  // Montando componente definindo seu parâmetro
    })
})