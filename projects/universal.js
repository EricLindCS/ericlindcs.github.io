  // Function to parse text document and generate HTML content
  function parseTextDocument(text) {


    var header = document.head.html;
    var navContainer = $("#sidebar");
    var contentContainer = $("#main-content");

    console.log(contentContainer);

    const lines = text.trim().split('\n');
    let html = '';

    document.title = lines[0];
    document.getElementById('headerText').innerText = lines[0];

    for (var i = 1; i < lines.length-1; i++) {
      
            // Populate navigation links
            if (lines[i].startsWith('#')) {
                currentSection = lines[i].substring(1).trim();
                var result = currentSection.split(' ').join('')
                var navLink = '<a href="#' + result + '">' + currentSection + '</a>';
                console.log(result);
                navContainer.append(navLink);
            }

            // Populate main content
            if (lines[i].startsWith('#')) {
                currentSection = lines[i].substring(1).trim();
                html += `<h2>${currentSection}</h2>`;
              } 
              else if (lines[i].startsWith('&')) {
                var h = 0;
                for(var p = 1; p < lines[i].length; p++){
                  if(lines[i].substring(p,p+1) === "&"){
                    h+=1;
                  }
                }
                if(lines[i].substring(1,2) === "&"){
                  var temp = lines[i].substring(h+1);
                  html += `<h${h}>${temp}</h${h}>`;
                }
                else {
                  html += `<p>${lines[i].substring(1).trim()}</p>`;
                }
              } 
              else if (lines[i].startsWith('^')) {
                html += `<ul><li>${lines[i].substring(1).trim()}</li></ul>`;
              } 
              else if (lines[i].startsWith('%')) {
                const [url, text] = lines[i].substring(1).split(',').map(item => item.trim());
                html += `<p><a href="${url}">${text}</a></p>`;
              } 
              else if (lines[i].startsWith('@')) {
                const [url, altText] = lines[i].substring(1).split(',').map(item => item.trim());
                html += `<img src="${url}" alt="${altText}">`;
              }
              else if (lines[i].startsWith('[')) {
                var temp = `<section id=${lines[i+1].substring(1).trim().split(' ').join('')}>`;
                console.log(temp);
                html += temp;
              } 
              else if (lines[i].startsWith(']')) {
                html += `</section>`;
              }  
      
    }

    contentContainer.append(html);

}

    // Parse and generate HTML from the text document
  parseTextDocument(textDocument);

  document.addEventListener("DOMContentLoaded", function () {
    var myElement = document.getElementById("loading");

    setTimeout(function () {
        myElement.remove();
        // Optional: Add a class to apply additional styles if needed
        // myElement.classList.add("hidden");
    }, 1000);

    setTimeout(function () {
      myElement.style.opacity = 0;
      // Optional: Add a class to apply additional styles if needed
      // myElement.classList.add("hidden");
    }, 700);

});