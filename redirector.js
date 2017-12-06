function redirectPage() {
    var extLink =  document.getElementById("btnLinkExternal").href;
    console.log("Redirecting to " + extLink);
    window.location.href = extLink;
}

redirectPage();
