let p = $('#test');
let div = $('.my-class');
let ul = $('ul');

console.log(p);
console.log(div);
console.log(ul);

console.log(p.text());
p.text('New text');

$('input').attr('placeholder', 'Placeholder Text');

///to add an element to the DOM we can use the four methods; append, prepend, before, and after

div.prepend('<p> prepended paragraph </p>');
div.append('<p> appended paragraph </p>');
div.before('<p> this was a paragraph that was added before the div </p>');
div.after('<p>paragraph added after the div </p>');

///elements to use to remove; remove and empty.  The remove element deletes the elements and all of its children from the DOM.
////The empty method removes all the children from the selected element in the DOM.

div.empty();
ul.remove();

///Sometimes we might want to hide an element from being displayed but not remove it from the DOM.  
///We can use the hide and show methods for this

$('input').hide();
setTimeout(() => $('input').show(), 2000);

///AJAX- asynchronous Javascript and XML
///when we type a URl into our browser search bar and hit enter, our browser sends an HTTP request which stands for 
///hypertext transfer protocol to the server
///AJAX allows us to send a request and get back data behind the scenes

$.get('https://reqres.in/api/users/2', (data) => console.log(data));

$.post('https://reqres.in/api/users/2', {
    name: 'Tommy',
    job: 'Front-End Software Developer',
}, (data) => console.log(data));




