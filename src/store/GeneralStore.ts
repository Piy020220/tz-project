import {create} from 'zustand';

import { InformationFormData } from "../features/Information/Schema";
import { RequisitesFormData } from '../features/Requisites/Schema';
import { ContactsFormData } from '../features/Contacts/Schema';

interface StoreState {
  data: InformationFormData | null;
  setData: (info: InformationFormData) => void;
  clearData: () => void;
  
  requisitesData: RequisitesFormData | null;                  
  setRequisites: (req: RequisitesFormData) => void;       
  clearRequisites: () => void;                          

  contactData: ContactsFormData | null;                  
  setContacts: (cont: ContactsFormData) => void;       
  clearContacts: () => void;                          
}

export const useStore = create<StoreState>((set) => ({
  data: null,
  setData: (info) => set({ data: info }),
  clearData: () => set({ data: null }),

  requisitesData: null,                                    // <== добавили
  setRequisites: (req) => set({ requisitesData: req }),    // <== добавили
  clearRequisites: () => set({ requisitesData: null }),    // <== добавили

  contactData: null,                                    // <== добавили
  setContacts: (cont) => set({ contactData: cont }),    // <== добавили
  clearContacts: () => set({ contactData: null }),    // <== добавили

}));
