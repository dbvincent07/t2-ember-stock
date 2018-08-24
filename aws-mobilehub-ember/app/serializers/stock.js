import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    primaryKey: 'symbol',
    normalizeResponse(store, primaryModelClass, payload, id, requestType){       
        payload = {stock: payload};       
        console.log(payload);
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});

