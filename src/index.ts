import axios from 'axios';
import UserTable from './table';

const userTable = new UserTable()
axios.get('https://reqres.in/api/users')
    .then(response => {
        userTable.populate(response.data.data);
    });