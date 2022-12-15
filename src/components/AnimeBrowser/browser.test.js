import { fireEvent, render, screen } from '@testing-library/react';
import AnimeBrowser from '.';
import renderWithWrappers from '../../tests/wrapper.jsx';

describe('Search Anime Component', () => {
	it('should input text in the search bar', async () => {
		renderWithWrappers(<AnimeBrowser />);
		const inputSearch = await screen.findByPlaceholderText(
			'Search your favorite animes'
		);
		fireEvent.change(inputSearch, { target: { value: 'JoJo' } });
		expect(inputSearch.value).toBe('JoJo');
	});
});
