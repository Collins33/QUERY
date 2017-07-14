import Ember from 'ember';
var questions = [{
  id: 1,
  author: "Veruca Salt",
  topic: "Estate",
  question:"what is life",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
}, {
  id: 2,
  author: "collins",
  topic: "tech",
  question:"what is html",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
}, {
  id: 1,
  author: "leah",
  topic: "business",
  question:"what is VAT",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
}];
export default Ember.Route.extend({
  model(){
    return questions;
  },
});
