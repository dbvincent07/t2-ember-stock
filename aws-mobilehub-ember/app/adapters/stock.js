import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://api.iextrading.com',
    namespace: '1.0/stock/',
    pathForType(){
        let a = 'market/list/infocus';
        return a;
    }
});

