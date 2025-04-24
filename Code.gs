function onOpen(e) {
  DocumentApp.getUi()
    .createAddonMenu()
    .addItem('Clean Invisible & Non-standard Spaces', 'removeInvisiblesAndFixSpaces')
    .addItem('Settings', 'showSettings')
    .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

function removeInvisiblesAndFixSpaces() {
  const settings = getCleanerSettings();
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  let text = body.getText();

  if (settings.removeInvisible) {
    text = text.replace(/[\u200B\u200C\u200D\uFEFF]/g, '');
  }

  if (settings.removeDirectional) {
    text = text.replace(/[\u200E\u200F\u202A-\u202E\u2060-\u2062]/g, '');
  }

  if (settings.fixSpaces) {
    text = text.replace(/[\u00A0\u1680\u180E\u2000-\u200A\u202F\u205F\u3000\u3164\u2800]/g, ' ');
  }

  body.setText(text);
  DocumentApp.getUi().alert("Document cleaned based on your settings.");
}

function showSettings() {
  const html = HtmlService.createHtmlOutputFromFile('Settings')
    .setWidth(300)
    .setHeight(250);
  DocumentApp.getUi().showModalDialog(html, 'Text Cleaner Settings');
}

function saveCleanerSettings(settings) {
  const props = PropertiesService.getUserProperties();
  props.setProperty('textCleanerOptions', JSON.stringify(settings));
}

function getCleanerSettings() {
  const props = PropertiesService.getUserProperties();
  const raw = props.getProperty('textCleanerOptions');
  if (raw) return JSON.parse(raw);
  return {
    removeInvisible: true,
    fixSpaces: true,
    removeDirectional: false
  };
}
