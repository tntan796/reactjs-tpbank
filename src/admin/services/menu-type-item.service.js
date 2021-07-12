import AxiousService from '../../services/axios-service';
import * as queryString from 'querystring';

const baseUrl = 'https://localhost:44394/api';

export const getMenuTypeItems = (params) => {
    return AxiousService.get(`${baseUrl}/MenuTypeItem?${queryString.stringify(params)}`);
}