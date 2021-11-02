import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';
import React from 'react';

import {HeaderComponent} from '../lib/header.component';

describe('Header component test', () => {
    it('Component fully renders', () => {
        const wrapper = shallow(<HeaderComponent/>);
        expect(wrapper.length).to.equal(1)
    })

    //it('All props are defined and valid',() => {})

    it('All state is defined and valid', () => {
        const wrapper = shallow(<HeaderComponent/>);
        const addClass = wrapper.state().addClass;
        expect(addClass).to.equal(false)
    })

    it('Testing toggle function', () => {
        const wrapper = shallow(<HeaderComponent/>);
        wrapper.find('[id="trigger toggle"]').simulate('click');      
        const addClass = wrapper.state().addClass;
        //expect(addClass).to.equal(true)
    });
})