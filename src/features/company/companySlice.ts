
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Company {
  id: string;
  name: string;
  address: string;
  selected: boolean;
}

interface CompanyState {
  companies: Company[];
  allSelected: boolean;
  loading: boolean;
}

const initialState: CompanyState = {
  companies: [],
  allSelected: false,
  loading: false,
};

const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany: (state, action: PayloadAction<Company>) => {
      state.companies.push(action.payload);
    },
    updateCompany: (state, action: PayloadAction<Company>) => {
      const index = state.companies.findIndex(company => company.id === action.payload.id);
      if (index !== -1) {
        state.companies[index] = action.payload;
      }
    },
    deleteCompanies: (state, action: PayloadAction<string[]>) => {
      state.companies = state.companies.filter(company => !action.payload.includes(company.id));
    },
    toggleSelectCompany: (state, action: PayloadAction<string>) => {
      const index = state.companies.findIndex(company => company.id === action.payload);
      if (index !== -1) {
        state.companies[index].selected = !state.companies[index].selected;
      }
    },
    toggleSelectAll: (state) => {
      state.allSelected = !state.allSelected;
      state.companies.forEach(company => {
        company.selected = state.allSelected;
      });
    },
    loadCompanies: (state, action: PayloadAction<Company[]>) => {
      state.companies = action.payload;
    },
    loadMoreCompaniesStart: (state) => {
      state.loading = true;
    },
    loadMoreCompaniesSuccess: (state, action: PayloadAction<Company[]>) => {
      state.companies = [...state.companies, ...action.payload];
      state.loading = false;
    },
  },
});

export const {
  addCompany,
  updateCompany,
  deleteCompanies,
  toggleSelectCompany,
  toggleSelectAll,
  loadCompanies,
  loadMoreCompaniesStart,
  loadMoreCompaniesSuccess,
} = companySlice.actions;


export const selectCompanies = (state: any) => state.companies.companies;
export const selectAllSelected = (state: any) => state.companies.allSelected;
export const selectLoading = (state: any) => state.companies.loading;

export default companySlice.reducer;
