import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import FormInput from '../lib/form-input.component'

describe('Form Input component test', () => {
    it('Component fully renders', () => {
        const wrapper = shallow(<FormInput/>);
        expect(wrapper.length).to.equal(1)
    })
    it('All props are defined and valid', () => {
        const wrapper = shallow(<FormInput/>);
        expect(wrapper.props().label).to.be.defined;
        expect(wrapper.props().handleChange).to.be.defined;
        expect(wrapper.props().otherProps).to.be.defined; 
    })
})