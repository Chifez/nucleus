// import { renderHook } from '@testing-library/react';
// import useHash from '../hooks/useHash';
// import { useRouter } from 'next/navigation';

// jest.mock('next/navigation', () => ({
//   useRouter: jest.fn(() => ({
//     asPath: '/about#features',
//   })),
// }));

// describe('useHash hook', () => {
//   it('should return the hash fragment from the URL path', () => {
//     const { result } = renderHook(() => useHash());

//     expect(result.current).toBe('features');
//   });

//   it('should return an empty string if no hash fragment exists', () => {
//     jest.mock('next/navigation', () => ({
//       useRouter: jest.fn(() => ({
//         asPath: '/about',
//       })),
//     }));

//     const { result } = renderHook(() => useHash());

//     expect(result.current).toBe('');
//   });
// });

// useHash.test.js
// import { render, screen } from '@testing-library/react';
// import useHash from '../hooks/useHash';
// import { useRouter } from 'next/router';

// const MockRouter = ({ asPath }) => {
//   useRouter.mockReturnValue({ asPath });
//   return null;
// };

// describe('useHash hook', () => {
//   beforeEach(() => {
//     jest.spyOn(useRouter, 'mockReturnValue');
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should return the hash fragment from the URL path', () => {
//     render(<MockRouter asPath="/about#features" />);

//     expect(screen.getByText(/useHash/i)).toBeInTheDocument(); // Optional check for hook usage
//     expect(useHash()).toBe('features');
//   });

//   it('should return an empty string if no hash fragment exists', () => {
//     render(<MockRouter asPath="/about" />);

//     expect(screen.getByText(/useHash/i)).toBeInTheDocument(); // Optional check for hook usage
//     expect(useHash()).toBe('');
//   });
// });

import { render, act } from '@testing-library/react';
import useHash from '../hooks/useHash';
import { useEffect } from 'react';

// Mock useParams from next/navigation
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));

const mockUseParams = require('next/navigation').useParams;

// Helper component to test the useHash hook
const TestComponent = () => {
  const hash = useHash();
  return <div>{hash}</div>;
};

describe('useHash hook', () => {
  beforeEach(() => {
    mockUseParams.mockReturnValue({});
    Object.defineProperty(window, 'location', {
      value: {
        hash: '',
      },
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the hash fragment from the URL', () => {
    window.location.hash = '#features';

    const { container } = render(<TestComponent />);
    expect(container.textContent).toBe('#features');
  });

  it('should return an empty string if no hash fragment exists', () => {
    window.location.hash = '';

    const { container } = render(<TestComponent />);
    expect(container.textContent).toBe('');
  });

  it('should update hash when the hash changes', () => {
    const { container } = render(<TestComponent />);
    act(() => {
      window.location.hash = '#features';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(container.textContent).toBe('#features');

    act(() => {
      window.location.hash = '#new-feature';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
    expect(container.textContent).toBe('#new-feature');
  });
});
