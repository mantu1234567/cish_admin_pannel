import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  title: null,
  details: null,
  licenseFeeGlobal: null,
  licenseFeeDomestic: null,
  royalty: null,
  licensingTerritory: null,
  targetCustomers: null,
  files: [],
  departement: null,
  departementName: null,
  designation: null,
  icarEmail: null,
  alternateEmail: null,
  specialization: null,
  joiningDate: null,
  mscFrom: null,
  phdFrom: null
};


const VarietiesContext = createContext();

const varietiesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_FILES':
      return { ...state, files: action.files };
    case 'RESET_FIELDS':
      return {
        title: '',
        details: '',
        licenseFeeGlobal: '',
        licenseFeeDomestic: '',
        royalty: '',
        licensingTerritory: '',
        targetCustomers: '',
        files: [],
      };
    default:
      return state;
  }
};


export const VarietiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(varietiesReducer, initialState);

  return (
    <VarietiesContext.Provider value={{ state, dispatch }}>
      {children}
    </VarietiesContext.Provider>
  );
};

export const useVarieties = () => useContext(VarietiesContext);
