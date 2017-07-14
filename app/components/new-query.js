import Ember from 'ember';

export default Ember.Component.extend({
  queryForm:false,
  actions:{
    showQueryForm(){
      this.set('queryForm',true);
    },
    saveQuery(){
      var params={
        author: this.get('author'),
        topic: this.get('topic'),
        question: this.get('question'),
        image: this.get('image'),
      };
      this.set('queryForm',false);
      this.sendAction('saveQuery',params);
    }
  }
});
