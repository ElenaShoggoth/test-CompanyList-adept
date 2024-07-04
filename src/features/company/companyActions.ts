import { Dispatch } from 'redux';
import { loadMoreCompaniesSuccess } from './companySlice';

export const loadMoreCompanies = (): any => async (dispatch: Dispatch<any>, getState: () => any) => {
  const state = getState();
  const currentCompanies = state.companies.companies;
  // так как по компаниям хардкод, 
  // для удобства установила лимит для подгружаемых "с бэка" данных
  // можно заменить на число побольше 10 000+
  const maxLimit = 500;

  const moreCompanies = Array.from({ length: 10 }, (_, index) => ({
    id: `${currentCompanies.length + index}`,
    name: `Company ${currentCompanies.length + index + 1}`,
    address: `Address ${currentCompanies.length + index + 1}`,
    selected: false,
  }));

  const totalCompanies = currentCompanies.length + moreCompanies.length;
  if (totalCompanies > maxLimit) {
    const remainingSpace = maxLimit - currentCompanies.length;
    moreCompanies.splice(remainingSpace);
  }

  dispatch(loadMoreCompaniesSuccess(moreCompanies));
};
