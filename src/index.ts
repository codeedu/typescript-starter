import axios from 'axios'; //TypeScript
import UserTable from './table';
import HttpResource from './resources/http-resource';
import { User } from './models';

const userTable = new UserTable()
/*axios.get('https://reqres.in/api/users')
    .then(response => {
        userTable.populate(response.data.data);
    });*/

const http = axios.create({
    baseURL: 'https://reqres.in/api'
});

const userResource = new HttpResource(http, 'users');

userResource
        .list<{data: User[]}>()
        .then(response => {
            userTable.populate(response.data.data);
        })

const productResource = new HttpResource(http, 'products');

productResource.list()
    