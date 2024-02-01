$(document).ready(function() {
    function loadContentFromCSV() {
        $.ajax({
            type: "GET",
            url: "https://raw.githubusercontent.com/EricLindCS/website/main/linkspage/links.csv",
            dataType: "text",
            success: function(data) {
                processData(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to load CSV file:", status, error);
            }
        });
    }

    function processData(csv) {
        var navContainer = $("#nav-links");
        var contentContainer = $("#main-content");

        var lines = csv.split("\n");
        var headers = lines[0].split(",");

        for (var i = 1; i < lines.length-1; i++) {
            var data = lines[i].split(",");
          
                // Populate navigation links
                var navLink = '<li><a href="#' + data[0] + '">' + data[1] + '</a></li>';
                navContainer.append(navLink);

                // Populate main content
                var sectionHtml = '<section id="' + data[0] + '">';
                sectionHtml += '<h2>' + data[1] + '</h2>';
                sectionHtml += '<p>' + data[2] + '</p>';
                sectionHtml += '<ul>';
                for (var j = 3; j < data.length; j += 2) {
                    var linkUrl = data[j];
                    var linkText = data[j + 1];
                    if (linkUrl && linkText) {
                        sectionHtml += '<li><a href="' + linkUrl + '">' + linkText + '</a></li>';
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

    loadContentFromCSV();
    displayFileContents();
});
