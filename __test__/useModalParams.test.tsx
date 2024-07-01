import { renderHook, act } from '@testing-library/react';
import useModalParams from '../hooks/useModalParams';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

const mockUseRouter = require('next/navigation').useRouter;
const mockUsePathname = require('next/navigation').usePathname;
const mockUseSearchParams = require('next/navigation').useSearchParams;

describe('useModalParams hook', () => {
  beforeEach(() => {
    mockUseRouter.mockReturnValue({
      replace: jest.fn(),
    });
    mockUsePathname.mockReturnValue('/test-path');
    mockUseSearchParams.mockReturnValue(new URLSearchParams(''));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set query parameter correctly on open modal', () => {
    const { result } = renderHook(() => useModalParams('modal', 'open'));

    act(() => {
      result.current.onOpenModal();
    });

    expect(mockUseRouter().replace).toHaveBeenCalledWith(
      '/test-path?modal=open'
    );
  });

  it('should set query parameter correctly with a specific value on open modal', () => {
    const { result } = renderHook(() => useModalParams('modal', 'open'));

    act(() => {
      result.current.onOpenModal('specificValue');
    });

    expect(mockUseRouter().replace).toHaveBeenCalledWith(
      '/test-path?modal=specificValue'
    );
  });

  it('should remove query parameter correctly on close modal', () => {
    mockUseSearchParams.mockReturnValue(new URLSearchParams('modal=open'));
    const { result } = renderHook(() => useModalParams('modal', 'open'));

    act(() => {
      result.current.onCloseModal();
    });

    expect(mockUseRouter().replace).toHaveBeenCalledWith('/test-path');
  });
});
