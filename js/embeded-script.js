window.MyEmbededProgram = {
  helloWorld: function() {
    let str  = 'Hello world!';
    let link = '#';

    if (document.getElementsByClassName("reponav js-repo-nav js-sidenav-container-pjax").length === 0) {
      return;
    }

    let e = document.createElement('a');
    e.setAttribute('class', 'js-selected-navigation-item reponav-item');
    e.appendChild(document.createTextNode(str));
    e.href = link;
    document.getElementsByClassName("reponav js-repo-nav js-sidenav-container-pjax").item(0).appendChild(e);
  }
};

MyEmbededProgram.helloWorld();