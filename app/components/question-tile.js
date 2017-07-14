import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    delete(question){
      if(confirm('Are you sure you want to delete this question?')){
      this.sendAction('delete',question);}
    },
    changeQuery(question,params){
        this.sendAction('changeQuery',question,params);
    }
  }
});
