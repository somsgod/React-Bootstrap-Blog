let axios = require('axios');
let MockAdapter = require('axios-mock-adapter');
let mock = new MockAdapter(axios);

function fakeBlogDescription(slug){
    let html = '';
    switch (slug) {
      case 'world':
        html += '<h2 className="blog-post-title">'+ slug.charAt(0).toUpperCase() + slug.slice(1) +'</h2>';
        html += '<p className="blog-post-meta">'+ new Date().toLocaleDateString("en-US") +' by <a href="#">God</a></p>';
        html += '<p>This blog post shows a few different types of content thats supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>';
        html += '<hr />';
        html += '<p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>';
        html += '<blockquote>';
        html += '<p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>';
        html += '</blockquote>';
        html += '<p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>';
        break;
      case  'india':
        html += '<h2 className="blog-post-title">'+slug.charAt(0).toUpperCase() + slug.slice(1)+'</h2>';
        html += '<p className="blog-post-meta">'+ new Date().toLocaleDateString("en-US") +' by <a href="#">God</a></p>';
        html += '<p>This blog post shows a few different types of content thats supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>';
        html += '<hr />';
        html += '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>';
        break;
      case 'technology':
        html += '<h2 className="blog-post-title">'+slug.charAt(0).toUpperCase() + slug.slice(1)+'</h2>';
        html += '<p className="blog-post-meta">'+ new Date().toLocaleDateString("en-US") +' by <a href="#">God</a></p>';
        html += '<p>This blog post shows a few different types of content thats supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>';
        html += '<hr />';
        html += '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)..</p>';
        break;
      case 'design':
        html += '<h2 className="blog-post-title">'+slug.charAt(0).toUpperCase() + slug.slice(1)+'</h2>';
        html += '<p className="blog-post-meta">'+ new Date().toLocaleDateString("en-US") +' by <a href="#">God</a></p>';
        html += '<p>This blog post shows a few different types of content thats supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>';
        html += '<hr />';
        html += '<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>';
        break;
      case 'business':
        html += '<h2 className="blog-post-title">'+slug.charAt(0).toUpperCase() + slug.slice(1)+'</h2>';
        html += '<p className="blog-post-meta">'+ new Date().toLocaleDateString("en-US") +' by <a href="#">God</a></p>';
        html += '<p>This blog post shows a few different types of content thats supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>';
        html += '<hr />';
        html += '<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>';
        break;
      }
    return html;
}

mock.onGet('/fetch-blog-details', { params: { slug: 'world' } }).reply(200, {
  data: [{'description' : fakeBlogDescription('world')}]
});

mock.onGet('/fetch-blog-details', { params: { slug: 'india' } }).reply(200, {
  data: [{'description' : fakeBlogDescription('india')}]
});

mock.onGet('/fetch-blog-details', { params: { slug: 'technology' } }).reply(200, {
  data: [{'description' : fakeBlogDescription('technology')}]
});

mock.onGet('/fetch-blog-details', { params: { slug: 'design' } }).reply(200, {
  data: [{'description' : fakeBlogDescription('design')}]
});

mock.onGet('/fetch-blog-details', { params: { slug: 'business' } }).reply(200, {
  data: [{'description' : fakeBlogDescription('business')}]
});

export default function request(slug){
  return new Promise(function (resolve, reject) {
      axios.get('/fetch-blog-details', { params: { slug: slug } } )
        .then(function(response) {
          setTimeout(function(){
            resolve(response);
          },1000);
      }).catch((error) => {
          reject(error.response);
      });
    });
}