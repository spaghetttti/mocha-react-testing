import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import matchSnapshot from 'mocha-chai-snapshot';

import HomePage from '../lib/homepage.component';

describe('Home Page testing', () => {
    it('Snapshot matching', () => {
        const wrapper = shallow(<HomePage/>)
        expect(wrapper).matchSnapshot();
    })
})
