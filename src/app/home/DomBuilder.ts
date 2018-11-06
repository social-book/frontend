export class DomBuilderForHomeComponent {

  static liList: ListItem[] = [];

  static buildRawListItemsAndConnect(lc, data) {

    for (let i = 0; i < data.length; i++) {
      const de = {};
      //// divbuild
      const childList = document.createElement('li');
      childList.className = 'inheritsize';

      const childDivRoot = document.createElement('div');
      childDivRoot.className = 'floating inheritsize';

      const childNameSpace = document.createElement('div');
      childNameSpace.className = 'namedata';

      const childImgSpace = document.createElement('div');
      childImgSpace.className = 'floating container';


      const nameImg = document.createElement('img');
      nameImg.className = 'size128';

      const nameAndSurname = document.createElement('p');
      nameAndSurname.className = 'floating container';


      lc.appendChild(childList);
      childList.appendChild(childDivRoot);
      childDivRoot.appendChild(childNameSpace);
      childDivRoot.appendChild(childImgSpace);
      childNameSpace.appendChild(nameImg);
      childNameSpace.appendChild(nameAndSurname);

      for (let j = 0; i < 4; i++) {
        const divImg = document.createElement('div');
        divImg.className = 'box';

        const imgX = document.createElement('img');
        imgX.id = 'img' + j;

        childDivRoot.appendChild(divImg);
        divImg.appendChild(imgX);

        de['divImg' + j] = nameImg;
        de['img' + j] = nameAndSurname;
      }

      de['li'] = childList;
      de['divRoot'] = childDivRoot;
      de['divnamespace'] = childNameSpace;
      de['childimgspace'] = childImgSpace;
      de['nameimg'] = nameImg;
      de['nameandsurname'] = nameAndSurname;

      this.liList.push(new ListItem(de, i));


    }
  }

}

export class ListItem {
  seq_nr: number;
  private _domElements;
  // listElement;
  // divlistRoot;

  constructor(de, seq_nr) {
    this._domElements = de;
    // this.listElement = listElement;
    // this.divlistRoot = div;
    this.seq_nr = seq_nr;
  }


  get domElements() {
    return this._domElements;
  }
}
