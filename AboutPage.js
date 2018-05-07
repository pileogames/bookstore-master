const {Page, TextView, ui} = require('tabris');
const CoversGalleryPage = require('./CoversGalleryPage');

const TITLE = 'About';
const LICENSE_TEXT = 'Car covers under CC BY 2.0';
const COVERS_LINK_TEXT = 'Covers on flickr';
const ATTRIBUTION_TEXT =
  `by:Jason, Justin, Taylor`;

module.exports = class AboutPage extends Page {

  constructor(properties) {
    super(Object.assign({title: TITLE}, properties));
    this.on({
      appear: () => ui.find('#aboutAction').first().visible = false,
      disappear: () => ui.find('#aboutAction').first().visible = true
    });
    this._createUI();
    this._applyLayout();
    this._applyStyles();
  }

  _createUI() {
    this.append(
      new TextView({id: 'licenseLabel', text: LICENSE_TEXT}),
      new TextView({id: 'coversLink', text: COVERS_LINK_TEXT})
        .on('tap', () => this._showCoversGallery()),
      new TextView({id: 'attributionLabel',text: ATTRIBUTION_TEXT, markupEnabled: true})
    );
  }

  _showCoversGallery() {
    new CoversGalleryPage().appendTo(ui.find('NavigationView').first());
  }

  _applyLayout() {
    this.apply({
      '#licenseLabel': {left: 16, right: 16, top: 16},
      '#coversLink': {left: 16, right: 16, top: 'prev() 8',},
      '#attributionLabel': {left: 16, right: 16, top: 'prev() 8'}
    });
  }

  _applyStyles() {
    this.apply({
      '#coversLink': {textColor: 'rgba(71, 161, 238, 0.75)'}
    });
  }

};
