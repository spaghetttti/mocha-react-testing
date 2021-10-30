import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import SignInComponent from '../lib/sign-in.component';

describe('Sign In component test', () => {
    it('Component fully renders', () => {
        const wrapper = shallow(<SignInComponent/>);
        expect(wrapper.length).to.equal(1);
    })

    it('Initial state check', () => {
        const wrapper = shallow(<SignInComponent/>);
        const email = wrapper.state().email;
        const password = wrapper.state().password;

        expect(email).to.be.defined;
        expect(email).to.equal('');
        expect(password).to.be.defined;
        expect(password).to.equal('');
    })

    it('Handle change testing', () => {
       const wrapper = shallow(<SignInComponent/>)
       wrapper.find('[id="password-input"]').simulate('change', {target: {name: 'password', value: 'Test password'}});
       const password = wrapper.state().password;
       expect(password).to.equal('Test password')
    })
})