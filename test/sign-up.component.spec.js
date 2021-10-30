import React from 'react';
import { shallow } from 'enzyme';
import SignUpComponent from '../lib/sign-up.component'
import { expect } from 'chai';

describe('Sign Up component test', () => {
    it('Component fully renders', () => {
        const wrapper = shallow(<SignUpComponent/>)
        expect(wrapper.length).to.equal(1)
    })

    it('Initial state check', () => {
        const wrapper = shallow(<SignUpComponent/>);
        const displayName = wrapper.state().displayName;
        const email = wrapper.state().email;
        const password = wrapper.state().password;
        const confirmPassword = wrapper.state().confirmPassword;

        expect(displayName).to.be.defined;
        expect(displayName).to.equal('');
        expect(email).to.be.defined;
        expect(email).to.equal('');
        expect(password).to.be.defined;
        expect(password).to.equal('');
        expect(confirmPassword).to.be.defined;
        expect(confirmPassword).to.equal('');
    })

    it('Handle Change testing', () => {
        const wrapper = shallow(<SignUpComponent/>);
        wrapper.find('[id="email input"]').simulate('change', {target: {name: 'email', value:'Test email'}});
        const email = wrapper.state().email;
        expect(email).to.equal('Test email');

        wrapper.find('[id="password input"]').simulate('change', {target: {name: "password", value: "Test password"}});
        const password = wrapper.state().password;
        expect(password).to.equal('Test password')
    })
})  