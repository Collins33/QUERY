import Ember from 'ember';
var questions = [{
  id: 1,
  author: "Veruca Salt",
  topic: "Estate",
  question: "what is life",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
}, {
  id: 2,
  author: "collins",
  topic: "tech",
  question: "what is html",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
}, {
  id: 1,
  author: "leah",
  topic: "business",
  question: "what is VAT",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
}];
export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    delete(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    saveQuery(params) {
      var newQuery = this.store.createRecord('question', params);
      newQuery.save();
      this.transitionTo('index');
    },
    changeQuery(question, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
  }
});
