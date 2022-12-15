import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';
import renderWithWrappers from '../../tests/wrapper.jsx';

describe('when my header appears', () => {
	it("show my logo's name", () => {
		renderWithWrappers(<Header />);
		expect(screen.getByText('AnimeBonds')).toBeInTheDocument();
	});
});
