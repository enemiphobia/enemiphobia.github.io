$(function(){
    $("#replace_with_navbar").load("{{ '/subhtmls/nav.html' | relative_url }}");
    $("#replace_with_footer").load("{{ '/subhtmls/footer.html' | relative_url }}");
  });

// console.log(window.location.origin.substring(0, window.location.origin.length-5));