$(document).ready(function() {

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

    function loadContentFromCSV() {
        $.ajax({
            type: "GET",
            url: "https://raw.githubusercontent.com/EricLindCS/ericlindcs.github.io/refs/heads/links-page/linkspage/links.csv",
            dataType: "text",
            success: function(data) {
                processData(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to load CSV file:", status, error);
                window.location.replace("404.html");
            }
        });
    }

    function processData(csv) {
        var navContainer = $("#nav-links");
        var contentContainer = $("#main-content");
    
        var lines = csv.split("\n");
        var headers = lines[0].split(",");
    
        for (var i = 1; i < lines.length - 1; i++) {
            var data = lines[i].split(",");
    
            // Populate navigation links
            var navLink = '<li><a href="#' + data[0] + '">' + data[1] + '</a></li>';
            navContainer.append(navLink);
    
            // Populate main content
            var sectionHtml = '<section id="' + data[0] + '">';
            sectionHtml += '<h2>' + data[1] + '</h2>';
            sectionHtml += '<p>' + data[2] + '</p>';
            sectionHtml += '<ul>';
            for (var j = 3; j < data.length; j += 3) {
                var linkTitle = data[j];
                var linkUrl = data[j + 1];
                var linkDescription = data[j + 2];
                if (linkTitle && linkUrl && linkDescription) {
                    sectionHtml += '<li><a href="' + linkUrl + '">' + linkTitle + '</a><p>' + linkDescription + '</p></li>';
                }
            }
            sectionHtml += '</ul>';
            sectionHtml += '</section>';
    
            contentContainer.append(sectionHtml);
        }
    }

    function displayFileContents() {
        $.ajax({
            type: "GET",
            url: "links.csv",
            dataType: "text",
            success: function(csvData) {
                console.log("Contents of links.csv:", csvData);
            },
            error: function(xhr, status, error) {
                console.error("Failed to load CSV file:", status, error);
            }
        });
    }

    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });

    // Existing code
    function displayFileContents() {
        $.ajax({
            type: "GET",
            url: "links.csv",
            dataType: "text",
            success: function(csvData) {
                console.log("Contents of links.csv:", csvData);
            },
            error: function(xhr, status, error) {
                console.error("Failed to load CSV file:", status, error);
            }
        });
    }

    loadContentFromCSV();
    displayFileContents();
});

