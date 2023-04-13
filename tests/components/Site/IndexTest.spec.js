import { mount } from "@vue/test-utils";
import Index from "../../../src/components/Site/Login/Login.vue";

it('Renderizacion correcta componente Index', () => {
    const mycomponent = mount(Index)
    expect(mycomponent.html()).toMatchSnapshot()
})

it('Validar que usuario puede descargar listado', async () =>{
    const textButton = "Descargar resultados";
    const mycomponent = mount(Index)
    mycomponent.setData({ lastDateSync: null })
    await mycomponent.vm.$nextTick()
    expect(mycomponent.text()).not.toMatch(textButton)
});

it('Validar que usuario no pueda descargar listado', async () =>{
    const textButton = "Descargar resultados";
    const mycomponent = mount(Index)
    mycomponent.setData({ lastDateSync: '2022-05-20' })
    await mycomponent.vm.$nextTick()
    expect(mycomponent.text()).toMatch(textButton)
});