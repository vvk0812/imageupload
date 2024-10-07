var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    Title: {
        type: String,
        required:true
    },
    Heading: {
        type: String,
        default: ''
    },
    paragraph: {
         type: String,
        default: ''
    },
    lines: {
        type: Map,  
        of: String  
      },
    image: {
        type:String,
        set:(icon)=>{
        if(icon){return icon}return;},
        default:" "        
   },
 },
  { timestamps: true });

var blogtaskdata = new mongoose.model('blogTask', schema);
module.exports = blogtaskdata;