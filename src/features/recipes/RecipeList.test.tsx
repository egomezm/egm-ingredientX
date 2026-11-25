import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { RecipeList } from './RecipeList';

vi.mock('../../api/recipes', () => ({
  listRecipes: () =>
    Promise.resolve([
      {
        id: '1',
        title: 'Ingredient X Pasta',
        description: 'Quick pasta',
        instructions: null,
        ingredients: [],
        created_at: '',
      },
    ]),
}));

test('renders recipe titles as links', async () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter>
        <RecipeList />
      </MemoryRouter>
    </QueryClientProvider>,
  );
  expect(await screen.findByRole('link', { name: 'Ingredient X Pasta' })).toHaveAttribute(
    'href',
    '/recipes/1',
  );
});
