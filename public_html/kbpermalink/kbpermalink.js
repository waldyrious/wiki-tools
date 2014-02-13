(function(d, loc) {
    // First check if we're actually on a OCLC PICA site
    var htmlAttrs = document.querySelector('html').attributes;

    if ( (!htmlAttrs.length) ||
         (htmlAttrs[0].nodeValue.indexOf("oclcpica") === -1)
    ) {
        alert("This is not an OCLC PICA catalogue...");
        return;
    }

    var links = document.querySelectorAll('.link_gen');
    var link = [].slice.call(links).filter(function(l) {
        return l.href.indexOf("PPN") !== -1 && l.href.indexOf('SAVEINFO') !== -1;
    });

    if (!link.length) {
        alert("No PPN found for this record :(");
        return;
    }

    var ppn = link[0].href.match(/PPN=(\d\w*)/)[1];
    var baseUrl = loc.protocol + '//' + loc.hostname;
    var url = baseUrl + "/PPN?PPN=" + ppn;
    window.prompt("Here's the permalink", url);
})(document, window.location);