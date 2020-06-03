import { User } from "./models";

export default class UserTable {

    table: HTMLTableElement;
    thead: HTMLTableSectionElement;
    tbody: HTMLTableSectionElement;
    
    constructor() {
        this.table = document.createElement('table');
        this.createHeader();
        this.tbody = this.table.createTBody();
        const body = document.getElementsByTagName('body')[0];
        body.appendChild(this.table);
    }

    createHeader(){
        this.thead = this.table.createTHead();
        const hrow = this.thead.insertRow(0);
        const columns = ['ID', 'email', 'First Name', 'Last Name', 'Avatar'];
        columns.forEach(column => {
            const cell = hrow.insertCell(hrow.cells.length);
            cell.innerHTML = column;
        })
        
    }

    populate(users: User[]){
        users.forEach(user => {
            const row = this.tbody.insertRow(this.tbody.rows.length);
            for(const field of Object.keys(user)){
                const cell = row.insertCell(row.cells.length);
                cell.innerHTML = user[field];
            }
        })
    }

}