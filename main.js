import { config } from './config.js';
const Handlebars = window.Handlebars;
const JSONEditor = window.JSONEditor;

JSONEditor.defaults.options.theme = 'bootstrap4';
JSONEditor.defaults.options.required_by_default = true;
JSONEditor.defaults.options.template = "handlebars";
JSONEditor.defaults.iconlib = 'materialicons';
JSONEditor.defaults.options.disable_properties = true;
JSONEditor.defaults.options.disable_edit_json = true;
JSONEditor.defaults.options.disable_collapse = true;
JSONEditor.defaults.options.required_by_default = true;

const element = document.getElementById('editor_holder');
const editor = new JSONEditor(element, config);

document.getElementById('submit').addEventListener('click', function() {
 console.log(editor.getValue());
 var v = editor.getValue();
 var value = 0;
 for (var x in config.schema.properties) {
  for (var z in config.schema.properties[x].properties) {
    if ('value' in config.schema.properties[x].properties[z]) {
      value+=config.schema.properties[x].properties[z].value[v[x][z]];
    } else {
      const ref = config.schema.properties[x].properties[z].$ref.split('/');
      const y = ref[ref.length-1];
      value+=config.schema.definitions[y].value[v[x][z]];
    }
  }
 }
 console.log(value);

 var modal = document.getElementById("result_holder");
 var span = document.getElementById("result_close");
 var modalBody = document.getElementById("result_body");
 var result=config.schema.results.default;
 for (var x in config.schema.results){
   if (value < x) { 
     console.log(x);
     result=config.schema.results[x];
     break;
   }
 }
 modalBody.innerHTML=result;
 modal.style.display = "block";

 span.onclick = function() {
   modal.style.display = "none";
 }

 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 } 
});


