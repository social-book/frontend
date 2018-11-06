export class DomBuilderForHomeComponent {

  static liList: ListItem[] = [];

  static buildRawListItemsAndConnect(lc, data) {

    for (let i = 0; i < data.length; i++) {
      //// divbuild
      const childList = document.createElement('li');
      childList.className = 'inheritsize';

      const childDivRoot = document.createElement('div');
      childList.className = 'floating inheritsize';

      const childNameSpace = document.createElement('div');
      childList.className = 'namedata';

      const childImgSpace = document.createElement('div');
      childList.className = 'floating container';


      lc.appendChild(childList);
      childList.appendChild(childDivRoot);
      childDivRoot.appendChild(childNameSpace);
      childDivRoot.appendChild(childImgSpace);


      const de = {};
      de['li'] = childList;
      de['divRoot'] = childDivRoot;
      de['']

      this.liList.push(new ListItem(de, i));


    }
  }

}

export class ListItem {
  seq_nr: number;
  domElements;
  // listElement;
  // divlistRoot;

  constructor(de, seq_nr){
    this.domElements = de;
    // this.listElement = listElement;
    // this.divlistRoot = div;
    this.seq_nr = seq_nr;
  }
}
