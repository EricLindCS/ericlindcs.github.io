$(document).ready(function() {
    function loadContentFromJSON() {
        $.ajax({
            type: "GET",
            url: "https://raw.githubusercontent.com/EricLindCS/website/main/linkspage/links.json",
            dataType: "json",
            success: function(data) {
                processData(data);
            },
            error: function(xhr, status, error) {
                console.error("Failed to load JSON file:", status, error);
            }
        });
    }

    function processData(data) {
        var navContainer = $("#nav-links");
        var contentContainer = $("#main-content");

        data.forEach(function(section) {
            // Populate navigation links
            var navLink = '<li><a href="#' + section.id + '">' + section.title + '</a></li>';
            navContainer.append(navLink);

            // Populate main content
            var sectionHtml = '<section id="' + section.id + '">';
            sectionHtml += '<h2>' + section.title + '</h2>';
            sectionHtml += '<p>' + section.description + '</p>';
            sectionHtml += '<ul>';
            section.links.forEach(function(link) {
                sectionHtml += '<li><a href="#">' + link + '</a></li>';
            });
            sectionHtml += '</ul>';
            sectionHtml += '</section>';

            contentContainer.append(sectionHtml);
        });
    }

    function displayFileContents() {
        $.ajax({
            type: "GET",
            url: "links.json",
            dataType: "json",
            success: function(jsonData) {
                console.log("Contents of links.json:", jsonData);
            },
            error: function(xhr, status, error) {
                console.error("Failed to load JSON file:", status, error);
            }
        });
    }

    loadContentFromJSON();
    displayFileContents();
});
