function addHelloTab() {
    if (document.getElementsByClassName("reponav js-repo-nav js-sidenav-container-pjax").length === 0) {
        return;
    }

    const str  = 'Hello';
    const link = '#';

    // 埋め込み用のaタグ作成
    const aTag = document.createElement('a');
    aTag.setAttribute('class', 'js-selected-navigation-item reponav-item');
    aTag.appendChild(document.createTextNode(str));
    aTag.href = link;

    // Githubのタブに新しいタブ追加
    document.getElementsByClassName("reponav js-repo-nav js-sidenav-container-pjax").item(0).appendChild(aTag);
}

addHelloTab();