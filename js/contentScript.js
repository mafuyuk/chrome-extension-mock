function injectScript(filepath) {
  // body要素取得
  const body = document.getElementsByTagName('body')[0];

  // bosyに追加するjsタグ用意
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', chrome.extension.getURL(filepath));

  // bodyにscript挿入
  return body.appendChild(script);
}

injectScript('js/embededScript.js');