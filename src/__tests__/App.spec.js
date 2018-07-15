import {mount, createLocalVue} from '@vue/test-utils'
import App from '../App'

test('Компонент App существует, например', () => {
    const vue = createLocalVue();
    const app = mount(App, { vue });

    expect(app).toBeTruthy();
})