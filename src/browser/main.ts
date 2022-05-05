const applicationHtml: string = '<section><h1>title</h1></section><section><div>body</div></section>';

document.querySelector('#app')?.insertAdjacentHTML('beforeend', applicationHtml);
