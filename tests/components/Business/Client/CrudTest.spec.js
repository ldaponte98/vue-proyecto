import { mount } from "@vue/test-utils";
import Crud from "../../../src/components/Business/Client/Crud/Crud.vue";

it('Renderizacion correcta componente Crud', () => {
    const mycomponent = mount(Index)
    expect(mycomponent.html()).toMatchSnapshot()
})