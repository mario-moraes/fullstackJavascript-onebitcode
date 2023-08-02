import { Component } from "./Component.js"
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

//creating an element and passing the father:
const el = new Component("h1", "body", {textContent: "Hello, World!"}); 

// using render (a method inherited from Component) to append title:
el.render();

// modifing element to a h2:
el.tag = 'h2';
el.build().render();

// using modules to append other tags:
const form = new Form('body');
const label = new Label('Nome:', form, { htmlFor: 'nameInput' });
const input = new Input(form, { id: 'nameInput', name: 'birthday' });

form.render();
label.render();
form.addChildren(input);

// adding children elements to form:
form.addChildren(
  new Component('br'),
  new Component('br'),
  new Label('Data de Nascimento:', { htmlFor: 'birthdayInput'}),
  new Input(form, { id: 'birthdayInput', name: 'birthday', type: 'date' })
);