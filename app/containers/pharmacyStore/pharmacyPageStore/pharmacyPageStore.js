import { create } from 'zustand';

const PharmacyPaginationStore = create((set, get) => ({
  currentPage: 1,
  itemsPerPage: 9,
  setCurrentPage: (page) => set({ currentPage: page }),
  totalPages: (pharmacy) => Math.ceil(pharmacy.length / get().itemsPerPage),
  startIndex: () => (get().currentPage - 1) * get().itemsPerPage,
  endIndex: (pharmacy) => get().startIndex(pharmacy) + get().itemsPerPage,
  currentItems: (pharmacy) => pharmacy.slice(get().startIndex(pharmacy), get().endIndex(pharmacy)),
}));

export default PharmacyPaginationStore;
