function addTab(name) {
    if (document.getElementsByClassName("reponav js-repo-nav js-sidenav-container-pjax")) { return; }

    const aTagProperty = {'str': name, 'link': '#'};

    // 埋め込み用のaタグ作成
    const aTag = document.createElement('a');
    aTag.setAttribute('class', 'js-selected-navigation-item reponav-item');
    aTag.appendChild(document.createTextNode(aTagProperty.str));
    aTag.href = aTagProperty.link;

    // Githubのタブに新しいタブ追加
    document.getElementsByClassName("reponav js-repo-nav js-sidenav-container-pjax").item(0).appendChild(aTag);
}

addTab('hello');