import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const useModalParams = (query: string, value: string) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function onOpenModal() {
    const nextSearchParams = new URLSearchParams(searchParams);
    nextSearchParams.set(query, value);
    replace(`${pathname}?${nextSearchParams.toString()}`);
  }

  function onCloseModal() {
    const nextSearchParams = new URLSearchParams(searchParams);
    nextSearchParams.delete(query);
    replace(`${pathname}?${nextSearchParams.toString()}`);
  }
  return { searchParams, onOpenModal, onCloseModal };
};

export default useModalParams;
