import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    delete(question){
      this.sendAction('delete',question);
    }
  }
});
