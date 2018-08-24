import Route from '@ember/routing/route';

export default Route.extend({
    
    authentication: Ember.inject.service(),
	beforeModel() {
		var auth = this.get('authentication');
		if (!auth.authenticated) {
			this.transitionTo('index');
		}
	},
    model(){
        return this.store.findAll('stock');
    }
    
   /*
   model() {
    return Ember.RSVP.hash({
        notes: this.get('store').findAll('stock')
    });
    },
    setupController(controller, model) {
        Ember.set(controller,'stock', model.stock);
    }
    */
   /*
   authentication: Ember.inject.service(),
	beforeModel() {
		var auth = this.get('authentication');
		if (!auth.authenticated) {
			this.transitionTo('index');
		}
	},
	model() {
		return Ember.RSVP.hash({
			notes: this.get('store').findAll('stock')
		});
    }
    */
});
