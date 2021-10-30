import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import OptionsItem from '../lib/options-item.component';

describe('OptionsItem component test', () => {
    it('Component fully renders', () => {
        const wrapper = shallow(<OptionsItem/>);
        expect(wrapper.length).to.equal(1)
    })
    it('Has 1 Link', () => {
        const wrapper = shallow(<OptionsItem/>);
        expect(wrapper.find(`Link`).length).to.equal(1)
    })
    it('All props are defined and valid', () => {
        const wrapper = shallow(<OptionsItem/>);
        expect(wrapper.props().title).to.be.defined;
        expect(wrapper.props().sub_title).to.be.defined;
        expect(wrapper.props().add_text).to.be.defined;
        expect(wrapper.props().linkTo).to.be.defined;
    })
})
