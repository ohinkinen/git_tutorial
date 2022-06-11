import http from '../http-common';

const getAll = () => {
    return http.get('');
};

const getById = id => {
    return http.get(`${id}`);
};

const create = data => {
    return http.post('', data);
};

const update = (id, data) => {
    return http.put(`${id}`, data);
};

const deleteById = id => {
    return http.delete(`${id}`);
};

const EmployeeService = {
    getAll,
    getById,
    create,
    update,
    deleteById
};

export default EmployeeService;