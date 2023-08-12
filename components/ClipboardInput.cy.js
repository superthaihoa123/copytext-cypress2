import ClipboardInput from './ClipboardInput.vue'

describe('<ClipboardInput />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ClipboardInput)
  })
})