import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';
import { recipes } from './data/recipes';

const renderAt = (url: string) =>
  render(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>,
  );

test('landing page shows the blend description', () => {
  renderAt('/');
  expect(screen.getByText(/Italian seasoning/)).toBeInTheDocument();
});

test('recipe URL parameter renders that recipe', () => {
  renderAt('/?recipe=3');
  expect(screen.getByRole('heading', { level: 1, name: recipes[2].title })).toBeInTheDocument();
});

test('unknown recipe shows a not-found message', () => {
  renderAt('/?recipe=999');
  expect(screen.getByRole('alert')).toBeInTheDocument();
});

test('clicking a menu card switches recipe and arrows scroll the carousel', async () => {
  const user = userEvent.setup();
  renderAt('/?recipe=1');
  await user.click(screen.getByRole('link', { name: recipes[1].title }));
  expect(screen.getByRole('heading', { level: 1, name: recipes[1].title })).toBeInTheDocument();

  const prev = screen.getByRole('button', { name: 'Previous recipes' });
  const next = screen.getByRole('button', { name: 'Next recipes' });
  expect(prev).toBeDisabled();
  await user.click(next);
  expect(prev).toBeEnabled();
});
