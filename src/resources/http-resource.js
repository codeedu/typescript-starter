export default class HttpResource {

    constructor(http, resource) {
        this.http = http;
        this.resource = resource;
    }

    list(){
        return this.http.get(this.resource);
    }

    get(id){
        return this.http.get(`${this.resource}/${id}`);
    }

    create(data){
        return this.http.post(this.resource, data);
    }

    update(id, data){
        return this.http.put(`${this.resource}/${id}`, data);
    }

    partialUpdate(id, data){
        return this.http.patch(`${this.resource}/${id}`, data)
    }

    delete(id){
        return this.http.delete(`${this.resource}/${id}`);
    }
}
